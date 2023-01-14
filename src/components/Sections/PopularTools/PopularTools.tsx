import Button from "../../Buttons/Button";
import Description from "../../Description/Description";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Tools from "../../Tools/Tools";

const PopularTools = () => {
  return (
    <div className="popular-tools">
      <div className="container">
        <div className="flex-column">
          <SectionTitle body="Most Popular Tools" align="center" />
          <Description
            text="Tools for the best Designers and Developers most popularly used in the world"
            align="center"
            maxWidth="427px"
          />
          <Tools />
          <div className="tools-buttons">
            <Button text="Load more" type="secondary" cls="button-load" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTools;
