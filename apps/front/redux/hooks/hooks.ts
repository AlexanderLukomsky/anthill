import { useDispatch } from 'react-redux';
import { store } from 'redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppDispatch = typeof store.dispatch;
