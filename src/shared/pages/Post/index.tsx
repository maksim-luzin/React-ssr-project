import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { Post } from '../../components/Post';
import { Comment } from '../../components/Comment';
import {
    commentsSelector,
    postSelector,
    postOwnerSelector
} from '../../selectors';
import { getPostInfo, resetPostsInfo } from '../../actions';
import { useParams } from 'react-router';

import styles from './styles.module.css';

export const PostPage = () => {
    const { postId } = useParams<{ postId: string }>()
    const dispatch = useAppDispatch()
    const post = useAppSelector(postSelector);
    const comments = useAppSelector(commentsSelector);
    const owner = useAppSelector(postOwnerSelector);

    useEffect(() => {
        if (!post) {
            dispatch(getPostInfo(postId));
        }
    }, [post])

    useEffect(() => () => { dispatch(resetPostsInfo()) }, []);

    if (!post || !comments || !owner) {
        return <></>
    }

    return (
        <>
            <Helmet>
                <title>Comments</title>
                <meta name='description' content={`List of comments`} />
            </Helmet>

            <div className={styles.wrapper}>
                <Post post={post} isPostDetail owner={owner} />
                <div className={styles.comments}>
                    {
                        comments.map(comment => <Comment comment={comment} key={comment.id} />)
                    }
                </div>
            </div>
        </>
    )
};
