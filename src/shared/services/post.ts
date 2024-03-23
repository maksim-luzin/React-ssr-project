import { instance } from './axios';
import { IPost } from 'types';

export const getPostsDataByUserId = async (userId: string): Promise<IPost[]> => {
    const response = await instance(`users/${userId}/posts`);
    return response.data
};

export const getPostDataById = async (postId: string): Promise<IPost> => {
    const response = await instance(`posts/${postId}`);
    return response.data
};

