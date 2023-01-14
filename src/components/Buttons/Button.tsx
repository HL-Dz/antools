import { FC } from "react";

type IButton = {
  type: "primary" | "secondary";
  text: string;
};

const Button: FC<IButton> = ({ type = "primary", text }) => {
  let btnType = type === "primary" ? "button-primary" : "button-secondary";
  return <button className={`button ${btnType}`}>{text}</button>;
};

export default Button;
