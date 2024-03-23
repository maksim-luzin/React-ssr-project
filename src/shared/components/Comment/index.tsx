
import React, { FC } from 'react';
import { IComment } from '../../types';

import styles from './styles.module.css'

interface ICommentProps {
    comment: IComment;
}

export const Comment: FC<ICommentProps> = ({ comment }) => (
    <div className={styles.wrapper}>
        <h4 className={styles.title}>{comment.email}</h4>
        <p className={styles.body}>{comment.body}</p>
    </div>
)
