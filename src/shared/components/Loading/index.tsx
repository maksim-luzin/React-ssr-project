import React from 'react';
import styles from './styles.module.css'

import { useAppSelector } from '../../hooks';
import { isLoadingSelector } from '../../selectors';

export const Loading = () => {
    const isLoading = useAppSelector(isLoadingSelector);

    if (!isLoading) {
        return <></>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles['lds-roller']} >
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
};
