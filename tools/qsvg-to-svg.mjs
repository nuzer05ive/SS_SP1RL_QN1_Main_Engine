/** Minimal QSVG -> SVG converter (runtime JS) */
function escapeXml(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");}
function attr(obj){return Object.entries(obj).filter(([,v])=>v!==undefined&&v!==null&&v!=="").map(([k,v])=>`${k}="${escapeXml(v)}"`).join(" ");}
function layerToSvg(layer){const a=attr({id:layer.id,opacity:layer.opacity});return `<g ${a}>${(layer.items||[]).map(itemToSvg).join("")}</g>`;}
function transformFromUse(i){const p=[]; if(i.scale) p.push(`scale(${i.scale})`); if(i.rotate) p.push(`rotate(${i.rotate})`); return p.length?p.join(" "):undefined;}
function itemToSvg(i){
  switch(i.type){
    case "group": return `<g ${attr({id:i.id})}>${(i.items||[]).map(itemToSvg).join("")}</g>`;
    case "rect": return `<rect ${attr({id:i.id,x:i.x,y:i.y,width:i.w,height:i.h,rx:i.rx,fill:i.fill,stroke:i.stroke,"stroke-width":i.strokeWidth})}/>`;
    case "circle": return `<circle ${attr({id:i.id,cx:i.cx,cy:i.cy,r:i.r,fill:i.fill,stroke:i.stroke,"stroke-width":i.strokeWidth})}/>`;
    case "line": return `<line ${attr({id:i.id,x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2,stroke:i.stroke,"stroke-width":i.strokeWidth})}/>`;
    case "polyline": return `<polyline ${attr({id:i.id,points:(i.points||[]).map(p=>p.join(",")).join(" "),fill:i.fill,stroke:i.stroke,"stroke-width":i.strokeWidth})}/>`;
    case "path": return `<path ${attr({id:i.id,d:i.d,fill:i.fill,stroke:i.stroke,"stroke-width":i.strokeWidth,"stroke-dasharray":Array.isArray(i.strokeDasharray)?i.strokeDasharray.join(" "):i.strokeDasharray})}/>`;
    case "text": return `<text ${attr({id:i.id,x:i.x,y:i.y,fill:i.fill,"font-family":i.font?.family,"font-size":i.font?.size,"font-weight":i.font?.weight})}>${escapeXml(i.text)}</text>`;
    case "image": return `<image ${attr({id:i.id,href:i.href,x:i.x,y:i.y,width:i.w,height:i.h})}/>`;
    case "use": return `<use ${attr({id:i.id,href:i.href,x:i.x,y:i.y,transform:transformFromUse(i)})}/>`;
    default: return "";
  }
}
export function qsvgToSvg(doc){
  const defs=[];
  if(doc.defs?.gradients){
    defs.push(...doc.defs.gradients.map(g=>{
      if(g.type==="linear"){
        return `<linearGradient id="${g.id}" x1="${g.x1??0}" y1="${g.y1??0}" x2="${g.x2??1}" y2="${g.y2??1}">${g.stops.map(([o,c])=>`<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient>`;
      }
      return `<radialGradient id="${g.id}" cx="${g.cx??0.5}" cy="${g.cy??0.5}" r="${g.r??0.5}">${g.stops.map(([o,c])=>`<stop offset="${o}" stop-color="${c}"/>`).join("")}</radialGradient>`;
    }));
  }
  if(doc.defs?.symbols){
    defs.push(...doc.defs.symbols.map(s=>`<symbol id="${s.id}"><path d="${s.path}" ${s.stroke?`stroke="${s.stroke}"`:""} ${s.fill?`fill="${s.fill}"`:'fill="none"'}/></symbol>`));
  }
  const layers=(doc.layers||[]).map(layerToSvg).join("");
  const bg=doc.canvas?.bg?`<rect x="0" y="0" width="100%" height="100%" fill="${doc.canvas.bg}"/>`:"";
  const defsBlock=defs.length?`<defs>${defs.join("")}</defs>`:"";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${doc.canvas.width}${doc.canvas.unit}" height="${doc.canvas.height}${doc.canvas.unit}" viewBox="${doc.canvas.viewBox}" preserveAspectRatio="xMidYMid meet">${bg}${defsBlock}${layers}</svg>`;
}
