import { FC } from "react";

type IDesc = {
  text: string;
  cls?: string;
  weight?: string;
  align?: "left" | "center" | "right";
};
const Description: FC<IDesc> = ({
  text,
  cls,
  weight = "500",
  align = "left",
}) => {
  return (
    <div
      className={`description${cls ? ` ${cls}` : ""}`}
      style={{ fontWeight: weight }}
    >
      {text}
    </div>
  );
};

export default Description;
