import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export type TypeReactions = {
    thumbsUp?: number,
    laugh?: number
}

export type TypePost = {
    id: number | string,
    title: string,
    body: string,
    userId: number | string,
    date: string,
    reactions?: TypeReactions
}

interface InterfacePostsState {
    posts: TypePost[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined | null
}

const initiateState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return [...response.data];
    } catch (error: any) {
        return error.message
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: {title: string, body: string, userId: number | string}) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost)
        return response.data
    } catch (error: any) {
        return error.message
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: initiateState as InterfacePostsState,
    reducers: {
        updatePost:(state, action)=> {
            const post = state.posts.find(post => post.id === action.payload.id)

            post!.reactions = action.payload.reactions
        },
        postAdded:(state, action) => {
            state.posts.push(action.payload)
        }
            /*reducer: (state, action: PayloadAction<InterfacePostsState>) => {
                state.posts.push(action.payload)
            },
            prepare: (title: string, content: string, userId: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString()
                    }
                }
            }
        }*/
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<TypePost[]>) => {
                state.status = 'succeeded'

                let min = 1
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString()
                    return post;
                });

                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action: PayloadAction<TypePost>) => {
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString();
                state.posts.push(action.payload)
            })
    }
})

export const selectAllPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error

export const { postAdded, updatePost } = postsSlice.actions;

export default postsSlice.reducer;