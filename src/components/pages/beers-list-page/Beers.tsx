import React, { useEffect } from "react";
import { IBeer } from "../../../models/products";
import { BeerCard } from "../../organisms/beer-card/BeerCard";
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { useScroll } from "../../../common/utils/useScroll";
import heroImage from "../../../assets/images/craft-beer.jpg";
import { Hero } from "../../organisms/hero/Hero";
import { StyledBeers } from "./Beers.styled";

export const SIZE = 10;

export const Beers = React.memo(() => {
    const {allBeers} = useBeerStore(useShallow(((state) => ({allBeers: state.beers}))));

    const fetchMoreBeer = () => {
        return allBeers.filter((_, index) => (index >= beers.length && index < (page) * SIZE));
    }

    const [beers, page, loading, fetchBeers] = useScroll(fetchMoreBeer);

    useEffect(() => {
        fetchBeers();
     }, [allBeers])

    return (
        <>
            <Hero imageUrl={heroImage} title="Buy beautiful beers with us!" />
            <StyledBeers>
                {beers?.map((beer: IBeer) => {
                    return (<BeerCard beer={beer} key={beer.id}></BeerCard>)
                })}
                {loading && <p>loading</p>}
            </StyledBeers>
        </>
    )
});