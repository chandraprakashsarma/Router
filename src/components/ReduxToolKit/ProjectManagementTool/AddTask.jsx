import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Slice/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date(), title }));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
