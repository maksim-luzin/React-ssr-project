import React, { FC } from 'react';
import { IPhoto } from '../../types';

import styles from './styles.module.css'

interface IPhotoProps {
    photo: IPhoto;
}

export const Photo: FC<IPhotoProps> = ({
    photo
}) => (
    <figure className={styles.wrapper} >
        <img className={styles.image} src={photo.thumbnailUrl} />
        <figcaption className={styles.title}>{photo.title}</figcaption>
    </figure>
)
