import { combineReducers } from "redux";

import window from "./window";
import modals from "./modals";
import sponsors from "./sponsors";
import pledge from "./pledge";

export const reducer = combineReducers({
  window,
  modals,
  sponsors,
  pledge,
});

export default reducer;
