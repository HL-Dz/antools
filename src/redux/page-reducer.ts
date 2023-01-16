import {
  PagesAction,
  PageTypes,
  SetNewcomerAction,
  SetSelectedAction,
  TTool,
} from "../types/types";
import data from "../components/Tools/tools-data";
import newcomersData from "../components/Sections/Newcomers/newcomers-data";

let initialState = {
  popular_tools: data as Array<TTool> | [],
  newcomer_tools: newcomersData as Array<TTool> | [],
};

type PageInitialState = typeof initialState;

const pageReducer = (
  state = initialState,
  action: PagesAction
): PageInitialState => {
  switch (action.type) {
    case PageTypes.SELECT_POPULAR_TOOL:
      return {
        ...state,
        popular_tools: state.popular_tools.map((el) => {
          if (el.id !== action.payload) {
            return el;
          } else {
            return { ...el, selected: !el.selected };
          }
        }),
      };
    case PageTypes.SELECT_NEWCOMER_TOOL:
      return {
        ...state,
        newcomer_tools: state.newcomer_tools.map((el) => {
          if (el.id !== action.payload) {
            return el;
          } else {
            return { ...el, selected: !el.selected };
          }
        }),
      };
    default:
      return state;
  }
};

export const updatePopularTool = (id: number): SetSelectedAction => ({
  type: PageTypes.SELECT_POPULAR_TOOL,
  payload: id,
});

export const updateNewcomerTool = (id: number): SetNewcomerAction => ({
  type: PageTypes.SELECT_NEWCOMER_TOOL,
  payload: id,
});

export default pageReducer;
