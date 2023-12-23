import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface InitialStateInterface<T> {
    data: T,
    loading: boolean,
    error: T
}

const initialState: InitialStateInterface<[]> = {
    data: [],
    loading: false,
    error: []
}

const graphqlSlice = createSlice({
    name: 'graphql',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = []
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = graphqlSlice.actions;
export default graphqlSlice.reducer;
