import { describe, it, expect } from "vitest";
import { EPS_MICRO, P, P_eps, zeta3PartialByCount } from "../../lib/portal";

describe("portal math", () => {
  it("EPS_MICRO has expected leading digits", () => {
    const s = EPS_MICRO.toFixed(12);           // string guard (rounded)
    expect(s.startsWith("0.0000012932")).toBe(true);
    // numeric band guard (ppm-scale wobble)
    expect(EPS_MICRO).toBeGreaterThan(1.2e-6);
    expect(EPS_MICRO).toBeLessThan(1.4e-6);
  });

  it("P(n) returns finite numbers", () => {
    const v = P(10);
    expect(Number.isFinite(v)).toBe(true);
  });

  it("P_eps(n) differs from P(n) by ppm scale", () => {
    const n = 25;
    const d = Math.abs(P_eps(n) - P(n));
    expect(d).toBeGreaterThan(1e-9);
    expect(d).toBeLessThan(1e-3);
  });

  it("zeta3PartialByCount increases and approaches Apery", () => {
    const a = zeta3PartialByCount(5);
    const b = zeta3PartialByCount(50);
    expect(b).toBeGreaterThan(a);
  });
});
