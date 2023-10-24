import { useContext, useEffect } from "react";
import { TournamentCard } from "./TournamentCard";
import { TournamentInterface } from "../../interfaces/Tournament";
import { TournamentContext } from "../context/TournamentContext";

export const Finished = () => {
    const tournamentContext = useContext<TournamentInterface | undefined>(TournamentContext)

    return (
        <TournamentCard {...tournamentContext!}>
            <div className="flex flex-row">
                Finished page
            </div>
        </TournamentCard>
    )
}