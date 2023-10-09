import { createSlice } from '@reduxjs/toolkit';

export const competitorSlice = createSlice({
  name: 'competitor',
  initialState: {
    competitor: []
  },
  reducers: {
    addcompetitorAction: () => {},
    getcompetitorAction: () => {}
  }
});

export const { addcompetitorAction, getcompetitorAction } = competitorSlice.actions;

//selectors
export const selectcompetitor = (state) => state.competitorReducer.competitor;

//reducers
const competitorReducer = competitorSlice.reducer;
export default competitorReducer;
