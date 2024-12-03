import { IBeer } from "../../../models/products";
import { Button } from "../../atoms/button/Button";
import { Image } from "../../atoms/image/Image";
import { CardDescription } from "../../molecules/card-text/CardText";
import { StyledBeerCard, StyledContainer } from "./BeerCard.styled";
import { memo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

interface IBeerCardProps {
    beer: IBeer;
}
export const BeerCard: React.FC<IBeerCardProps> = memo(({beer}) => {
    const navigate = useNavigate();
    let location = useLocation();
    
    const goToDetails = () => {
        if (location.pathname.includes('mng')){
            navigate(`/mng/beer/${beer.id}`);
            return;
        }
        navigate(`/beer/${beer.id}`)
    }

    const buy = useCallback(() => {
        alert(`You have bought 1 bottle of ${beer.name}!`)
    }, [beer.name])

    return (
        <StyledBeerCard onClick={goToDetails}>
            <StyledContainer>
                <Image imageUrl={beer.image} title={beer.name} />
                <CardDescription beer={beer}></CardDescription>
            </StyledContainer>
            <Button label="Buy" onClick={buy}/>
        </StyledBeerCard>
    );
});