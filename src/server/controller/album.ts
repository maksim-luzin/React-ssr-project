import { getAlbumsDataByUserId, getPhotosDataByAlbumId, getUserDataById } from '../../shared/services';

export const getAlbumsByUserIdController = async (userId: string) => {
    const [albums, owner] = await Promise.all([
        getAlbumsDataByUserId(userId),
        getUserDataById(userId)
    ])
    return { albums, owner: owner.username };
}

export const getAlbumByIdController = async (albumId: string) => getPhotosDataByAlbumId(albumId);
