import React from 'react';
import { render } from '@testing-library/react';
import { TournamentCard } from '../TournamentCard';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));

describe('render output text of prop data', () => {
    const contextValues = {
        children: '',
        id: 1,
        uuid: 'sdfgsdfgs',
        name: 'Tournament 1',
        description: 'October open',
        cover_image: '',
        game_type: '9ball',
        race_to: 9,
        start_date: '2023-10-21 09:30:00',
        tournament_players: [],
        max_players: 0,
        status: '',
        type: 'double'
    }

    test('renders description', () => {
        const { getByText } = render(<TournamentCard {...contextValues} />);
        
        expect(getByText('October open')).toBeInTheDocument();
        expect(getByText('21 October 2023')).toBeInTheDocument();
        expect(getByText('Game Type: 9 Ball')).toBeInTheDocument();
    });
});