import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { getAllTournaments, getTournamentsError, getTournamentsStatus } from "../../features/tournaments/tournamentsSlice"
import { Menu } from "../../components/tournaments/Menu";
import { Search } from "../../components/Search";
import { Upcoming } from "../../components/tournaments/Upcoming";
import { useMatch } from "react-router-dom";
import { ReactElement } from "react";
import { Active } from "../../components/tournaments/Active";

export const Tournaments = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const tournaments = useSelector(getAllTournaments);
    const tournamentsStatus = useSelector(getTournamentsStatus);
    const tournamentsError = useSelector(getTournamentsError);
    const match = useMatch('/tournaments/:status');
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
            break;
    }

    return (
        <div className="flex flex-col sm:w-[75%] md:w-[50%] w-full">
            <Menu status={status} />
            <Search />
            <div className="tournaments flex flex-row justify-center items-start pt-8 mx-3 sm:m-0">
                { component }
            </div>
        </div>
    )
}