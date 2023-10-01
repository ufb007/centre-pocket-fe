import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { InterfaceUsersState } from "../users/usersSlice";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.currentTarget.value);
    const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.currentTarget.value);

    const canSave = Boolean(title) && Boolean(body) && Boolean(userId);

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: body, userId })).unwrap();

                setTitle('');
                setBody('');
                setUserId('');
            } catch (error: any) {
                console.log('Failed to save the post ', error)
            } finally {
                setAddRequestStatus('idle');
            }
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author</label>
                <select id="postAuthor" onChange={onAuthorChanged}>
                    <option value="">Select Author</option>
                    {users.map(({ id, name }: InterfaceUsersState) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
                <label htmlFor="postContent">Conent:</label>
                <textarea
                    name="postContent" 
                    id="postContent"
                    value={body}
                    onChange={onContentChanged}
                />
                <button 
                    className="p-2 border border-gray-500 shadow-md active:shadow-none disabled:text-white disabled:shadow-none disabled:cursor-not-allowed"
                    onClick={onSavePostClicked} 
                    type="button"
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm