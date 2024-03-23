import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUsersData } from '../services';
import { IUser } from 'types';

export interface IUserState {
    users: IUser[] | null;
    loading: boolean;
}

const initialState: IUserState = {
    users: null,
    loading: false
};

export const getUserInfo = createAsyncThunk(
    'users/getUserInfoStatus',
    async (_: void) => {
        const users = await getUsersData();
        return { users };
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState: (state, { payload }: PayloadAction<IUser[]>) => {
            state.users = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getUserInfo.pending, state => {
            state.loading = true;
        }),
            builder.addCase(getUserInfo.rejected, state => {
                state.loading = false;
                state.users = null;
            }),
            builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
                state.users = payload.users;
                state.loading = false;
            })
    }
});

export const { setUserState } = userSlice.actions;
