import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { BeerCard } from "./BeerCard";
import { IBeer } from "../../../models/products";

jest.mock('react-router', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn()
}));

const MOCK_DATA: IBeer = {
    id: 1,
    name: 'beer1',
    image: 'someImageUrl',
    price: '$200',
    rating: {
        average: 3.14,
        reviews: 230
    }
}

describe('Beer Card Component', () => {
    it('renders BeerCard correctly', () => {
        render(<ThemeProvider theme={theme}><BeerCard beer={MOCK_DATA} /></ThemeProvider>);
        expect(screen.getByText(MOCK_DATA.name)).toBeInTheDocument();
        expect(screen.queryByText(`Price: ${MOCK_DATA.price}`)).toBeInTheDocument();
        expect(screen.getByText(`Rating: ${MOCK_DATA.rating.average}`)).toBeInTheDocument();
        expect(screen.getByText(`Reviews: ${MOCK_DATA.rating.reviews}`)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', MOCK_DATA.image);
        expect(screen.getByRole('img')).toHaveAttribute('alt', MOCK_DATA.name);
        screen.debug();
    });

    it('calls buy action when buy button is clicked', () => {
        global.alert = jest.fn();
        render(<ThemeProvider theme={theme}><BeerCard beer={MOCK_DATA} /></ThemeProvider>);
        let button = screen.getByRole('button');
        fireEvent.click(button);
        expect(global.alert).toHaveBeenCalled();
    })

})