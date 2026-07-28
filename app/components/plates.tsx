import type { CSSProperties, ReactElement } from "react";

/**
 * Deterministic geometric line-art, ported from the design prototype's SVG
 * generators. No randomness: the same props always draw the same plate, so
 * server and client markup match. All strokes are 1px with
 * vector-effect: non-scaling-stroke.
 */

const svgStyle: CSSProperties = { display: "block", width: "100%", height: "100%" };

interface PlateProps {
  /** Stroke (and dot fill) colour; defaults to the surrounding text colour. */
  stroke?: string;
  density?: number;
}

const line = (props: {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke: string;
  opacity?: number;
}) => (
  <line
    key={props.key}
    x1={props.x1}
    y1={props.y1}
    x2={props.x2}
    y2={props.y2}
    stroke={props.stroke}
    strokeWidth={1}
    opacity={props.opacity}
    vectorEffect="non-scaling-stroke"
  />
);

/** Hero plate: chord rosette with concentric circles and a tick ring. */
export function Rosette({ stroke = "currentColor", density = 48 }: PlateProps) {
  const W = 700;
  const c = W / 2;
  const R = 300;
  const pts = Math.max(18, density);
  const P = (i: number): [number, number] => [
    c + Math.cos((i / pts) * Math.PI * 2 - Math.PI / 2) * R,
    c + Math.sin((i / pts) * Math.PI * 2 - Math.PI / 2) * R,
  ];
  // Layered groups so CSS can drift the web and tick ring independently
  // (see .rosette-web / .rosette-ticks in globals.css).
  const web: ReactElement[] = [];
  const rings: ReactElement[] = [];
  const ticks: ReactElement[] = [];
  for (const step of [2, 3, 5]) {
    for (let i = 0; i < pts; i++) {
      const [x1, y1] = P(i);
      const [x2, y2] = P((i + step) % pts);
      web.push(
        line({
          key: `${step}-${i}`,
          x1,
          y1,
          x2,
          y2,
          stroke,
          opacity: step === 5 ? 0.85 : step === 3 ? 0.5 : 0.3,
        }),
      );
    }
  }
  [R, R * 0.62, R * 0.3].forEach((r, k) =>
    rings.push(
      <circle
        key={`c${k}`}
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        opacity={0.7}
        vectorEffect="non-scaling-stroke"
      />,
    ),
  );
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    const len = i % 6 === 0 ? 20 : 10;
    ticks.push(
      line({
        key: `t${i}`,
        x1: c + Math.cos(a) * (R + 8),
        y1: c + Math.sin(a) * (R + 8),
        x2: c + Math.cos(a) * (R + 8 + len),
        y2: c + Math.sin(a) * (R + 8 + len),
        stroke,
        opacity: 0.6,
      }),
    );
  }
  for (let i = 0; i < pts; i++) {
    const [x, y] = P(i);
    web.push(<circle key={`p${i}`} cx={x} cy={y} r={3.4} fill={stroke} />);
  }
  return (
    <svg viewBox={`0 0 ${W} ${W}`} preserveAspectRatio="xMidYMid meet" style={svgStyle} aria-hidden="true">
      <g className="rosette-web">{web}</g>
      <g>{rings}</g>
      <g className="rosette-ticks">{ticks}</g>
    </svg>
  );
}

/** Discipline plate 01: drifting concentric circles. */
export function Spiral({ stroke = "currentColor", density = 26 }: PlateProps) {
  const W = 600;
  const els: ReactElement[] = [];
  for (let i = 0; i < density; i++) {
    const t = i / density;
    const r = 250 * Math.pow(1 - t, 1.08);
    const a = t * Math.PI * 3.1;
    const d = 240 * t * 0.42;
    els.push(
      <circle
        key={i}
        cx={300 + Math.cos(a) * d}
        cy={300 + Math.sin(a) * d}
        r={Math.max(r, 2)}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />,
    );
  }
  return (
    <svg viewBox={`0 0 ${W} ${W}`} preserveAspectRatio="xMidYMid meet" style={svgStyle} aria-hidden="true">
      <g className="spiral-orbit">{els}</g>
    </svg>
  );
}

