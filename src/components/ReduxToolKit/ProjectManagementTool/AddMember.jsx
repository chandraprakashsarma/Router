import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "./Slice/teamSlice";

const AddMember = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMember({ id: Date(), name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new member"
        required
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;
