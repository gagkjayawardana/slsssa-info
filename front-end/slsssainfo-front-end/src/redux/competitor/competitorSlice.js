import { createSlice } from '@reduxjs/toolkit';

export const competitorSlice = createSlice({
  name: 'competitor',
  initialState: {
    competitor: []
  },
  reducers: {
    addcompetitorAction: () => {},
    getcompetitorAction: () => {},
    saveCompetitorAction: (state, action) => {
      state.competitor = action.payload;
    },
    updateCompetitorAction: () => {}
  }
});

export const {
  addcompetitorAction,
  getcompetitorAction,
  saveCompetitorAction,
  updateCompetitorAction
} = competitorSlice.actions;

//selectors
export const selectcompetitor = (state) => state.competitorReducer.competitor;

//reducers
const competitorReducer = competitorSlice.reducer;
export default competitorReducer;
