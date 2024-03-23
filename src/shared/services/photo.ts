import { IPhoto } from 'types';
import { instance } from './axios';

export const getPhotosDataByAlbumId = async (albumId: string): Promise<IPhoto[]> => {
    const response = await instance(`albums/${albumId}/photos`);
    return response.data
};
