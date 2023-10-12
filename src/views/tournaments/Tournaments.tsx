import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchTournaments, getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice"
import { useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { TournamentInterface } from "../../interfaces/Tournament";

export const Tournaments = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const tournamentsStatus = useSelector(getTournamentsStatus);
    const tournamentsError = useSelector(getTournamentsError);

    useEffect(()=> {
        if (tournamentsStatus === 'idle') {
            dispatch(fetchTournaments())
        }
    }, [tournamentsStatus, dispatch])

    console.log(tournaments)

    return (
        <div className="flex flex-col w-[50%]">
            <div className="search mt-5 flex flex-row items-center">
                <BsSearch className="w-5 h-5 mr-3" />
                <input type="text" placeholder="SEARCH TOURNAMENTS" name="search_players" className="w-full rounded-3xl h-8 px-4 py-5 bg-gray-50 text-gray-500 shadow-inner shadow-gray-300"  />
            </div>
            <div className="tournaments flex flex-row justify-center items-start pt-8">
                {tournaments.map(({ uuid, name, description, cover_image, max_players, game_type, race_to, status, tournament_players, type }: TournamentInterface) => {
                    return (
                        <div className="cardTournament w-full">
                            <div className="head py-4 bg-primary-red text-white text-center text-lg uppercase">{ name }</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}