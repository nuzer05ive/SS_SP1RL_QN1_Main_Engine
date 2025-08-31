"use client";
import { useMemo, useState } from "react";
import { zeta3PartialByCount, ZETA3_APERY } from "@/lib/portal";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function PrimeWindow(){
  const [N, setN] = useState(120);
  const data = useMemo(()=>{
    const arr: { n:number; z3:number; err:number; logerr:number }[] = [];
    for (let n=1;n<=N;n++){
      const z3 = zeta3PartialByCount(n);
      const err = ZETA3_APERY - z3;
      const logerr = Math.log10(Math.abs(err));
      arr.push({ n, z3, err, logerr });
    }
    return arr;
  },[N]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-slate-400">Prime window (count)</div>
        <input className="w-72" type="range" min={10} max={300} value={N} onChange={e=>setN(parseInt(e.target.value))} />
        <div className="text-sm">N = <span className="font-semibold">{N}</span></div>
      </div>
      <div className="card h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="n" />
            <YAxis domain={[1.15, 1.25]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="z3" name="ζ_n(3)" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="card h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="n" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="logerr" name="log10|ζ(3)−ζ_n(3)|" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
