import { render, screen } from "@testing-library/react";
import PlayerCard from "../PlayerCard";

const mockPlayer = {
    id: 1,
    uuid: '12345678-1234-5678-1234-567812345678',
    firstName: 'John',
    lastName: 'Doe',
    profile: {
      rank: 42,
      matches_played: 100,
      matches_won: 75,
    }
}

describe('Test Player card data', () => {
    beforeEach(() => {
        render(<PlayerCard {...mockPlayer} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Test name', () => {
        const playerName = screen.getByText(/John Doe/i);
        expect(playerName).toBeInTheDocument();
    });

    test('Test profile rank', () => {
        const playerRank = screen.getByText(/RANK/i);
        expect(playerRank).toBeInTheDocument();
    });
});