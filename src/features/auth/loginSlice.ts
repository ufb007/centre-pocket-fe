import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IState {
    setLoginActive: boolean
}

const initialState = {
    setLoginActive: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState as IState,
    reducers: {
        updateLoginActive:(state, action) => {
            state.setLoginActive = action.payload;
        }
    }
})

export const getLoginActiveState = (state: RootState) => state.login.setLoginActive;
export const { updateLoginActive } = loginSlice.actions;

export default loginSlice.reducer