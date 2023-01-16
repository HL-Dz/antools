import { useTypedSelector } from "../../types/useTypedSelector";
import Tool from "../Tool/Tool";
import { useDispatch } from "react-redux";
import { updatePopularTool } from "../../redux/page-reducer";

const Tools = () => {
  const { popular_tools } = useTypedSelector((state) => state.page);
  const dispatch = useDispatch();

  const selectTool = (id: number) => {
    dispatch(updatePopularTool(id));
  };
  return (
    <div className="tools">
      {popular_tools.map((el) => {
        return <Tool key={el.id} {...el} selectTool={selectTool} />;
      })}
    </div>
  );
};

export default Tools;
