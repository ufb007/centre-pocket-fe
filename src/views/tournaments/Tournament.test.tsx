import { render } from "@testing-library/react";
import { Tournament } from "./Tournament";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(() => ({
        pathname: '/mocked-path',
        search: '',
        hash: '',
        state: null
    }))
}));

describe('Tournament tester suite', () => {
    test('Testing text', () => {
        const dispatchMock = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

        const { getByText } = render(<Tournament />);

        const element = getByText('Tournament page');
        expect(element).toBeInTheDocument();
    });
});