import { createSlice } from '@reduxjs/toolkit';

export const competitorSlice = createSlice({
  name: 'competitor',
  initialState: {
    competitor: [],
    juniorRifleMen: [],
    juniorRifleWomen: [],
    youthRifleMen: [],
    youthRifleWomen: [],
    juniorPistolMen: [],
    juniorPistolWomen: [],
    youthPistolMen: [],
    youthPistolWomen: []
  },
  reducers: {
    addcompetitorAction: () => {},
    getcompetitorAction: () => {},
    saveCompetitorAction: (state, action) => {
      state.competitor = action.payload;
    },
    updateCompetitorAction: () => {},
    getJuniorRifleMen: () => {},
    saveJuniorRifleMen: (state, action) => {
      state.juniorRifleMen = action.payload;
    },
    getYouthRifleMen: () => {},
    saveYouthRifleMen: (state, action) => {
      state.youthRifleMen = action.payload;
    },
    getJuniorRifleWomen: () => {},
    saveJuniorRifleWomen: (state, action) => {
      state.juniorRifleWomen = action.payload;
    },
    getyouthRifleWomen: () => {},
    saveyouthRifleWomen: (state, action) => {
      state.youthRifleWomen = action.payload;
    },
    getJuniorPistolMen: () => {},
    saveJuniorPistolMen: (state, action) => {
      state.juniorPistolMen = action.payload;
    },
    getJuniorPistolWomen: () => {},
    saveJuniorPistolWomen: (state, action) => {
      state.juniorPistolWomen = action.payload;
    },
    getYouthPistolMen: () => {},
    saveYouthPistolMen: (state, action) => {
      state.youthPistolMen = action.payload;
    },
    getYouthPistolWomen: () => {},
    saveYouthPistolWomen: (state, action) => {
      state.youthPistolWomen = action.payload;
    }
  }
});

export const {
  addcompetitorAction,
  getcompetitorAction,
  saveCompetitorAction,
  updateCompetitorAction,
  getJuniorRifleMen,
  saveJuniorRifleMen,
  getYouthRifleMen,
  saveYouthRifleMen,
  getJuniorRifleWomen,
  saveJuniorRifleWomen,
  getyouthRifleWomen,
  saveyouthRifleWomen,
  getJuniorPistolMen,
  saveJuniorPistolMen,
  getJuniorPistolWomen,
  saveJuniorPistolWomen,
  getYouthPistolMen,
  saveYouthPistolMen,
  getYouthPistolWomen,
  saveYouthPistolWomen
} = competitorSlice.actions;

//selectors
export const selectcompetitor = (state) => state.competitorReducer.competitor;
export const selectJuniorRifleMen = (state) => state.competitorReducer.juniorRifleMen;
export const selectYouthRifleMen = (state) => state.competitorReducer.youthRifleMen;
export const selectJuniorRifleWomen = (state) => state.competitorReducer.juniorRifleWomen;
export const selectYouthRifleWomen = (state) => state.competitorReducer.youthRifleWomen;
export const selectJuniorPistolMen = (state) => state.competitorReducer.juniorPistolMen;
export const selectJuniorPistolWomen = (state) => state.competitorReducer.juniorPistolWomen;
export const selectYouthPistolMen = (state) => state.competitorReducer.youthPistolMen;
export const selectYouthPistolWomen = (state) => state.competitorReducer.youthPistolWomen;

//reducers
const competitorReducer = competitorSlice.reducer;
export default competitorReducer;
