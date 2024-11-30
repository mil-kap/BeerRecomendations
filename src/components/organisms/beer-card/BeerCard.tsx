import { useNavigate } from "react-router-dom";
import { IBeer } from "../../../models/products";
import { Button } from "../../atoms/button/Button";
import { Image } from "../../atoms/image/Image";
import { CardDescription } from "../../molecules/card-text/CardText";
import { StyledBeerCard, StyledContainer } from "./BeerCard.styled";

interface IBeerCardProps {
    beer: IBeer;
}
export const BeerCard: React.FC<IBeerCardProps> = ({beer}) => {
    const navigate = useNavigate();
    
    const goToDetails = () => {
        navigate(`/beer/${beer.id}`)
    }

    const buy = () => {
        alert(`You have bought 1 bottle of ${beer.name}!`)
    }

    return (
        <StyledBeerCard onClick={goToDetails}>
            <StyledContainer>
                <Image imageUrl={beer.image} title={beer.name} />
                <CardDescription beer={beer}></CardDescription>
            </StyledContainer>
            <Button label="Buy" onClick={buy}/>
        </StyledBeerCard>
    );
}