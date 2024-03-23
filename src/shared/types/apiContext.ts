import { IAlbum } from './album';
import { IComment } from './comment';
import { IPhoto } from './photo';
import { IPost } from './post';
import { IUser } from './user';

export interface IApiContext {
    users?: IUser[];
    albums?: IAlbum[];
    album?: IAlbum;
    posts?: IPost[];
    post?: IPost;
    comments?: IComment[];
    photos?: IPhoto[];
    owner?: string;
}
