import { createSlice } from '@reduxjs/toolkit';

export const competitionSlice = createSlice({
  name: 'competition',
  initialState: {
    competition: []
  },
  reducers: {
    addCompetitionAction: () => {},
    getCompetitionAction: () => {},
    saveCompetitionAction: (state, action) => {
      state.competition = action.payload;
    }
  }
});

export const { addCompetitionAction, getCompetitionAction, saveCompetitionAction } =
  competitionSlice.actions;

//selectors
export const selectCompetition = (state) => state.competitionReducer.competition;

//reducers
const competitionReducer = competitionSlice.reducer;
export default competitionReducer;