/** Discipline plate 02: zigzag lattice with node dots. */
export function Lattice({ stroke = "currentColor", cols = 7, rows = 4 }: PlateProps & { cols?: number; rows?: number }) {
  const W = 600;
  const H = 380;
  const dx = W / cols;
  const dy = H / rows;
  // Two layers so CSS can weave them in opposite directions
  // (.lattice-warp / .lattice-weft in globals.css).
  const warp: ReactElement[] = [];
  const weft: ReactElement[] = [];
  for (let r = 0; r <= rows; r++) {
    let up = "";
    let down = "";
    for (let c = 0; c <= cols; c++) {
      const x = c * dx;
      const yA = r * dy + (c % 2 ? dy * 0.5 : 0);
      const yB = r * dy + (c % 2 ? 0 : dy * 0.5);
      up += `${x},${yA} `;
      down += `${x},${yB} `;
      warp.push(<circle key={`d${r}-${c}`} cx={x} cy={yA} r={3.2} fill={stroke} />);
    }
    warp.push(
      <polyline
        key={`u${r}`}
        points={up.trim()}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />,
    );
    weft.push(
      <polyline
        key={`w${r}`}
        points={down.trim()}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        opacity={0.55}
        vectorEffect="non-scaling-stroke"
      />,
    );
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={svgStyle} aria-hidden="true">
      <g className="lattice-warp">{warp}</g>
      <g className="lattice-weft">{weft}</g>
    </svg>
  );
}

/** Discipline plate 03: nested rotating squares. */
export function Nested({ stroke = "currentColor", density = 22 }: PlateProps) {
  const els: ReactElement[] = [];
  for (let i = 0; i < density; i++) {
    const t = i / density;
    const s = 560 * (1 - t * 0.92);
    els.push(
      <rect
        key={i}
        x={300 - s / 2}
        y={300 - s / 2}
        width={s}
        height={s}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        transform={`rotate(${t * 52} 300 300)`}
      />,
    );
  }
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" style={svgStyle} aria-hidden="true">
      <g className="nested-turn">{els}</g>
    </svg>
  );
}

/** Method band: phase-shifted sine field with a baseline tick scale. */
export function Waves({ stroke = "currentColor", density = 21 }: PlateProps) {
  const W = 1600;
  const H = 200;
  const els: ReactElement[] = [];
  for (let i = 0; i < density; i++) {
    const t = i / (density - 1);
    const amp = 12 + t * 62;
    const phase = t * Math.PI * 1.6;
    const freq = 2 + t * 2.4;
    let d = "";
    for (let x = 0; x <= W; x += 8) {
      const y = H / 2 + Math.sin((x / W) * Math.PI * freq + phase) * amp * Math.sin((x / W) * Math.PI);
      d += `${x === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
    }
    // Base opacity doubles as the CSS shimmer ceiling; the negative delay
    // staggers the pulse so it reads as a wave travelling through the field.
    const baseOpacity = 0.35 + t * 0.5;
    els.push(
      <path
        key={`w${i}`}
        className="wave-path"
        d={d.trim()}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        opacity={baseOpacity}
        vectorEffect="non-scaling-stroke"
        style={
          {
            "--wave-o": baseOpacity,
            animationDelay: `${(-t * 7).toFixed(2)}s`,
          } as CSSProperties
        }
      />,
    );
  }
  for (let i = 0; i <= 32; i++) {
    const x = (i / 32) * W;
    els.push(
      line({ key: `t${i}`, x1: x, y1: H - 10, x2: x, y2: H - (i % 4 === 0 ? 26 : 18), stroke, opacity: 0.5 }),
    );
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={svgStyle} aria-hidden="true">
      {els}
    </svg>
  );
}

/** Contact backdrop: crossing diagonals forming a moiré fan. */
export function Moire({ stroke = "currentColor", density = 30 }: PlateProps) {
  const W = 900;
  const H = 260;
  const els: ReactElement[] = [];
  for (let i = 0; i < density; i++) {
    const t = i / (density - 1);
    const x = Math.pow(t, 1.7) * W;
    els.push(line({ key: `l${i}`, x1: x, y1: 0, x2: W - x, y2: H, stroke }));
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={svgStyle} aria-hidden="true">
      {els}
    </svg>
  );
}
