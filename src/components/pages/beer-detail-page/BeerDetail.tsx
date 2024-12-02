import { useCallback, useEffect, useState } from "react";
import { StyledBeerDetail } from "./BeerDetail.styled";
import { useParams } from "react-router-dom";
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { IBeer } from "../../../models/products";
import { Image } from "../../atoms/image/Image";
import { CardDescription } from "../../molecules/card-text/CardText";
import { Button } from "../../atoms/button/Button";
import { Spinner } from "../../atoms/spinner/Spinner";


export const BeerDetail = () => {
    const [beer, setBeer] = useState<IBeer>();
    const {id} = useParams();
    const {getBeer, loading} = useBeerStore(useShallow(((state) => ({
        ...state,
    }))));

    const buy = useCallback(() => {
        alert(`You have bought 1 bottle of ${beer?.name}!`)
    }, [beer])

    useEffect(() => {
        if (!id || loading) return;

        const beer = getBeer(+id);
        setBeer(beer);
    }, [id, getBeer, loading]);

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