import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
    getCommentsData,
    getPostDataById,
    getPostsDataByUserId,
    getUserDataById
} from '../services';
import { IComment, IPost, TRootState } from 'types';

export interface IPostState {
    posts: IPost[] | null;
    post: IPost | null;
    comments: IComment[] | null;
    loading: boolean;
    owner: string | null
}

const initialState: IPostState = {
    posts: null,
    post: null,
    owner: null,
    comments: null,
    loading: false
};

export const getPostsInfo = createAsyncThunk(
    'posts/getPostsInfoStatus',
    async (userId: string, thunkAPI) => {
        const [posts, owner] = await Promise.all([
            await getPostsDataByUserId(userId),
            await getUserDataById(userId)
        ]);
        return { posts, owner };
    }
);

export const getPostInfo = createAsyncThunk(
    'post/getPostInfoStatus',
    async (postId: string, thunkAPI) => {
        const [post, comments] = await Promise.all([
            getPostDataById(postId),
            getCommentsData(postId)
        ]);

        const owner = await getUserDataById(String(post.userId));

        return { post, comments, owner };
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetPostsInfo: state => {
            state.posts = null;
        },
        resetPostInfo: state => {
            state.post = null;
            state.comments = null;
            state.owner = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(getPostsInfo.pending, state => {
            state.loading = true;
        }),
            builder.addCase(getPostsInfo.rejected, state => {
                state.loading = false;
                state.posts = null;
            }),
            builder.addCase(getPostsInfo.fulfilled, (state, { payload }) => {
                state.posts = payload.posts;
                state.owner = payload.owner.username;
                state.loading = false;
            }),
            builder.addCase(getPostInfo.pending, state => {
                state.loading = true;
            }),
            builder.addCase(getPostInfo.rejected, state => {
                state.loading = false;
                state.post = null;
            }),
            builder.addCase(getPostInfo.fulfilled, (state, { payload }) => {
                state.post = payload.post;
                state.comments = payload.comments;
                state.owner = payload.owner.username;
                state.loading = false;
            })
    }
});

export const {
    resetPostInfo,
    resetPostsInfo
} = postSlice.actions;
