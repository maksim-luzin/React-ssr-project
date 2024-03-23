import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { Photo } from '../../components/Photo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { photosSelector } from '../../selectors';
import { getAlbumInfo, resetAlbumState } from '../../actions';

import styles from './styles.module.css';

export const AlbumPage = () => {
    const dispatch = useAppDispatch();
    const { albumId } = useParams<{ albumId: string }>()
    const photos = useAppSelector(photosSelector);

    useEffect(() => {
        if (!photos) {
            dispatch(getAlbumInfo(albumId));
        }
    }, [photos]);

    useEffect(() => () => { dispatch(resetAlbumState()) }, []);

    if (!photos) {
        return <></>
    }

    return (
        <>
            <Helmet>
                <title>Photos</title>
                <meta name='description' content={`List of photos`} />
            </Helmet>

            <div className={styles.wrapper}>
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo} />)
                }
            </div>
        </>
    )
};
