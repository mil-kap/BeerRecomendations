import { useCallback, useEffect } from "react";
import { StyledBeerDetail } from "./BeerDetail.styled";
import { useParams } from "react-router";
import { Image } from "../../atoms/image/Image";
import { CardDescription } from "../../molecules/card-text/CardText";
import { Button } from "../../atoms/button/Button";
import { Spinner } from "../../atoms/spinner/Spinner";
import { useBeersService } from "../../../services/useBeersService";


export const BeerDetail = () => {
    const {id} = useParams();
    const { getBeerById, loading, beer } = useBeersService();
  
    useEffect(() => {
        if (!id) return;
        getBeerById(+id);
    }, [id, getBeerById])

    const buy = useCallback(() => {
        alert(`You have bought 1 bottle of ${beer?.name}!`)
    }, [beer]);

    return loading ? 
        (<Spinner/>)
        : 
        (beer ?
            <StyledBeerDetail>
                <Image imageUrl={beer.image} title={beer.name}></Image>
                <div><CardDescription beer={beer}></CardDescription>
                <Button label="Buy" onClick={buy} position="left"></Button></div>
            </StyledBeerDetail>
            : 
            <p>Not found</p>
        )
}

export default BeerDetail;