import { useCallback, useEffect } from "react";
import { BeersService } from "../../../services/BeersService"
import { IBeer } from "../../../models/products";
import React from "react";
import { BeerCard } from "../../organisms/beer-card/BeerCard";
import { StyledBeers } from "./Beers.styled";
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from 'zustand/react/shallow'


export const Beers = React.memo(() => {
    const {beers, setBeers} = useBeerStore(useShallow(((state) => ({beers: state.beers, setBeers: state.setBeers}))));

    const getBeers = useCallback(() => {
        BeersService.getBeers()
            .then((response) => {
                setBeers(response);
            });
        }, [setBeers]);

    useEffect(() => {
        getBeers();
    }, [getBeers]);  

    return (
        <StyledBeers>
            {beers?.map((beer: IBeer) => {
                return (<BeerCard beer={beer} key={beer.id}></BeerCard>)
            })}
        </StyledBeers>
    )
});