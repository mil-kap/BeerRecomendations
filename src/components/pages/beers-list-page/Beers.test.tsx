import { render, screen } from "@testing-library/react";
import  {Beers} from "./Beers";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";


const MOCK_DATA = [
    {id: 1, name: 'beer1'},
    {id: 2, name: 'beer2'}
]

jest.mock('../../../services/useBeersService', () => {
    return {
        useBeersService() {
            return {
                fetchBeersPaginated: jest.fn(),
                beersPaginated: MOCK_DATA
            }
        }
    }
});

jest.mock("../../organisms/beer-card/BeerCard", () => {
    return {
        BeerCard: () => {
            return (<div data-testid="beerCard"> </div>)
        }
        
    }
  });

describe('Beers Component', () => {
    it('renders mocked BeerCards', () => {
        render(<ThemeProvider theme={theme}><Beers /></ThemeProvider>);
        expect(screen.getAllByTestId("beerCard")).toHaveLength(MOCK_DATA.length);
    });
})