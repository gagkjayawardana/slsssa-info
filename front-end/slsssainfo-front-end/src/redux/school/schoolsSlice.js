import { createSlice } from '@reduxjs/toolkit';

export const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    participants: [],
    receipt: null
  },
  reducers: {
    addParticipantAction: () => {},
    saveParticipantsAction: (state, action) => {
      state.participants = action.payload;
    },
    addPaymentAction: () => {},
    savePaymentAction: (state, action) => {
      state.receipt = action.payload;
    }
  }
});

export const { addParticipantAction, addPaymentAction, saveParticipantsAction, savePaymentAction } =
  schoolSlice.actions;

//selectors
export const selectParticipants = (state) => state.schoolReducer.participants;
export const selectReceipt = (state) => state.schoolReducer.receipt;

//reducers
const schoolReducer = schoolSlice.reducer;
export default schoolReducer;
