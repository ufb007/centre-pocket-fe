import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from "../features/users/usersSlice";
import loginReducer from "../features/auth/loginSlice";
import tournamentsReducer from "../features/tournaments/tournamentsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        login: loginReducer,
        tournaments: tournamentsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store