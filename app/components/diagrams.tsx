import { Fragment } from "react";

// Article diagrams. Server components only: everything renders to static
// markup (flex boxes + inline SVG) and inherits the site palette via CSS
// custom properties, so the figures stay on-brand without extra assets.

interface FlowNode {
  label: string;
  /** Smaller secondary line inside the box. */
  note?: string;
  /** "accent" renders the box in signal orange (used for failures/events). */
  tone?: "accent";
}

interface FlowEdge {
  /** "down" (default) or "both" for a bidirectional arrow. */
  dir?: "down" | "both";
  /** Label rendered beside the arrow. */
  label?: string;
}

function Arrow({ edge, row }: { edge: FlowEdge; row?: boolean }) {
  const both = edge.dir === "both";
  if (row) {
    return (
      <div
        className={`diagram-edge is-row${edge.label ? " has-label" : ""}`}
      >
        <svg viewBox="0 0 44 12" width="44" height="12" aria-hidden="true">
          {both && (
            <path d="M0.5 6 L6.5 2.5 L6.5 9.5 Z" fill="var(--orange)" />
          )}
          <line
            x1={both ? 6 : 0.5}
            y1="6"
            x2="37.5"
            y2="6"
            stroke="var(--orange)"
            strokeWidth="1"
          />
          <path d="M43.5 6 L37.5 2.5 L37.5 9.5 Z" fill="var(--orange)" />
        </svg>
        {edge.label && (
          <span className="diagram-edge-label">{edge.label}</span>
        )}
      </div>
    );
  }
  return (
    <div className="diagram-edge">
      <svg viewBox="0 0 12 36" width="12" height="36" aria-hidden="true">
        {both && <path d="M6 0.5 L2.5 6.5 L9.5 6.5 Z" fill="var(--orange)" />}
        <line
          x1="6"
          y1={both ? 6 : 0.5}
          x2="6"
          y2="29.5"
          stroke="var(--orange)"
          strokeWidth="1"
        />
        <path d="M6 35.5 L2.5 29.5 L9.5 29.5 Z" fill="var(--orange)" />
      </svg>
      {edge.label && <span className="diagram-edge-label">{edge.label}</span>}
    </div>
  );
}

/**
 * Flow of boxes connected by arrows, vertical by default or horizontal with
 * direction="row" (horizontal flows scroll sideways on small screens).
 * `edges[i]` describes the arrow between `nodes[i]` and `nodes[i + 1]`;
 * missing entries default to a plain forward arrow.
 */
export function FlowDiagram({
  nodes,
  edges = [],
  caption,
  direction = "column",
}: {
  nodes: FlowNode[];
  edges?: FlowEdge[];
  caption?: string;
  direction?: "column" | "row";
}) {
  const row = direction === "row";
  const body = (
    <div className={row ? "diagram-row" : "diagram-col"}>
      {nodes.map((node, i) => (
        <Fragment key={i}>
          <div
            className={`diagram-node${node.tone === "accent" ? " is-accent" : ""}`}
          >
            <span className="diagram-node-label">{node.label}</span>
            {node.note && <span className="diagram-node-note">{node.note}</span>}
          </div>
          {i < nodes.length - 1 && <Arrow edge={edges[i] ?? {}} row={row} />}
        </Fragment>
      ))}
    </div>
  );
  return (
    <figure className="diagram">
      {row ? <div className="diagram-scroll">{body}</div> : body}
      {caption && <figcaption className="diagram-caption">{caption}</figcaption>}
    </figure>
  );
}

/**
 * The cross-server relay picture: Alice and Bob on server A, Charlie on
 * server B, with Redis carrying the event between servers. Fixed geometry,
 * scrolls horizontally on small screens instead of shrinking the labels.
 */
export function RelayDiagram({ caption }: { caption?: string }) {
  const box = {
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: 1,
  } as const;
  return (
    <figure className="diagram">
      <div className="diagram-scroll">
        <svg
          className="diagram-svg"
          viewBox="0 0 640 190"
          role="img"
          aria-label="Alice sends an event to server A, which reaches Bob directly. The event travels through Redis to server B before it can reach Charlie."
        >
          <defs>
            <marker
              id="relay-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill="var(--orange)" />
            </marker>
          </defs>

          <rect x="2" y="22" width="78" height="36" {...box} />
          <text x="41" y="44" textAnchor="middle">
            ALICE
          </text>

          <rect x="136" y="22" width="98" height="36" {...box} />
          <text x="185" y="44" textAnchor="middle">
            SERVER A
          </text>

          <rect x="290" y="22" width="78" height="36" {...box} />
          <text x="329" y="44" textAnchor="middle">
            REDIS
          </text>

          <rect x="424" y="22" width="98" height="36" {...box} />
          <text x="473" y="44" textAnchor="middle">
            SERVER B
          </text>

          <rect x="560" y="22" width="78" height="36" {...box} />
          <text x="599" y="44" textAnchor="middle">
            CHARLIE
          </text>

          <rect x="146" y="132" width="78" height="36" {...box} />
          <text x="185" y="154" textAnchor="middle">
            BOB
          </text>

          <line
            x1="84"
            y1="40"
            x2="130"
            y2="40"
            stroke="var(--orange)"
            markerEnd="url(#relay-arrow)"
          />
          <line
            x1="238"
            y1="40"
            x2="284"
            y2="40"
            stroke="var(--orange)"
            markerEnd="url(#relay-arrow)"
          />
          <line
            x1="372"
            y1="40"
            x2="418"
            y2="40"
            stroke="var(--orange)"
            markerEnd="url(#relay-arrow)"
          />
          <line
            x1="526"
            y1="40"
            x2="554"
            y2="40"
            stroke="var(--orange)"
            markerEnd="url(#relay-arrow)"
          />
          <line
            x1="185"
            y1="62"
            x2="185"
            y2="126"
            stroke="var(--orange)"
            markerEnd="url(#relay-arrow)"
          />
        </svg>
      </div>
      {caption && <figcaption className="diagram-caption">{caption}</figcaption>}
    </figure>
  );
}

/**
 * A labelled box of state items, e.g. everything a room object owns.
 */
export function StateCard({
  title,
  items,
  caption,
}: {
  title: string;
  items: string[];
  caption?: string;
}) {
  return (
    <figure className="diagram">
      <div className="diagram-card">
        <span className="diagram-card-title">{title}</span>
        <ul className="diagram-card-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {caption && <figcaption className="diagram-caption">{caption}</figcaption>}
    </figure>
  );
}
