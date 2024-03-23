import { TRootState } from '../types';

export const usersSelector = ({ user }: TRootState) => user.users;

export const usersLoadingSelector = ({ user }: TRootState) => user.loading;
