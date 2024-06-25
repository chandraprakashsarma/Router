import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import AddTask from "./AddTask";
import AddMember from "./AddMember";
import TeamList from "./TeamList";
import TaskList from "./TaskList";

const ProjectManagementTool = () => (
  <Provider store={store}>
    <div>
      <h1>Project Management Tool</h1>
      <AddTask />
      <TaskList />
      <AddMember />
      <TeamList />
    </div>
  </Provider>
);

export default ProjectManagementTool;
