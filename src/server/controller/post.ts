import { getCommentsData, getPostDataById, getPostsDataByUserId, getUserDataById } from '../../shared/services';

export const getPostsByUserIdController = async (userId: string) => {
    const [posts, owner] = await Promise.all([
        getPostsDataByUserId(userId),
        getUserDataById(userId)
    ]);

    return { posts, owner: owner.username }
}

export const getPostByIdController = async (postId: string) => {
    const [post, comments] = await Promise.all([
        getPostDataById(postId),
        getCommentsData(postId)
    ]);

    const owner = await getUserDataById(String(post.userId));

    return { post, comments, owner: owner.username };
}
