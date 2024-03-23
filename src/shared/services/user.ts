import { IAlbum, IComment, IPhoto, IPost, IUser } from 'types';
import { instance } from './axios';

export const getUsersData = async (): Promise<IUser[]> => {
    const response = await instance('users');
    return response.data
};

export const getUserDataById = async (userId: string): Promise<IUser> => {
    const response = await instance('users/' + userId);
    return response.data
};
