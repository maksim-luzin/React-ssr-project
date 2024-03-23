import { IAlbum } from 'types';
import { instance } from './axios';

export const getAlbumsDataByUserId = async (userId: string): Promise<IAlbum[]> => {
    const response = await instance(`users/${userId}/albums`);
    return response.data
};

export const getAlbumDataById = async (albumId: string): Promise<IAlbum> => {
    const response = await instance(`albums/${albumId}`);
    return response.data
};
