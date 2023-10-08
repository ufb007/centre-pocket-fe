import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    players: []
}

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {}
}) 