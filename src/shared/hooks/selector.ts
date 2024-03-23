import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { TRootState } from '../types';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
