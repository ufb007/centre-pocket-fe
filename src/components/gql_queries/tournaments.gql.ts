import { gql } from "@apollo/client";

export const GET_ALL_TOURNAMENTS = gql`
    query Tournaments($status: String!) {
        tournaments(status: $status) {
          token
          data {
            uuid
            name
            description
            game_type
            match_type
            max_players
            start_date
            status
            createdAt
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
    }`;
    