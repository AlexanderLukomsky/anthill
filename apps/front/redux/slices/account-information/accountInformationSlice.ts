import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Nullable } from 'common/types';

const initialState = {
  avatar: {
    previewImage: null as Nullable<string>,
    avatarImage: null as Nullable<string>,
    isOpenModal: false,
  },
};

export const slice = createSlice({
  name: 'Account-Information',
  initialState,
  reducers: {
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.avatar.isOpenModal = action.payload;
    },
    setPreviewImage: (state, action: PayloadAction<Nullable<string>>) => {
      state.avatar.previewImage = action.payload;
    },
    setAvatarImage: (state) => {
      state.avatar.avatarImage = state.avatar.previewImage;
      state.avatar.previewImage = null;
    },
  },
});

export const { setIsOpenModal, setPreviewImage, setAvatarImage } = slice.actions;

export const accountInformationReducer = slice.reducer;
