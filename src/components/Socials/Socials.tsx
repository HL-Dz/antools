import socialsData from "./socials-data";
import fb from "../../assets/images/icons/fb.svg";
import SocialItem from "./SocialItem";

const Socials = () => {
  return (
    <div className="socials">
      {socialsData.map((el) => {
        return <SocialItem {...el} key={el.id} />;
      })}
    </div>
  );
};

export default Socials;
