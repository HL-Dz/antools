import { FC } from "react";

type TCompany = {
  id: number;
  name: string;
  image: string;
};

const Company: FC<TCompany> = ({ id, image, name }) => {
  return (
    <div className="company">
      <img src={image} alt={name} />
    </div>
  );
};

export default Company;
