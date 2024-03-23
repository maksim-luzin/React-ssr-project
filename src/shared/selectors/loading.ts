import { TRootState } from 'types';

export const isLoadingSelector = (state: TRootState) => Object.values(state).some(val => val.loading)
