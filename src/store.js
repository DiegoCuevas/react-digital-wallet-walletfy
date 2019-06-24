import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";
import offlineSync from "./middlewares/offline-sync";

import { fakeCategories, fakeMovements } from "./fake-data/fake-data";
const initialState = {
  categories: fakeCategories,
  movements: fakeMovements
};

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (localStorage.getItem("version") !== process.env.REACT_APP_VERSION) {
  localStorage.removeItem("state");
}

const preloadedState = JSON.parse(
  localStorage.getItem("state") || JSON.stringify(initialState)
);

const store = createStore(
  reducer,
  preloadedState,
  composer(applyMiddleware(offlineSync, logger))
);

export default store;
