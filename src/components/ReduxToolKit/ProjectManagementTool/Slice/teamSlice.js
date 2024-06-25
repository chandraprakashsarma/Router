import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.team.push(action.payload);
    },
    removeMember: (state, action) => {
      state.team = state.team.filter((member) => member.id !== action.payload);
    },
  },
});

export const { addMember, removeMember } = teamSlice.actions;
export default teamSlice.reducer;
