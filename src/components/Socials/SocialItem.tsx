import { FC } from "react";

type Props = {
  id: number;
  text: string;
  icon: string;
  link: string;
};

const SocialItem: FC<Props> = ({ id, icon, link, text }) => {
  return (
    <div className="social-item">
      <a href={link} target="_blank">
        <img src={icon} alt={text} />
      </a>
    </div>
  );
};

export default SocialItem;
