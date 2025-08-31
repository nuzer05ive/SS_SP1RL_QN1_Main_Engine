export default function LegalPage(){
  return (
    <main className="container py-12 space-y-6">
      <h1 className="text-3xl h">Legal Notice</h1>

      <section className="card space-y-3">
        <h2 className="text-xl h">Trademarks</h2>
        <p>
          The names <strong>PRiiVi3™</strong>, <strong>SP1RL-OS™</strong>, 
          <strong>ε-Wobble Gateway™</strong>, and related marks, logos, and
          brand identities are claimed as trademarks and service marks of
          Nicholas P. Rood. Unauthorized use in commerce is prohibited.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-xl h">Copyright</h2>
        <p>
          © {new Date().getFullYear()} Nicholas P. Rood. All Rights Reserved.
        </p>
        <p>
          All original text, source code, diagrams, and media published
          within this portal are protected by copyright law. Copying,
          redistribution, or derivative works without express permission
          is prohibited except as allowed by license terms.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-xl h">Disclaimer</h2>
        <p>
          Mathematical formulas and abstract concepts described herein
          are not subject to exclusive rights. Legal protection applies
          only to the expression, implementation, and branding of these
          ideas.
        </p>
      </section>
    </main>
  );
}
