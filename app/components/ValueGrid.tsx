import type { Value } from "@/app/data/content";

/** The four-up values grid on the About plate. */
export default function ValueGrid({ values }: { values: Value[] }) {
  return (
    <div className="values">
      {values.map((v) => (
        <div key={v.title}>
          <b>{v.title}</b>
          {v.body}
        </div>
      ))}
    </div>
  );
}
