import { IComment } from 'types';
import { instance } from './axios';

export const getCommentsData = async (postId: string): Promise<IComment[]> => {
    const response = await instance(`posts/${postId}/comments`);
    return response.data
};
