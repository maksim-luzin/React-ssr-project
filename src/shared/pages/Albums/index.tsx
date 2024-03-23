import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { Album } from '../../components/Album';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { albumsSelector, albumOwnerSelector } from '../../selectors';
import { getAlbumsInfo, resetAlbumState } from '../../actions';

import styles from './styles.module.css';

export const AlbumsPage = () => {
    const dispatch = useAppDispatch();
    const { userId } = useParams<{ userId: string }>()
    const albums = useAppSelector(albumsSelector);
    const owner = useAppSelector(albumOwnerSelector)

    useEffect(() => {
        if (!albums) {
            dispatch(getAlbumsInfo(userId));
        }
    }, [albums]);

    useEffect(() => () => { dispatch(resetAlbumState()) }, []);

    if (!albums || !owner) {
        return <></>
    }

    return (
        <>
            <Helmet>
                <title>Posts</title>
                <meta name='description' content={`List of ${owner}'s albums`} />
            </Helmet>

            <div className={styles.wrapper}>
                {
                    albums.map(album => <Album key={album.id} album={album} owner={owner} />)
                }
            </div>
        </>
    )
};
