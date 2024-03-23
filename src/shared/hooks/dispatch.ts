import { useDispatch } from 'react-redux';

import type { TAppDispatch } from '../types';

export const useAppDispatch: () => TAppDispatch = useDispatch;
