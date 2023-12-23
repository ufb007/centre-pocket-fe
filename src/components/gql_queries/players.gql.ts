import { gql } from "@apollo/client";

export const GET_ALL_PLAYERS = gql`{
    getAllPlayers {
        id
        uuid
        firstName
        lastName
        email
        profile {
            id
            rank
            matches_played
            matches_won
        }
    }
}`;

export const GET_PLAYER_BY_UUID = gql`
    query Player($uuid: String!) {
        getPlayerByUUID(uuid: $uuid) {
            id
            uuid
            firstName
            lastName
            email
            profile {
                id
                rank
                matches_played
                matches_won
            }
        }
    }`;

export const GET_ALL_TOURNAMENTS = gql`
    query Tournaments($status: String) {
        tournaments(status: $status) {
            id
            uuid
            name
            description
            game_type
            type
            max_players
            race_to
            cover_image
            start_date
            created_at
            tournament_players {
                id
                playing
                paid
                players {
                    id
                    uuid
                    firstName
                    lastName
                    alias
                }
            }
        }
    }`;