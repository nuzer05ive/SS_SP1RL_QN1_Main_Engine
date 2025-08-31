export default function Home(){
  return (
    <main className="container py-12 space-y-6">
      <h1 className="text-4xl h">PRiiVi3 • Math Portal</h1>
      <p className="sub">Bridging the PRiiVi3_iNSTiTuTe (pure math) and SP1RL_O-S (SaaS/Game) — procedural story from modular matrices, with transparent on-chain economy.</p>
      <section className="card space-y-3">
        <h2 className="text-xl h">Start Here</h2>
        <ul className="list-disc pl-6">
          <li><a className="underline" href="/docs/rh">RH Design Bible: P(n), ε-breath, prime windows, Li panel</a></li>
          <li>Mod-Matrix Engine (coming): content from inputs × math → assets</li>
          <li>On-chain tie-ins (coming): mint events, transparent splits, micro-to-infinite scaling</li>
        </ul>
      </section>
    </main>
  );
}
