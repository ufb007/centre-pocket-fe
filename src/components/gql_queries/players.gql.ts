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