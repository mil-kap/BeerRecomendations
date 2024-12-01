import React, { useEffect, useState } from "react";
import { StyledBeerDetail } from "./BeerDetail.styled";
import { useParams } from "react-router-dom";
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { IBeer } from "../../../models/products";
import { Image } from "../../atoms/image/Image";
import { CardDescription } from "../../molecules/card-text/CardText";
import { Button } from "../../atoms/button/Button";


export const BeerDetail = React.memo(() => {
    const [beer, setBeer] = useState<IBeer>();
    const {id} = useParams();
    const {getBeer} = useBeerStore(useShallow(((state) => ({
        getBeer: state.getBeer
    }))));

    const buy = () => {
        alert(`You have bought 1 bottle of ${beer?.name}!`)
    }

    useEffect(() => {
        if (!id) return;

        const beer = getBeer(+id);
        setBeer(beer);
    }, [id, getBeer]);

    return beer ? (
        <StyledBeerDetail>
            <Image imageUrl={beer.image} title={beer.name}></Image>
            <div><CardDescription beer={beer}></CardDescription>
            <Button label="Buy" onClick={buy} position="left"></Button></div>
        </StyledBeerDetail>
    ) : <h2>Not found</h2>
});