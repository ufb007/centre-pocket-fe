import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchTournaments, getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice"
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { TournamentInterface } from "../../interfaces/Tournament";
import { Menu } from "../../components/tournaments/Menu";
import { Search } from "../../components/Search";
import { Upcoming } from "../../components/tournaments/Upcoming";

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
            dispatch(fetchTournaments('upcoming'))
        }
    }, [tournamentsStatus, dispatch])

    return (
        <div className="flex flex-col w-[50%]">
            <Menu />
            <Search />
            <div className="tournaments flex flex-row justify-center items-start pt-8">
                {tournaments.map((content: TournamentInterface) => {
                    return (
                        <Upcoming {...content} />
                    )
                })}
            </div>
        </div>
    )
}