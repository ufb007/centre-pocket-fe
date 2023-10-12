import { Player } from "./Player";

export interface TournamentInterface {
    id: number;
    uuid: string;
    name: string;
    description: string;
    game_type: '9ball' | '8ball' | '10ball' | 'straight';
    type: 'single' | 'double' | 'round_robin';
    max_players: 8 | 16 | 32 | 64 | 128;
    race_to: number;
    cover_image: string;
    start_date: Date;
    status: 'upcoming' | 'active' | 'finished';
    createdAt: Date;
    tournament_players: {
        id: number;
        playing: 'pending' | 'yes' | 'no';
        paid: 0 | 1;
        createdAt: Date;
        player: Player
    }[]
}