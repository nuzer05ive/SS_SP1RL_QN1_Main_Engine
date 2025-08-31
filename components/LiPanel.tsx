"use client";
import { useMemo, useState } from "react";
import { EPS_MICRO, liCoefficientsTruncated, ZETA_ZERO_IMAG } from "@/lib/portal";

export default function LiPanel(){
  const [N, setN] = useState(8);
  const [scale, setScale] = useState(1);

  const coeffs = useMemo(()=> liCoefficientsTruncated(N, ZETA_ZERO_IMAG, EPS_MICRO*scale), [N, scale]);
  const pass = coeffs.every(x => x >= 0);

  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-slate-400">Li-coeffs count</div>
          <input className="w-56" type="range" min={3} max={12} value={N} onChange={e=>setN(parseInt(e.target.value))} />
          <div className="text-sm">N = <span className="font-semibold">{N}</span></div>
        </div>
        <div>
          <div className="text-sm text-slate-400">ε smoothing scale</div>
          <input className="w-64" type="range" min={0} max={3} step={0.1} value={scale} onChange={e=>setScale(parseFloat(e.target.value))} />
          <div className="text-sm">ε × <span className="font-mono">{scale.toFixed(1)}</span></div>
        </div>
        <div className={`px-3 py-1 rounded-full border ${pass?"border-green-500 text-green-400":"border-yellow-500 text-yellow-400"}`}>
          {pass? "PASS (truncated, exp)" : "CHECK (truncated)"}
        </div>
      </div>
      <ul className="grid md:grid-cols-4 gap-2">
        {coeffs.map((v,i)=> (
          <li key={i} className={`p-3 rounded-xl border ${v>=0?"border-line":"border-red-500/40"}`}>
            <div className="text-xs text-slate-400">λ{i+1}</div>
            <div className={`text-lg font-bold ${v>=0?"":"text-red-400"}`}>{v.toExponential(3)}</div>
          </li>
        ))}
      </ul>
      <div className="text-xs text-slate-400">Experimental: truncated zeros & ε-regularization; positivity here is supportive but not a proof.</div>
    </div>
  );
}
