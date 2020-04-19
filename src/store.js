import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "ducks/root";
import rootSaga from "sagas/root";

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const enhancers = composeWithDevTools(applyMiddleware(...middleware));

  let store = createStore(reducer, initialState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
