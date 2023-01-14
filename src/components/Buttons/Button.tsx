import { FC } from "react";

type IButton = {
  type: "primary" | "secondary";
  text: string;
  width?: string;
};

const Button: FC<IButton> = ({ type = "primary", text, width = "auto" }) => {
  let btnType = type === "primary" ? "button-primary" : "button-secondary";
  return (
    <button className={`button ${btnType}`} style={{ minWidth: width }}>
      {text}
    </button>
  );
};

export default Button;
