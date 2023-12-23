import { render, screen, waitFor } from "@testing-library/react";
import { Players } from "./Players";
import { useQuery } from "@apollo/client";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));

jest.mock('@apollo/client');

describe('Testing players', () => {
    test('Test for text in document', () => {
        (useQuery as jest.Mock).mockReturnValue({ loading: true, error: null, data: { someData: 'Hello, Jest!' } });
        
        const { getByText } = render(<Players />);

        const element = getByText(/Player Profile/i);

        console.log('ELEMENT - ', element)
        expect(element).toBeInTheDocument();
    });
});