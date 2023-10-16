import { useContext, useEffect } from "react";
import { TournamentCard } from "./TournamentCard";
import { TournamentInterface } from "../../interfaces/Tournament";
import { TournamentContext } from "../context/TournamentContext";

export const Active = () => {
    const tournamentContext = useContext<TournamentInterface | undefined>(TournamentContext)

    return (
        <TournamentCard {...tournamentContext!}>
            <div className="flex flex-row">
                Active page
            </div>
        </TournamentCard>
    )
}