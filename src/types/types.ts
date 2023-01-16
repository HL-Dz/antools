export enum PageTypes {
  SELECT_POPULAR_TOOL = "SELECT_POPULAR_TOOL",
  SELECT_NEWCOMER_TOOL = "SELECT_NEWCOMER_TOOL",
}
export type TTool = {
  id: number;
  img: string;
  name: string;
  plan: string;
  body: string;
  selected: boolean;
  selectTool: (id: number) => void;
};

export interface SetSelectedAction {
  type: PageTypes.SELECT_POPULAR_TOOL;
  payload: number;
}
export interface SetNewcomerAction {
  type: PageTypes.SELECT_NEWCOMER_TOOL;
  payload: number;
}

export type PagesAction = SetSelectedAction | SetNewcomerAction;
