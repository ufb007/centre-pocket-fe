import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchTournaments, getAllTournaments } from "../../features/tournaments/tournamentsSlice"
import { Menu } from "../../components/tournaments/Menu";
import { Search } from "../../components/Search";
import { Upcoming } from "../../components/tournaments/Upcoming";
import { useLocation, useMatch } from "react-router-dom";
import { ReactElement, useEffect } from "react";
import { Active } from "../../components/tournaments/Active";
import { TournamentContext } from "../../components/context/TournamentContext";
import { TournamentInterface } from "../../interfaces/Tournament";
import { Finished } from "../../components/tournaments/Finished";

export const Tournaments = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const match = useMatch('/tournaments/:status');
    const location = useLocation();
    let status = match?.params.status! as string;
    let component: ReactElement = <Upcoming />

    switch (status) {
        case 'upcoming':
            component = <Upcoming />
            break;
        case 'active':
            component = <Active />
            break;
        case 'finished':
            component = <Finished />
            break;
    }

    useEffect(()=> {
        dispatch(fetchTournaments(status))
    }, [location])

    return (
        <div className="flex flex-col sm:w-[75%] md:w-[50%] w-full">
            <Menu status={status} />
            <Search />
            <div className="tournaments flex flex-col justify-center items-start pt-8 mx-3 sm:m-0">
                {tournaments.map((content: TournamentInterface) => {
                    return (
                        <TournamentContext.Provider value={content} key={content.id}>
                            { component }
                        </TournamentContext.Provider>
                    )
                })}
            </div>
        </div>
    )
}