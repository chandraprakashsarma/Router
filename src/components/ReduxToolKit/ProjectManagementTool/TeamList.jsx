import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMember } from "./Slice/teamSlice";

const TeamList = () => {
  const team = useSelector((state) => state.team.team);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {team.map((member) => (
          <li key={member.id}>
            {member.name}
            <button onClick={() => dispatch(removeMember(member.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
