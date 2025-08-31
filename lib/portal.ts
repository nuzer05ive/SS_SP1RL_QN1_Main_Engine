export const RHO = 0.000437; // wobble
export const DELTA = 3.144 - Math.PI; // long-cycle slip
export const EPS_MICRO = 0.000001293202564599051293100499461695508638360660417666; // |x - rho/10|
export const ZETA3_APERY = 1.202056903159594; // ζ(3)

export function chiQ(n: number): number { return n % 2 === 0 ? 1 : -1; }

export function P(n: number, rho = RHO, delta = DELTA): number {
  const phi = (1 + Math.sqrt(5)) / 2;
  const tau = 2 * Math.PI;
  const e = Math.E;
  return 2 * e * rho + (tau * phi - Math.SQRT2) * (delta - 2 * e * rho) + rho * zeta3PartialByCount(n) * chiQ(n);
}

export function P_eps(n: number): number {
  const rhoP = RHO + EPS_MICRO;
  const deltaP = DELTA - EPS_MICRO;
  return P(n, rhoP, deltaP);
}

// --- ζ(3) partial Euler product utilities ---
export function zeta3PartialByCount(n: number): number {
  const primes = firstNPrimes(Math.max(1, n));
  let z = 1;
  for (const p of primes) z *= 1 / (1 - 1 / (p ** 3));
  return z;
}

function nthPrimeUpperBound(n: number){
  if (n < 6) return 15;
  const nn = n;
  const logn = Math.log(nn);
  const loglog = Math.log(logn);
  return Math.ceil(nn * (logn + loglog) + 3);
}

function firstNPrimes(n: number): number[] {
  const limit = nthPrimeUpperBound(n);
  const sieve = new Uint8Array(limit + 1);
  const primes: number[] = [];
  for (let i = 2; i <= limit && primes.length < n; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i * 2; j <= limit; j += i) sieve[j] = 1;
    }
  }
  return primes;
}

// --- Li/Keiper coefficients (truncated, experimental) ---
export const ZETA_ZERO_IMAG: number[] = [
  14.134725141734693, 21.022039638771554, 25.010857580145688,
  30.424876125859514, 32.93506158773919, 37.58617815882567,
  40.918719012147495, 43.327073280914999, 48.005150881167159,
  49.773832477672302
];

type C = { re: number; im: number };
const c = (re: number, im = 0): C => ({ re, im });
const csub = (a: C, b: C): C => c(a.re - b.re, a.im - b.im);
const cmul = (a: C, b: C): C => c(a.re*b.re - a.im*b.im, a.re*b.im + a.im*b.re);
const cinv = (z: C): C => { const d = z.re*z.re + z.im*z.im; return c(z.re/d, -z.im/d); };
const cre = (z: C): number => z.re;

function cpowInt(z: C, n: number): C {
  if (n === 0) return c(1,0);
  let r = c(1,0), b = z, e = n;
  while (e > 0){ if (e & 1) r = cmul(r,b); b = cmul(b,b); e >>= 1; }
  return r;
}

export function liCoefficientsTruncated(N: number, zeros: number[] = ZETA_ZERO_IMAG, eps = EPS_MICRO): number[] {
  const out: number[] = [];
  for (let n = 1; n <= N; n++) {
    let sum = 0;
    for (const t of zeros) {
      const rho = c(0.5, t + eps); // smoothing as imaginary shift
      const oneMinusInv = csub(c(1,0), cinv(rho));
      const term = csub(c(1,0), cpowInt(oneMinusInv, n));
      sum += 2 * cre(term); // add conjugate via 2*Re
    }
    out.push(sum);
  }
  return out;
}
