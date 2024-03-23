import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { postOwnerSelector, postsSelector } from '../../selectors';
import { getPostsInfo, resetPostsInfo } from '../../actions';
import { Post } from 'components/Post';

import styles from './styles.module.css';

export const PostsPage = () => {
    const dispatch = useAppDispatch();
    const { userId } = useParams<{ userId: string }>()
    const posts = useAppSelector(postsSelector);
    const owner = useAppSelector(postOwnerSelector)

    useEffect(() => {
        if (!posts) {
            dispatch(getPostsInfo(userId));
        }
    }, [posts]);

    useEffect(() => () => { dispatch(resetPostsInfo()) }, []);

    if (!posts || !owner) {
        return <></>
    }

    return (
        <>
            <Helmet>
                <title>Posts</title>
                <meta name='description' content={`List of ${owner}'s posts`} />
            </Helmet>

            <div className={styles.wrapper}>
                {
                    posts.map(post => <Post key={post.id} post={post} owner={owner} />)
                }
            </div>
        </>
    )
};
