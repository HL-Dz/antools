import { FC } from "react";

type ITitle = {
  body: string;
  cls?: string;
  size?: string;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
};

const SectionTitle: FC<ITitle> = ({
  body,
  cls,
  size = "48px",
  align = "start",
}) => {
  return (
    <div
      className={`title${cls ? ` ${cls}` : ""}`}
      style={{ fontSize: size, textAlign: align }}
    >
      {body}
    </div>
  );
};

export default SectionTitle;
