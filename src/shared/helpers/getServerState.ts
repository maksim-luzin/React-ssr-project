import { IApiContext } from 'types';

export const getServerState = ({ users, posts, post, comments, albums, album, photos, owner }: IApiContext) => ({
    user: {
        users: users || null,
        loading: false,
        status: null
    },
    post: {
        posts: posts || null,
        loading: false,
        post: post || null,
        comments: comments || null,
        status: null,
        owner: Boolean(posts || post) ? owner || null : null
    },
    album: {
        albums: albums || null,
        album: album || null,
        photos: photos || null,
        loading: false,
        status: null,
        owner: Boolean(albums || album) ? owner || null : null
    }
})
