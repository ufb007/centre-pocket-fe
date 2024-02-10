import { useContext } from "react"
import { TournamentContext } from "../context/TournamentContext"
import { TournamentInterface } from "../../interfaces/Tournament"

export const TournamentPlayerProfiles = () => {
    const tournamentContext = useContext<TournamentInterface | undefined>(TournamentContext)

    return (
        <div className="playerWraper flex flex-row gap-3">
            {tournamentContext!.players.map(({ player: { id, firstName, lastName, profile } }) => {
                return (
                    <div key={id} className="relative w-16 h-16 cursor-pointer group">
                        <img className="rounded-full" src={profile!.image} />
                        <div className="
                            font-thin 
                            opacity-0 
                            translate-x-[-50%] 
                            top-0 
                            group-hover:animate-name-tag 
                            absolute 
                            flex flex-row gap-1 
                            bg-primary 
                            text-white 
                            py-1 px-3 
                            rounded-full 
                            text-center 
                            text-[12px]">
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}