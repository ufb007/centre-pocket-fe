import { gql } from "@apollo/client";

export const GET_ALL_TOURNAMENTS = gql`
    query Tournaments($status: String!) {
        tournaments(status: $status) {
            id
            uuid
            name
            description
            game_type
            type
            max_players
            race_to
            start_date
            cover_image
            tournament_players {
              players {
                id
                uuid
                firstName
                lastName
                email
                profile {
                    id
                    rank
                    image
                    matches_played
                    matches_won
                }
              }
            }
        }
    }`;
    