import { useEffect, useState } from "react"
import axios from "../../libs/axios"
import { Player } from "../../interfaces/Player";

export const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('players').then((response) => {
            //console.log('Show response - ', response.data)
            setPlayers(response.data)
        })
    }, [])

    return (
        <div className="players">
            {players.map(({ id, firstName, lastName, profile }: Player) => {
                return (
                    <div className="cardPlayer" key={id}>
                        <div className="name">{firstName}</div>
                    </div>
                )
            })}

        </div>
    )
}