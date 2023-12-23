import { useEffect } from "react"
import { fetchTournament } from "../../features/tournaments/tournamentsSlice"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"

export const Tournament = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const location = useLocation()
    const params = useParams()
    const uuid = params.uuid as string

    //console.log('LOCATION - ', location)
    //console.log('Params - ', typeof params.uuid)

    useEffect(() => {
        dispatch(fetchTournament(uuid))
    }, [location])

    return (
        <div>
            Tournament page
        </div>
    )
}