import { render, screen } from "@testing-library/react";
import  {Button} from "./Button";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "styled-components";
  
describe('Button Component', () => {

    it('renders Button label correctly', () => {

        render( <ThemeProvider theme={theme}><Button label="myButton" /></ThemeProvider>);
        screen.debug();
        expect(screen.getByText("myButton")).toBeInTheDocument();

    })
})