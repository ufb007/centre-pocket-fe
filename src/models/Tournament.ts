type TGameType = {
    key: string,
    value: string
}

export class TournamentModel {
    constructor(
        private gameType: TGameType[] = [],
        private tournamentType: TGameType[] = []
    ) {
        this.gameType = [
            { key: '9ball', value: '9 Ball'},
            { key: '10ball', value: '10 Ball'},
            { key: '8ball', value: '8 Ball'},
            { key: 'straight', value: 'Straight Pool'},
        ]

        this.tournamentType = [
            { key: 'single', value: 'Single Elimination'},
            { key: 'double', value: 'Double Elimination'},
            { key: 'round_robin', value: 'Round Robin'},
        ]
    }

    getGameType(type: string): string {
        return this.gameType.find((element) => element.key === type)!.value;
    }

    getTournamentType(type: string): string {
        return this.tournamentType.find((element) => element.key === type)!.value;
    }

    
}