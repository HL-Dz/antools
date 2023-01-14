import Tool from "../Tool/Tool";
import data from "./tools-data";

const Tools = () => {
  return (
    <div className="tools">
      {data.map((el) => {
        return <Tool key={el.id} {...el} />;
      })}
    </div>
  );
};

export default Tools;
