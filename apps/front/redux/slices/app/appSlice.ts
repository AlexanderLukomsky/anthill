import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenLogoutModal: false,
};

export const slice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setIsOpenLogoutModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenLogoutModal = action.payload;
    },
  },
});

export const { setIsOpenLogoutModal } = slice.actions;

export const appReducer = slice.reducer;
