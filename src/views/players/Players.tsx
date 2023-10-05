import { useEffect } from "react"
import axios from "../../libs/axios"

export const Players = () => {
    useEffect(() => {
        axios.get('players/a004cf75-0050-4b59-b884-249bf0f936e7').then((response) => {
            console.log('Show response - ', response.data)
        })
    }, [])

    return (
        <div>This is the players page</div>
    )
}