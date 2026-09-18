import type { LabItem, LabStatus } from "@/app/data/lab";

/** Status reads without relying on colour alone: filled for shipped, dashed
 *  for unfinished, faded for archived (see .lab-status in globals.css).
 *  `satisfies` puts the error on this map when LabStatus grows, rather than on
 *  the JSX that indexes it. */
const statusClass = {
  Live: "is-live",
  WIP: "is-wip",
  Archived: "is-archived",
} as const satisfies Record<LabStatus, string>;

interface LabTagsProps {
  /** Only the two fields drawn as chips, so any item-shaped object works. */
  item: Pick<LabItem, "status" | "kind">;
}

/** The status + kind chip pair, shared by the lab index and the home band. */
export default function LabTags({ item }: LabTagsProps) {
  return (
    <span className="tags">
      <span className={`lab-status ${statusClass[item.status]}`}>
        {item.status}
      </span>
      <span className="lab-kind">{item.kind}</span>
    </span>
  );
}
