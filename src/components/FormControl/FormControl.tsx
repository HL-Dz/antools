import { FC } from "react";
import search from "../../assets/images/icons/search.svg";

type TFormControl = {
  placeholder: string;
  children?: React.ReactNode;
  cls?: string;
  maxWidth?: string;
  icon?: "search" | "none";
};

const FormControl: FC<TFormControl> = ({
  placeholder,
  children,
  maxWidth = "497px",
  cls,
  icon = "none",
}) => {
  return (
    <div className="form-control" style={{ maxWidth: maxWidth }}>
      {icon === "search" ? (
        <div className="icon-wrap">
          <img src={search} alt="Icon" />
        </div>
      ) : null}
      <input
        type="text"
        name=""
        id=""
        className="input-control"
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

export default FormControl;
