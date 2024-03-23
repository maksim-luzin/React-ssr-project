import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../enums';
import { IAlbum } from '../../types';

import styles from './styles.module.css'

interface IAlbumProps {
    album: IAlbum;
    owner: string;
}

export const Album: FC<IAlbumProps> = ({
    album,
    owner
}) => {
    const history = useHistory();
    const linkHandler = () => history.push(Routes.Albums + `/${album.id}`)

    return (
        <div className={styles.wrapper} onClick={linkHandler} >
            <h3 className={styles.body}>{album.title}</h3>
            <p className={styles.owner}>{owner}</p>
        </div>
    )
};
