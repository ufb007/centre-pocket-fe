import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export interface InterfaceUsersState {
    id: number | string,
    name: string
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        return response.data
    } catch (error: any) {
        return error.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState: [] as InterfaceUsersState[],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;