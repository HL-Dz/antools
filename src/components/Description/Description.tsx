import { FC } from "react";

type IDesc = {
  text: string;
  cls?: string;
  weight?: string;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  maxWidth?: string;
};
const Description: FC<IDesc> = ({
  text,
  cls,
  weight = "500",
  align = "left",
  maxWidth = "auto",
}) => {
  return (
    <div
      className={`description${cls ? ` ${cls}` : ""}`}
      style={{ fontWeight: weight, textAlign: align, maxWidth }}
    >
      {text}
    </div>
  );
};

export default Description;
