interface ComingSoonProps {
  /** Card shell class: "writing-card writing-soon" on the homepage,
   *  "notes-empty" on the notes index. */
  className: string;
  index?: string;
  title?: string;
  dek?: string;
  /** Optional [left, right] footer labels; omitted on the notes index. */
  foot?: [string, string];
}

/** The shared "nothing published yet" card for the writing surfaces. */
export default function ComingSoon({
  className,
  index = "000 / Notes",
  title = "Coming soon.",
  dek = "Working notes on front-end engineering, design systems, and performance. Publishing here soon.",
  foot,
}: ComingSoonProps) {
  return (
    <div className={className}>
      <div className="card-top">
        <span>{index}</span>
        <span className="ring" aria-hidden="true" />
      </div>
      <div className="card-mid">
        <span className="title">{title}</span>
        <span className="dek">{dek}</span>
      </div>
      {foot && (
        <div className="card-foot">
          <span>{foot[0]}</span>
          <span>{foot[1]}</span>
        </div>
      )}
    </div>
  );
}
