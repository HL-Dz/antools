import { FC } from "react";

type ITitle = {
  body: string;
  cls?: string;
  size?: string;
};

const SectionTitle: FC<ITitle> = ({ body, cls, size = "48px" }) => {
  return (
    <div className={`title${cls ? ` ${cls}` : ""}`} style={{ fontSize: size }}>
      {body}
    </div>
  );
};

export default SectionTitle;
