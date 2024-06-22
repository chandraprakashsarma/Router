import React, { useCallback, useState } from "react";
import Tasks from "./Tasks";

function ToDoCallback() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a to-do app", completed: false },
  ]);

  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const markCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <Tasks key={task.id} task={task} markCompleted={markCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoCallback;
