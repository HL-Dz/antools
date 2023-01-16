import { combineReducers, legacy_createStore as createSore } from "redux";
import pageReducer from "./page-reducer";

let rootReducer = combineReducers({
  page: pageReducer,
});

let store = createSore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
