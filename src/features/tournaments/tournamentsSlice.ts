import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TournamentInterface } from "../../interfaces/Tournament"
import { RootState } from "../../app/store"

const initialState = {
    tournaments: {
        upcoming: [],
        active: [],
        finished: []
    },
    status: 'idle',
    error: null
}

interface InterfaceTournamentsState {
    tournaments: {
        upcoming: TournamentInterface[],
        active: TournamentInterface[],
        finished: TournamentInterface[]
    },
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined | null
}

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: initialState as InterfaceTournamentsState,
    reducers: {
        fetchDataStart(state) {
            state.status = 'loading';
        },
        fetchDataSuccess(state, action: PayloadAction<{ data:  TournamentInterface[], status: 'upcoming' | 'active' | 'finished'}>) {
            state.status = 'succeeded';

            const { data, status } = action.payload;

            state.tournaments[status] = data;
        }
    }
})

export const getAllTournaments = (state: RootState) => state.tournaments.tournaments;
export const getTournamentsStatus = (state: RootState) => state.tournaments.status;
export const getTournamentsError = (state: RootState) => state.tournaments.error;

export const { fetchDataStart, fetchDataSuccess } = tournamentsSlice.actions;

export default tournamentsSlice.reducer;