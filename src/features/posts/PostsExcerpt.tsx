import PostAuthor from "./PostAuthor";
import { Reactions } from "./Reactions";
import TimeAgo from "./TimeAgo";
import type { TypePost } from "./postsSlice";

const PostsExcerpt = (post: TypePost) => {
    return (
        <article className="mb-10 border border-black rounded p-5">
            <h3 className="text-xl">{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <Reactions {...post} />
            </p>
        </article>
    )
}

export default PostsExcerpt