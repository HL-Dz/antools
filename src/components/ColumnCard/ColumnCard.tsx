import { FC } from "react";

type IProps = {
  id: number;
  title: string;
  links: TLink[];
};

type TLink = {
  id: number;
  text: string;
  href: string;
};

const ColumnCard: FC<IProps> = ({ title, links }) => {
  return (
    <ul className="column-card">
      <div className="column-title">{title}</div>
      {links.map((link) => {
        return (
          <li className="column-item" key={link.id}>
            <a className="column-link" href={link.href}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ColumnCard;
