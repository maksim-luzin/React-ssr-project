import { TRootState } from '../types';

export const albumsSelector = ({ album }: TRootState) => album.albums;

export const albumSelector = ({ album }: TRootState) => album.album;

export const photosSelector = ({ album }: TRootState) => album.photos;

export const albumsLoadingSelector = ({ album }: TRootState) => album.loading;

export const albumOwnerSelector = ({ album }: TRootState) => album.owner;
