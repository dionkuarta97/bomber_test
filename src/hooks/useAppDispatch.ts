import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { AppDispatch } from '../redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;