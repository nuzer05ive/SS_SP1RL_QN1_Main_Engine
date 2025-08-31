export type QSVG = {
  qsvg: string;
  meta?: { title?: string; author?: string; tags?: string[]; stBeat?: string; zcm?: number; node?: string; [k:string]: any };
  canvas: { width:number; height:number; unit:"px"|"mm"|"cm"|"in"; viewBox:string; bg?:string };
  phi?: { tilt?:number; goldenAngle?:number; lattice?:{ cols?:number; rows?:number; skew?:number } };
  pipeline?: any;
  defs?: {
    gradients?: ({ id:string } & (
      { type:"linear"; x1?:number; y1?:number; x2?:number; y2?:number } |
      { type:"radial"; cx?:number; cy?:number; r?:number })
    & { stops:[string,string][] })[];
    symbols?: { id:string; path:string; stroke?:string; fill?:string }[];
  };
  layers: Layer[];
  motion?: { timeline?: MotionClip[] };
};
export type Layer = { id:string; opacity?:number; blend?:string; items:Item[] };
export type Item =
  | { type:"group"; id?:string; items:Item[] }
  | { type:"rect"; id?:string; x:number; y:number; w:number; h:number; rx?:number; fill?:string; stroke?:string; strokeWidth?:number }
  | { type:"circle"; id?:string; cx:number; cy:number; r:number; fill?:string; stroke?:string; strokeWidth?:number }
  | { type:"line"; id?:string; x1:number; y1:number; x2:number; y2:number; stroke?:string; strokeWidth?:number }
  | { type:"polyline"; id?:string; points:[number,number][]; fill?:string; stroke?:string; strokeWidth?:number }
  | { type:"path"; id?:string; d:string; fill?:string; stroke?:string; strokeWidth?:number; strokeDasharray?:string|number[] }
  | { type:"text"; id?:string; x:number; y:number; text:string; fill?:string; font?:{family?:string; size?:number; weight?:string|number} }
  | { type:"image"; id?:string; href:string; x:number; y:number; w:number; h:number }
  | { type:"use"; id?:string; href:string; x?:number; y?:number; scale?:number; rotate?:number };
export type MotionClip = {
  id:string; selector:string;
  when:{ on:"scroll"|"hover"|"click"|"hold"|"swipe"; from?:number; to?:number; ms?:number; direction?:"up"|"down"|"left"|"right" };
  keyframes:Array<{ t:number; [prop:string]:any }>;
  duration?:number; easing?:string;
};
