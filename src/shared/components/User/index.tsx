import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../enums';
import { IUser } from '../../types';

import styles from './styles.module.css'

interface IUserProps {
    user: IUser;
}

export const User: FC<IUserProps> = ({ user }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.name}>{user.username}</h3>
            <p className={styles.email}>{user.email}</p>
            <NavLink className={styles.posts} to={Routes.Users + `/${user.id}` + Routes.Posts} >Posts</NavLink>
            <NavLink className={styles.albums} to={Routes.Users + `/${user.id}` + Routes.Albums} >Albums</NavLink>
        </div>
    )
};
