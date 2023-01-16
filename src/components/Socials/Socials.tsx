import socialsData from "./socials-data";
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
