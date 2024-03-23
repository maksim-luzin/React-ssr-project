import { getServerState } from 'helpers';
import { configureStore } from '@reduxjs/toolkit';


import { userSlice } from './user';
import { postSlice } from './post';
import { albumSlice } from './album';
import { IApiContext } from 'types';

export const getStore = (initialState: IApiContext) => configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [postSlice.name]: postSlice.reducer,
        [albumSlice.name]: albumSlice.reducer
    },
    preloadedState: getServerState(initialState)
});
