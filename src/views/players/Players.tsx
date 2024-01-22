import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player";
import { BsSearch } from 'react-icons/bs';
import { useQuery } from "@apollo/client";
import { GET_ALL_PLAYERS } from "../../components/gql_queries/players.gql";
import PlayerCard from "../../components/PlayerCard";

export const Players = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const { loading, data } = useQuery(GET_ALL_PLAYERS)
    const uuid = "d790c211-6b14-45a8-951c-bfd5028d86cc";
    // const getPlayer = useQuery(GET_PLAYER_BY_UUID, {
    //     variables: { uuid }
    // })

    // console.log(getPlayer.data)

    useEffect(() => {
        if (!loading) {
            console.log(data)
            setPlayers(data.players)
        }
    }, [loading])

    return (
        <div className="flex flex-col w-[50%]">
            <div className="search mt-5 flex flex-row items-center">
                <BsSearch className="w-5 h-5 mr-3" />
                <input type="text" placeholder="SEARCH PLAYERS" name="search_players" className="font-thin w-full rounded-3xl h-8 px-4 py-5 bg-gray-50 text-gray-500 shadow-inner shadow-gray-300"  />
            </div>
            <div className="players flex flex-row justify-center items-start gap-2 pt-8">
                {players.map(player => {
                    return <PlayerCard key={player.id} {...player} />
                })}
            </div>
        </div>
    )
}