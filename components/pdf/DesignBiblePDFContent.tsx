import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, lineHeight: 1.4, fontFamily: "Courier" },
  h1: { fontSize: 18, fontWeight: 700, marginBottom: 6 },
  h2: { fontSize: 14, fontWeight: 700, marginVertical: 8 },
  p:  { marginVertical: 4 },
  hr: { marginVertical: 8, borderBottomWidth: 1, borderBottomColor: "#bbb" },
  sub:{ fontSize: 10, color: "#555", marginTop: 6 },
  code:{ backgroundColor: "#eef", padding: 4, borderRadius: 2, marginVertical: 6 },
  math:{ backgroundColor: "#f5f7fb", padding: 6, borderRadius: 2, marginVertical: 8 }
});

const EPS = "0.000001293202564599051293100499461695508638360660417666";
function wrap(s: string, n = 48) {
  const lines: string[] = [];
  for (let i = 0; i < s.length; i += n) lines.push(s.slice(i, i + n));
  return lines.join("\n");
}

export default function DesignBiblePDFContent({ by = "", date = "" }: { by?: string; date?: string }) {
  return (
    <>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.h1}>Tri-Axis Toroidal Reflection & Zeta Stability</Text>
        <Text>Rood_Line Design Bible · RH Operator Framing · Prime-Aware Portal P(n) with epsilon-breath</Text>
        <View style={styles.hr} />
        <Text style={styles.h2}>Abstract</Text>
        <Text style={styles.p}>
          We frame a Hilbert-Polya style operator construction where a self-adjoint kernel encodes modular
          prime adjacency (mod-3/6/9) with stabilizing perturbations ("wobble" and "scaling") to keep the
          spectrum real and aligned to the critical line. Zeta zeros are read as 1/2 +/- i*lambda_n, while a
          story-seed micro-wobble epsilon supplies ppm-scale regularization consistent with per-prime
          Euler-product steps.
        </Text>

        <Text style={styles.h2}>Story-Seed Micro-Wobble (epsilon)</Text>
        <Text style={styles.p}>rho = 0.000437;  x = 7.55/(4*60) - pi/100;  epsilon_micro = | x - rho/10 |</Text>
        <Text style={styles.code}>{wrap(EPS)}</Text>

        <Text style={styles.h2}>Prime-Aware Portal Constant P(n) with epsilon</Text>
        <View style={styles.math}>
          <Text>P(n) = 2*e*rho + (tau*phi - sqrt(2))*(delta - 2*e*rho) + rho*zeta_n(3)*chi_Q(n)</Text>
          <Text>where: rho = 0.000437,  delta = 3.144 - pi</Text>
          <Text>rho_prime = rho + epsilon;  delta_prime = delta - epsilon</Text>
          <Text>P_epsilon(n) = 2*e*rho_prime + (tau*phi - sqrt(2))*(delta_prime - 2*e*rho_prime)</Text>
          <Text>               + rho_prime*zeta_n(3)*chi_Q(n)</Text>
        </View>

        <View style={styles.hr} />
        <Text style={styles.sub}>
          {by ? `Compiled for ${by}` : ""} {date ? `• ${date}` : ""}
        </Text>
        <Text style={styles.p}>
          Disclaimer: Operator framing consistent with Hilbert-Polya; not a standalone proof of RH. Proceed with
          explicit operator construction and numerical validation.
        </Text>
      </Page>
    </>
  );
}
