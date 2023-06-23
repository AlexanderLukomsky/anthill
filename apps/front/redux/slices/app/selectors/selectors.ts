import { AppRootState } from 'redux/store';

export const selectIsOpenLogoutModal = (state: AppRootState) => state.app.isOpenLogoutModal;
