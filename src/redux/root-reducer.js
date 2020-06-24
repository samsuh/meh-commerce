//reducers are the code that combines actions together

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this tells redux-persist to use localstorage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//defining a new persist config (redux-persist)
//whitelist is an array of the stringnames of reducers we want to persist, user and cart. (user handled by firebase, so just whitelist cart)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

//rename combineReducer to be called 'rootReducer' to wrap with persistReducer call
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });

// modified version of rootReducer with persistance
export default persistReducer(persistConfig, rootReducer);
