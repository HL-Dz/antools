import Button from "../../Buttons/Button";
import Description from "../../Description/Description";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Tool from "../../Tool/Tool";
import data from "./newcomers-data";

const Newcomers = () => {
  return (
    <div className="newcomers">
      <div className="container">
        <div className="newcomers__wrap">
          <div className="newcomers__left">
            <SectionTitle body="Newcomer Tools" size="50px" />
            <Description
              text="Wow! see the latest update of the most recommended tools from reliable designers and developers"
              maxWidth="427px"
            />
            <Button text="Explore more" type="primary" />
          </div>
          <div className="newcomers__right">
            <div className="newcomers__list">
              {data.map((tool) => {
                return <Tool {...tool} key={tool.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcomers;
