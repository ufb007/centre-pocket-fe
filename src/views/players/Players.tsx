import { useEffect, useState } from "react"
import axios from "../../libs/axios"
import { Player } from "../../interfaces/Player";
import { BsSearch } from 'react-icons/bs';

export const Players = () => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        axios.get('players').then((response) => {
            //console.log('Show response - ', response.data)
            setPlayers(response.data)
        })
    }, [])

    return (
        <div className="flex flex-col w-[50%]">
            <div className="search mt-5 flex flex-row items-center">
                <BsSearch className="w-5 h-5 mr-3" />
                <input type="text" placeholder="SEARCH PLAYERS" name="search_players" className="w-full rounded-3xl h-8 px-4 py-5 bg-gray-50 text-gray-500 shadow-inner shadow-gray-300"  />
            </div>
            <div className="players flex flex-row justify-center items-start gap-2 pt-8">
                {players.map(({ id, firstName, lastName, profile }: Player) => {
                    return (
                        <div className="cardPlayer relative w-[400px] cursor-pointer" key={id}>
                            <div className="rank text-white py-2 w-12 text-center bg-primary-blue rounded rounded-t-none font-roboto-condensed text-2xl absolute right-3 top-[-10px]">{profile?.rank ?? 0}</div>
                            <div className="p-5 bg-primary text-white">
                                <div className="name text-xl mb-5">{firstName} {lastName}</div>
                                <div>
                                    <ul className="flex flex-row font-roboto-condensed text-gray-300">
                                        <li className="flex flex-col border-l border-gray-50 border-opacity-50 pl-2 w-[32%] py-1">
                                            <div className="text-3xl">{profile?.rank ?? 0}</div>
                                            <div className="text-xs uppercase">Rank</div>
                                        </li>
                                        <li className="flex flex-col border-l border-gray-50 border-opacity-50 pl-2 w-[32%] py-1">
                                            <div className="text-3xl">{profile?.matches_played ?? 0}</div>
                                            <div className="text-xs uppercase">Matches</div>
                                        </li>
                                        <li className="flex flex-col border-l border-gray-50 border-opacity-50 pl-2 w-[32%] py-1">
                                            <div className="text-3xl">{profile?.matches_won ?? 0}</div>
                                            <div className="text-xs uppercase">Won</div>
                                        </li>
                                    </ul>

                                    <p className="mt-5"><a href="">Player Profile</a></p>
                                </div>
                            </div>

                            <div className="follow px-4 py-1 bg-primary-red text-white uppercase text-sm absolute bottom-3 right-0 rounded-2xl rounded-r-none">
                                Follow
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}