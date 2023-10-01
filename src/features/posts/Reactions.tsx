import { useEffect, useState } from "react"
import { updatePost, TypeReactions, TypePost } from "./postsSlice"
import { useDispatch } from "react-redux"

export const Reactions = (post: TypePost) => {
    const dispatch = useDispatch()
    const [getPosts, setGetPosts] = useState<TypePost>(post);
    const [reactions, setReactions] = useState<TypeReactions>({
        thumbsUp: 0,
        laugh: 0
    })

    const postToUpdate = (reaction: string) => {
        const currNumber: number = reactions[reaction as keyof typeof reactions] !+= 1;

        setReactions(prevState => ({
            ...prevState,
            [reaction]: currNumber
        }))

        dispatch(updatePost({id: post.id, reactions}))
    }

    useEffect(() => {
        setGetPosts(prevState => ({
            ...prevState,
            reactions: reactions
        }))
    })

    return (
        <div>
            <ul className="flex flex-row items-center h-10">
                <li className="mr-5" onClick={() => postToUpdate('thumbsUp')}>{getPosts.reactions?.thumbsUp}</li>
                <li onClick={() => postToUpdate('laugh')}>{getPosts.reactions?.laugh}</li>
            </ul>
        </div>
    )
}