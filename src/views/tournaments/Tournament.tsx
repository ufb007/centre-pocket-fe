import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import { TournamentInterface } from "../../interfaces/Tournament"
import { TournamentCard } from "../../components/tournaments/TournamentCard";
import { TournamentPlayerProfiles } from "../../components/tournaments/TournamentPlayerProfiles";
import PlayerCard from "../../components/PlayerCard";

const getTournamentByUUID = gql`
    query getTournamentByUUID($uuid: String!) {
        getTournamentByUUID(uuid: $uuid) {
            id
            uuid
            name
            description
            game_type
            match_type
            max_players
            start_date
            status
            players {
                id
                playing
                paid
                player {
                    firstName
                    lastName
                    email
                    profile {
                        image
                    }
                }
            }
        }
    }
`;

export const Tournament = () => {
    const params = useParams()
    const uuid = params.uuid as string

    const { loading, data, error } = useQuery(getTournamentByUUID, {
        variables: { uuid }
    });

    const tournament: TournamentInterface = data && data.getTournamentByUUID;

    return (
        <>
            {loading && <p>Loading ...</p>}
            {!loading && (
                <div className="flex flex-col">
                    <TournamentCard {...tournament}>
                        <div className="players py-2 px-5 font-thin border-t text-gray-600">
                            <h2 className="font-normal uppercase pb-3">Players Joined - {tournament?.players.length}/{tournament.max_players}</h2>
                            { tournament?.players.length === 0 &&
                                <p>There are currently no players joined</p>
                            }
                        </div>
                    </TournamentCard>
                    
                    <div className="flex pt-8 flex-wrap">
                        {tournament.players.map(({ player }) => (<PlayerCard key={player.id} {...player} />))}
                    </div>
                </div>
            )}
        </>
    )
}