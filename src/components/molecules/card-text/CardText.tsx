import { IBeer } from "../../../models/products";
import { StyledDescription, StyledDescriptionItem, StyledDescriptionTitle } from "./CardText.styled";


interface ICardDescriptionProps {
    beer: IBeer;
}

export const CardDescription: React.FC<ICardDescriptionProps> = ({beer}) => {
    return (
        <StyledDescription>
            <StyledDescriptionTitle>{beer.name}</StyledDescriptionTitle>
            <StyledDescriptionItem>Price: {beer.price}</StyledDescriptionItem>
            <StyledDescriptionItem>Rating: {beer.rating?.average.toFixed(2)}</StyledDescriptionItem>
            <StyledDescriptionItem>Reviews: {beer.rating?.reviews}</StyledDescriptionItem>
        </StyledDescription>
    )
}