import { WorkCard } from "./workType";

export type CardProps = {
  project: WorkCard;
  onHover: (id: string | null) => void;
  hovered: string | null;
};
