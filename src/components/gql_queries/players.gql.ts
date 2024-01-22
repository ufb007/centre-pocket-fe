import { gql } from "@apollo/client";

export const GET_ALL_PLAYERS = gql`{
    players {
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
