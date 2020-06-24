import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

//helpful for debugging
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//persisted version of store held in browser localStorage
export const persistor = persistStore(store);

export default { store, persistor };
