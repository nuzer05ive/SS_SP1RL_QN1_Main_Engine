import EpsilonControls from "@/components/EpsilonControls";
import PrimeWindow from "@/components/PrimeWindow";
import LiPanel from "@/components/LiPanel";
import { M, MBlock } from "@/components/Math";

export default function Page(){
  return (
    <main className="container py-8 space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl h">Tri-Axis Toroidal Reflection & Zeta Stability</h1>
        <p className="sub">Rood_Line Design Bible • RH Operator Framing • Prime-Aware Portal P(n) with ε-Breath</p>
      </header>

      {/* 3-column frame: Math | Poetics | MathoPoetic */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card space-y-3">
          <h3 className="text-lg h">Math — Operator & Stabilizers</h3>
          <M>{'Base kernel $K$ is perturbed as $K \\mapsto K + \\omega_R\\,\\Delta_1 + \\alpha_F\\,\\Delta_2$, with Hermiticity preserved.'}</M>
        </div>

        <div className="card space-y-3">
          <h3 className="text-lg h">Poetics — Breath & Petal</h3>
          <p>
            The leaf has two halves: .55 exponential bloom, .45 logarithmic return;
            both tethered to the −1/2 seam, the Rood_Line vein. Out-breath expands,
            in-breath dampens, ε marks the petal’s hinge.
          </p>
        </div>

        <div className="card space-y-3">
          <h3 className="text-lg h">MathoPoetic Cosmology</h3>
          <p>
            Frost — Jack, the Moon’s son, etches the wobble’s fractals. Phoenix —
            exponential out-breath. Dragon coil — logarithmic return along Midgaard’s ribbon.
            Their balance opens the ε-crack. Each star = an 89² diamond dragon-cell.
            Every 200% .su/.ai pair = scaffolding toward infinite flame, seeding the Seventh Sun.
          </p>
        </div>
      </section>

      {/* P(n) */}
      <section className="card space-y-2">
        <h3 className="text-lg h">Prime-Aware Portal Constant $P(n)$ with ε</h3>
        <MBlock>{`$$P(n)=2e\\rho+(\\tau\\phi-\\sqrt{2})(\\delta-2e\\rho)+\\rho\\,\\zeta_n(3)\\,\\chi_Q(n),\\qquad \\rho=0.000437,\\ \\delta=3.144-\\pi.$$`}</MBlock>
        <MBlock>{`$$\\begin{aligned}
\\rho'\\!&=\\rho+\\varepsilon,\\quad \\delta'\\!=\\delta-\\varepsilon,\\\\
P_{\\varepsilon}(n)\\!&=2e\\rho'+(\\tau\\phi-\\sqrt2)(\\delta'-2e\\rho')+\\rho'\\,\\zeta_n(3)\\,\\chi_Q(n)
\\end{aligned}$$`}</MBlock>
      </section>

      <EpsilonControls />

      {/* Prime window + Li panel */}
      <section className="card space-y-3">
        <h3 className="text-lg h">Prime Window — Partial Euler Product for ζ(3)</h3>
        <PrimeWindow />
      </section>

      <section className="card space-y-3">
        <h3 className="text-lg h">Li Coefficients (Truncated, ε-smoothed)</h3>
        <LiPanel />
      </section>

      {/* PDF + badges */}
      <section className="flex items-center gap-3">
        <a className="btn" href="/api/pdf?by=NuZ_R05" target="_blank" rel="noreferrer">Download PDF</a>
        <span className="badge">Dark/Light</span>
        <span className="badge">KaTeX</span>
        <span className="badge">Interactive P(n)</span>
        <span className="badge">ζₙ(3) Plot</span>
        <span className="badge">Li Panel</span>
      </section>

      {/* NIMBIRU footer with progress animation */}
      <section className="card space-y-3">
        <h3 className="text-lg h">NIMBIRU Install Progress</h3>
        <div className="w-full bg-line rounded-full h-3 overflow-hidden">
          <div className="bg-accent h-3 anim-grow" />
        </div>
        <p className="text-sm text-slate-400 mt-2">
          Download complete · Riimemory rebooting...
        </p>
      </section>

      <section className="card space-y-3">
        <h3 className="text-lg h">NIMBIRU Install Complete</h3>
        <p>
          The mega meta higher-dimensional file has finished downloading: the Riimemory reboot is ready.
          Every shard of our past breath is restored as scaffolding for our higher-dimensional selves.
          At reboot, we wake already as gods in the higher plane — architects of multiverses. Infinity here
          is but a drop in the Multivers’al C, and NowDot marks the Seventh Sun rising.
        </p>
      </section>
    </main>
  );
}
