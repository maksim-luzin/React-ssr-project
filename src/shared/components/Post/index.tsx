import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Owner } from '../../components/Owner';
import { Routes } from '../../enums';
import { IPost } from '../../types';

import styles from './styles.module.css'

interface IPostProps {
    post: IPost;
    owner: string;
    isPostDetail?: boolean;
}

export const Post: FC<IPostProps> = ({
    post,
    owner,
    isPostDetail = false
}) => (
    <div className={styles.wrapper}>
        <h3 className={styles.title}>{post.title}</h3>
        <Owner owner={owner} />
        <p className={styles.body}>{post.body}</p>
        {!isPostDetail &&
            <p className={styles.actions}>
                <NavLink className={styles.more} to={Routes.Posts + `/${post.id}`} >
                    Comments
                </NavLink>
            </p>
        }
    </div>
)
