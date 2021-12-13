import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import empiresSlice from "./slices/empiresSlice";
import pageSlice from "./slices/pageSlice";
import unitDetailsSlice from "./slices/unitDetailsSlice";

export const reducer = combineReducers({
  page: pageSlice,
  empires: empiresSlice,
  unitDetails: unitDetailsSlice,
});
const store = configureStore({
  reducer,
});
export default store;
