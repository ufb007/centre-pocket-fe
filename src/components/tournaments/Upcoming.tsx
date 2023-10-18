import { useContext, useState } from "react"
import { TournamentInterface } from "../../interfaces/Tournament";
import { TournamentCard } from "./TournamentCard";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { TournamentContext } from "../context/TournamentContext";
import { TournamentPlayerProfiles } from "./TournamentPlayerProfiles";

type TypeCountDown = {
    key: number,
    count: number,
    name: string
}

export const Upcoming = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournamentContext = useContext<TournamentInterface | undefined>(TournamentContext)
    const [countDown, setCountDown] = useState<TypeCountDown[]>([
        { key: 1, count: 0, name: 'Days'},
        { key: 2, count: 0, name: 'Hours'},
        { key: 3, count: 0, name: 'Minutes'},
        { key: 4, count: 0, name: 'Seconds'}
    ]);

    return (
        <TournamentCard {...tournamentContext!}>
            <div className="players py-2 px-5 font-thin border-t text-gray-600">
                <h2 className="font-normal uppercase pb-3">Players Joined - {tournamentContext!.tournament_players.length}/{tournamentContext!.max_players}</h2>
                { tournamentContext!.tournament_players.length === 0 &&
                    <p>There are currently no players joined</p>
                }
                <TournamentPlayerProfiles />
            </div>
            <div className="countdown w-full border-t-[1px] border-gray-200" key={tournamentContext!.id}>
                <ul className="flex flex-row text-center text-gray-400 uppercase font-thin font-roboto-condensed">
                    {countDown.map(({ key, count, name }: TypeCountDown) => {
                        return (
                            <li className="w-[25%] py-5 border-r-[1px] last:border-r-0" key={key}>
                                <div className="count w-full text-2xl">{ count }</div>
                                <div className="name w-full text-xs">{ name }</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </TournamentCard>
    )
}