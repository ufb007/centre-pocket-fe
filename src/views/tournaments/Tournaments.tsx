import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchTournaments, getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice"
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { TournamentInterface } from "../../interfaces/Tournament";

type TypeCountDown = {
    count: number,
    name: string
}

export const Tournaments = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const tournamentsStatus = useSelector(getTournamentsStatus);
    const tournamentsError = useSelector(getTournamentsError);
    const [countDown, setCountDown] = useState<TypeCountDown[]>([
        { count: 0, name: 'Days'},
        { count: 0, name: 'Hours'},
        { count: 0, name: 'Minutes'},
        { count: 0, name: 'Seconds'}
    ])

    useEffect(()=> {
        if (tournamentsStatus === 'idle') {
            dispatch(fetchTournaments())
        }
    }, [tournamentsStatus, dispatch])

    return (
        <div className="flex flex-col w-[50%]">
            <div className="flex flex-row justify-center">
                <div className="mini-menu flex flex-wrap justify-center py-3 px-10 bg-secondary text-white rounded-full rounded-t-none">
                    <ul className="flex flex-row gap-3 text-sm">
                        <li className="text-primary-yellow cursor-pointer">Upcoming</li>
                        <li>::</li>
                        <li className="cursor-pointer hover:text-primary-yellow duration-500">Active</li>
                        <li>::</li>
                        <li className="cursor-pointer hover:text-primary-yellow duration-500">Finished</li>
                    </ul>
                </div>
            </div>
            <div className="search mt-5 flex flex-row items-center">
                <BsSearch className="w-5 h-5 mr-3" />
                <input type="text" placeholder="SEARCH TOURNAMENTS" name="search_players" className="font-thin w-full rounded-3xl h-8 px-4 py-5 bg-gray-50 text-gray-500 shadow-inner shadow-gray-300"  />
            </div>
            <div className="tournaments flex flex-row justify-center items-start pt-8">
                {tournaments.map(({ uuid, name, description, cover_image, max_players, game_type, race_to, status, tournament_players, type }: TournamentInterface) => {
                    return (
                        <div className="cardTournament w-full shadow-md mb-10">
                            <div className="head py-2 bg-primary-red text-white text-center text-lg uppercase font-thin">{ name }</div>
                            <div className="content bg-white border border-t-0 border-gray-200">
                                <div className="imageHead w-[40%]">
                                    <img src={cover_image} alt="" />
                                </div>
                                <div className="countdown w-full border-t-[1px] border-gray-200">
                                    <ul className="flex flex-row text-center text-gray-400 uppercase font-thin font-roboto-condensed">
                                        {countDown.map(({ count, name }: TypeCountDown) => {
                                            return (
                                                <li className="w-[25%] py-5 border-r-[1px] last:border-r-0">
                                                    <div className="count w-full text-2xl">{ count }</div>
                                                    <div className="name w-full text-xs">{ name }</div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}