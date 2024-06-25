import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./ProjectManagementTool/Slice/taskSlice";
import teamReducer from "./ProjectManagementTool/Slice/teamSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    team: teamReducer,
  },
});
