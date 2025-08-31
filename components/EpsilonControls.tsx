"use client";
import { useMemo, useState } from "react";
import { EPS_MICRO, P, P_eps, RHO, DELTA } from "@/lib/portal";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function EpsilonControls(){
  const [n, setN] = useState(25);
  const [eps, setEps] = useState(EPS_MICRO);

  const data = useMemo(()=>{
    const arr = [] as { n: number; P: number; P_eps: number }[];
    for (let k = 1; k <= Math.max(5, n); k++) arr.push({ n: k, P: P(k), P_eps: P_eps(k) });
    return arr;
  }, [n]);

  const preview = useMemo(()=>({
    base: P(n),
    mod: (()=>{ const rhoP = RHO + eps; const deltaP = DELTA - eps; return P(n, rhoP, deltaP); })()
  }),[n, eps]);

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm text-slate-400">Prime index</div>
          <input className="w-full" type="range" min={2} max={100} value={n} onChange={e=>setN(parseInt(e.target.value))} />
          <div className="text-sm">n = <span className="font-semibold">{n}</span></div>
        </div>
        <div>
          <div className="text-sm text-slate-400">ε (micro-breath)</div>
          <input className="w-64" type="range" min={0} max={0.00001} step={0.0000001} value={eps} onChange={e=>setEps(parseFloat(e.target.value))} />
          <div className="text-sm">ε = <span className="font-mono">{eps.toExponential(6)}</span></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-xs text-slate-400">P(n)</div>
          <div className="text-2xl font-bold">{preview.base.toPrecision(6)}</div>
        </div>
        <div className="card">
          <div className="text-xs text-slate-400">Pε(n)</div>
          <div className="text-2xl font-bold">{preview.mod.toPrecision(6)}</div>
        </div>
        <div className="card">
          <div className="text-xs text-slate-400">Δ = Pε − P</div>
          <div className="text-2xl font-bold">{(preview.mod - preview.base).toExponential(3)}</div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="n" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="P" dot={false} />
            <Line type="monotone" dataKey="P_eps" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
