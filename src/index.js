import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";

import App from "components/App";

const initialState = {};
const store = configureStore(initialState);

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);
const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrate(Root, root);
} else {
  render(Root, root);
}
