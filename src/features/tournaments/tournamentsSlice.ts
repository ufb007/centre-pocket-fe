import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../libs/axios"
import { TournamentInterface } from "../../interfaces/Tournament"
import { RootState } from "../../app/store"

const initialState = {
    tournaments: [],
    status: 'idle',
    error: null
}

interface InterfaceTournamnetsState {
    tournaments: TournamentInterface[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined | null
}

export const fetchTournaments = createAsyncThunk('/tournaments', async(status: string) => {
    try {
        const response = await axios.get(`/tournaments/${status}`)
        return [...response.data]
    } catch (error: any) {
        return error.message
    }
})

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: initialState as InterfaceTournamnetsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTournaments.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchTournaments.fulfilled, (state, action) => {
            state.status = 'succeeded';
            
            state.tournaments = action.payload
        })
        .addCase(fetchTournaments.rejected, (state,action) => {
            state.error = 'failed'
        })
    }
})

export const getAllTournaments = (state: RootState) => state.tournaments.tournaments;
export const getTournamentsStatus = (state: RootState) => state.tournaments.status
export const getTournamentsError = (state: RootState) => state.tournaments.error

export default tournamentsSlice.reducer;