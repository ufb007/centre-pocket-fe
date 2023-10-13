import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchTournaments, getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice"
import { useEffect } from "react";
import { TournamentInterface } from "../../interfaces/Tournament";
import { Menu } from "../../components/tournaments/Menu";
import { Search } from "../../components/Search";
import { Upcoming } from "../../components/tournaments/Upcoming";
import { useParams, useLocation } from "react-router-dom";

export const Tournaments = ({ status }: any) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const tournamentsStatus = useSelector(getTournamentsStatus);
    const tournamentsError = useSelector(getTournamentsError);
    const params = useParams();
    const location = useLocation();

    console.log(location.pathname.split('/'))

    useEffect(()=> {
        if (tournamentsStatus === 'idle') {
            dispatch(fetchTournaments(status))
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