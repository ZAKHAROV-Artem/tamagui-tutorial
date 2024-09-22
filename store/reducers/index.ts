import { combineReducers } from "@reduxjs/toolkit";

import todoSlice from "../slice/todo-slice";
import themeSlice from "../slice/theme-slice";

const rootReducer = combineReducers({
  theme: themeSlice,
  todos: todoSlice,
});

export default rootReducer;
