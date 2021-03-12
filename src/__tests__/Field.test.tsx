import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Field from '../containers/Field';

afterEach(() => {
    cleanup();
});

describe('<Field />', () => {
    it('renders the deck and empty player hand area on load', () => {
        render(<Field />);
        const deck = screen.getByTestId('deck-wrapper');
        const playerHand = screen.getByTestId('player-hand-wrapper');
        expect(deck).toBeInTheDocument();
        expect(playerHand).toBeInTheDocument();
    });

    it('opens shelf when the deck is clicked for the first time', () => {
        render(<Field />);
        const deck = screen.getByTestId('deck-wrapper');

        expect(screen.queryByTestId('closed-shelf')).toBeInTheDocument();
        expect(screen.queryByTestId('open-shelf')).not.toBeInTheDocument();

        fireEvent.click(deck);

        expect(screen.queryByTestId('open-shelf')).toBeInTheDocument();
        expect(screen.queryByTestId('closed-shelf')).not.toBeInTheDocument();
    });
});
