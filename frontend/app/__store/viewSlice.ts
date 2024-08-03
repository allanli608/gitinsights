import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ViewState = null | 'project' | 'feature' | 'user';

interface ViewSliceState {
  currentView: ViewState;
}

const initialState: ViewSliceState = {
  currentView: 'user',
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ViewState>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;