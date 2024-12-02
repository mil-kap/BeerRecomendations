import { useCallback, useEffect, useState } from "react";
import { IBeer } from "../../../models/products";
import { BeerCard } from "../../organisms/beer-card/BeerCard";
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { useScroll } from "../../../common/utils/useScroll";
import heroImage from "../../../assets/images/craft-beer.jpg";
import { Hero } from "../../organisms/hero/Hero";
import { StyledBeers } from "./Beers.styled";
import { Spinner } from "../../atoms/spinner/Spinner";
import { BeersService } from "../../../services/BeersService";

export const SIZE = 10;

export const Beers = () => {
    const [beers, setBeers] = useState<IBeer[]>([]);
    const [page, loading, setLoading] = useScroll();

    const {setAllBeers, fetchedAllBeers, getNextPage} = useBeerStore(useShallow(((state) => ({
        ...state,
        fetchedAllBeers: state.allBeers.length,
    }))));

    const updateNextBatch = () => {
        setBeers([...beers, ...getNextPage(page, SIZE)]);
        setLoading(false);
    }

    const getAllBeers = useCallback(() => {
        BeersService.getBeers()
            .then((response) => {
              setAllBeers(response);
              updateNextBatch();
            });
    }, [setAllBeers])

    useEffect(() => {
        if (!fetchedAllBeers){
            getAllBeers();
        }
    }, [getAllBeers]);  

    useEffect(() => {
        updateNextBatch();
    }, [page])

    return (
        <>
            <Hero imageUrl={heroImage} title="Buy beautiful beers with us!" />
            <StyledBeers>
                {beers?.map((beer: IBeer) => {
                    return (<BeerCard beer={beer} key={beer.id}></BeerCard>)
                })}
                {loading && <Spinner />}
            </StyledBeers>
        </>
    )
};

export default Beers;