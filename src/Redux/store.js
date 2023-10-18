import { authReducer } from "./Auth/Reducer";
const {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
} = require("redux");
const { default: thunk } = require("redux-thunk");

const rootReducers = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
