import { TRootState } from '../types';

export const postsSelector = ({ post }: TRootState) => post.posts;

export const postSelector = ({ post }: TRootState) => post.post;

export const commentsSelector = ({ post }: TRootState) => post.comments;

export const postsLoadingSelector = ({ post }: TRootState) => post.loading;

export const postOwnerSelector = ({ post }: TRootState) => post.owner;
