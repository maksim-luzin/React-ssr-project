import React, { FC } from 'react';

import styles from './styles.module.css'

interface IOwnerProps {
    owner: string;
}

export const Owner: FC<IOwnerProps> = ({ owner }) => (
    <div className={styles.wrapper}>
        {owner[0].toUpperCase()}
    </div>
)
