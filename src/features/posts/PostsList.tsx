import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])

    let content;

    if (postsStatus === 'loading') {
        content = <p>"Loading ..."</p>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post) => (
            <PostsExcerpt {...post} />
        ))
    } else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>
    }

    return (
        <section className="w-1/3">
            <h2 className="text-2xl">Posts</h2>
            {content}
        </section>
    )
}

export default PostsList;