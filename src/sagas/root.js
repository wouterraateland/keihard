import { all, fork } from "redux-saga/effects";

import windowSaga from "./window";
import pledgeSaga from "./pledge";

export default function* root() {
  yield all([fork(windowSaga), fork(pledgeSaga)]);
}
