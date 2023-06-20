import { AppRootState } from 'redux/store';

export const selectAvatarState = (state: AppRootState) => state.accountInformation.avatar;
