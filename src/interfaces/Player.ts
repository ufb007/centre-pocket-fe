export interface Player {
    id: number;
    uuid: string;
    firstName: string;
    lastName: string;
    alias: string;
    profile: {
        image: string;
        rank: number;
        matches_played: number;
        matched_won: number;
    }
}