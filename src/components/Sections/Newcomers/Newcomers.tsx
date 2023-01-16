import Button from "../../Buttons/Button";
import Description from "../../Description/Description";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Tool from "../../Tool/Tool";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../types/useTypedSelector";
import { updateNewcomerTool } from "../../../redux/page-reducer";

const Newcomers = () => {
  const { newcomer_tools } = useTypedSelector((state) => state.page);
  const dispatch = useDispatch();
  const selectTool = (id: number) => {
    dispatch(updateNewcomerTool(id));
  };
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
              {newcomer_tools.map((tool) => {
                return <Tool {...tool} key={tool.id} selectTool={selectTool} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcomers;
