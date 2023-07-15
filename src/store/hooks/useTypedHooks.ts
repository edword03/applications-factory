import {
	TypedUseSelectorHook,
	useSelector as selectorHook,
	useDispatch as dispatchHook,
} from 'react-redux';

import { AppDispatch, RootState } from '../store';

export const useTypeSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useTypeDispatch = () => dispatchHook<AppDispatch>();
