import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
    getAlbumsDataByUserId,
    getAlbumDataById,
    getPhotosDataByAlbumId,
    getUserDataById
} from '../services';
import { IAlbum, IPhoto } from 'types';

export interface IAlbumState {
    albums: IAlbum[] | null;
    album: IAlbum | null;
    photos: IPhoto[] | null;
    loading: boolean;
    owner: string | null
}

const initialState: IAlbumState = {
    albums: null,
    album: null,
    photos: null,
    loading: false,
    owner: null
};

export const getAlbumsInfo = createAsyncThunk(
    'albums/getAlbumsInfoStatus',
    async (userId: string, thunkAPI) => {
        const [albums, owner] = await Promise.all([
            getAlbumsDataByUserId(userId),
            getUserDataById(userId)
        ])
        return { albums, owner: owner.username };
    }
);

export const getAlbumInfo = createAsyncThunk(
    'album/getAlbumInfoStatus',
    async (albumId: string, thunkAPI) => {
        const photos = await getPhotosDataByAlbumId(albumId)

        return { photos };
    }
);

export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        resetAlbumState: state => {
            return initialState;
        }
    },
    extraReducers: builder => {
        builder.addCase(getAlbumsInfo.pending, state => {
            state.loading = true;
        }),
            builder.addCase(getAlbumsInfo.rejected, state => {
                state.loading = false;
                state.albums = null;
            }),
            builder.addCase(getAlbumsInfo.fulfilled, (state, { payload }) => {
                state.albums = payload.albums;
                state.owner = payload.owner;
                state.loading = false;
            }),
            builder.addCase(getAlbumInfo.pending, state => {
                state.loading = true;
            }),
            builder.addCase(getAlbumInfo.rejected, state => {
                state.loading = false;
                state.albums = null;
            }),
            builder.addCase(getAlbumInfo.fulfilled, (state, { payload }) => {
                state.photos = payload.photos;
                state.loading = false;
            })
    }
});

export const { resetAlbumState } = albumSlice.actions;
