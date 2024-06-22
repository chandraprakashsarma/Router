import React from "react";

function Tasks({ task, markCompleted }) {
  console.log(`Rendering task: ${task.text}`);
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => markCompleted(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
}

export default Tasks;
