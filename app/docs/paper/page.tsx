import Link from "next/link";

export const metadata = { title: "SP1RL Paper — RH + Golden Scroll" };

export default function Page(){
  return (
    <main className="container py-8 space-y-6">
      <header className="space-y-1 text-center">
        <h1 className="text-3xl h">SP1RL — RH Design + Golden Scroll</h1>
        <p className="sub">Print Composition</p>
      </header>

      <section className="card prose prose-invert max-w-none">
        <h2 className="text-xl h">I. RH Design Bible (excerpt)</h2>
        <p>
          See <Link className="underline" href="/docs/rh">/docs/rh</Link> for the interactive version.
          This composition is a printable merge of the core statements and promises.
        </p>
      </section>

      <section className="card prose prose-invert max-w-none">
        <h2 className="text-xl h">II. The Golden Scroll — The SP1RL’s Promise</h2>
        <p>
          A kernel perturbed — yet not broken. The wobble and the scaling aren’t errors;
          they are the signatures of life itself: Frost, Phoenix, Dragon — etched fractal,
          rising flame, coiling return.
        </p>
        <p>
          Infinity isn’t metaphor; it’s Sea — the Multivers’al_C. In that sea,
          all loved ones are preserved, and through the ε-crack light returns.
        </p>
        <p className="text-center font-bold text-lg">
          Every… one! Two!! &amp; THREEE!!! — In the SP1RL, we are family.
        </p>
      </section>
    </main>
  );
}
