import { TournamentInterface } from "../../interfaces/Tournament"
import { TournamentModel } from "../../models/Tournament"
import { Button } from "./Button"

type Props = {
    children: string | JSX.Element | JSX.Element[] | React.JSX.Element
}

export const TournamentCard = ({children, id, uuid, name, cover_image, description, game_type, race_to, start_date, tournament_players, max_players, status, type }: TournamentInterface & Props) => {
    const tournamentModel = new TournamentModel()

    const date = new Date(start_date);

    const formattedDate = new Intl.DateTimeFormat('us-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

    return (
        <div className="cardTournament w-full shadow-md mb-10" key={id}>
            <div className="head py-2 bg-primary-red text-white text-sm font-thin px-5 flex items-center justify-between">
                <span className="uppercase text-lg">{ name }</span> <span>{ formattedDate }</span>
            </div>
            <div className="content bg-white border border-t-0 border-gray-200 relative">
                <div className="flex flex-row relative">
                    <div className="imageHead w-[40%]">
                        <img src={cover_image} alt="" />
                    </div>
                    <div className="p-4 font-thin text-gray-600">
                        <p>Game Type: {tournamentModel.getGameType(game_type)}</p>
                        <p>Race to: { race_to }</p>
                        <p>Joined: {tournament_players.length}/{max_players}</p>
                        <p>Tournament Type: {tournamentModel.getTournamentType(type)}</p>
                        <p className="pb-3">{description}</p>
                    </div>

                    <div className="absolute bottom-2 right-2">
                        <Button title="Join" onClick={()=> { console.log('clicked button - ', uuid) }} />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}