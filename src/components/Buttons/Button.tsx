import { FC } from "react";

type IButton = {
  type: "primary" | "secondary";
  text: string;
  width?: string;
  cls?: string;
};

const Button: FC<IButton> = ({
  type = "primary",
  text,
  width = "auto",
  cls,
}) => {
  let btnType = type === "primary" ? "button-primary" : "button-secondary";
  return (
    <button
      className={`button ${btnType}${cls ? ` ${cls}` : ""}`}
      style={{ minWidth: width }}
    >
      {text}
    </button>
  );
};

export default Button;
