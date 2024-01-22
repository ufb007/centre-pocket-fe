import { useDispatch, useSelector } from "react-redux"
import { fetchDataSuccess } from "../../features/tournaments/tournamentsSlice"
import { Menu } from "../../components/tournaments/Menu";
import { Search } from "../../components/Search";
import { Upcoming } from "../../components/tournaments/Upcoming";
import { useLocation, useMatch } from "react-router-dom";
import { ReactElement, useEffect } from "react";
import { Active } from "../../components/tournaments/Active";
import { TournamentContext } from "../../components/context/TournamentContext";
import { TournamentInterface } from "../../interfaces/Tournament";
import { Finished } from "../../components/tournaments/Finished";
import { useQuery } from "@apollo/client";
import { GET_ALL_TOURNAMENTS } from "../../components/gql_queries/tournaments.gql"; 
import { RootState } from "../../app/store";

export const Tournaments = () => {
    const dispatch = useDispatch();
    const { tournaments, status, error } = useSelector((state: RootState) => state.tournaments);
    const match = useMatch('/tournaments/:status');
    const location = useLocation();

    let match_status = match?.params.status! as 'upcoming' | 'active' | 'finished';
    let component: ReactElement = <Upcoming />

    const { loading, data } = useQuery(GET_ALL_TOURNAMENTS, {
        variables: { status: match_status }
    });

    const renderComponent = (status: string) => {
        switch (status) {
            case 'active':
                return <Active />;
                break;
            case 'finished':
                return <Finished />;
                break;
        }

        return <Upcoming />;
    }
    
    useEffect(()=> {
        if (!loading && tournaments[match_status].length === 0) {
            dispatch(fetchDataSuccess({ data: data.tournaments, status: match_status}));
        }
    }, [loading, match_status]);

    return (
        <div className="flex flex-col sm:w-[75%] md:w-[50%] w-full">
            <Menu status={match_status} />
            <Search />
            <div className="tournaments flex flex-col justify-center items-start pt-8 mx-3 sm:m-0">
                { tournaments[match_status]?.map((content: TournamentInterface) => {
                    return (
                        <TournamentContext.Provider value={content} key={content.id}>
                            { renderComponent(match_status) }
                        </TournamentContext.Provider>
                    )
                })}
            </div>
        </div>
    )
}