import { createSlice } from '@reduxjs/toolkit';

export interface ILoading {
    loading: boolean;
}

const initialState: ILoading = {
    loading: false
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: state => {
            state.loading = true;
        },
        resetLoading: state => {
            state.loading = false;
        }
    }
});

export const { setLoading, resetLoading } = loadingSlice.actions;
