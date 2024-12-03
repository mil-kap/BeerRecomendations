import { useEffect } from "react";
import { IBeer } from "../../../models/products";
import { BeerCard } from "../../organisms/beer-card/BeerCard";
import { useScroll } from "../../../common/utils/useScroll";
import heroImage from "../../../assets/images/craft-beer.jpg";
import { Hero } from "../../organisms/hero/Hero";
import { StyledBeers } from "./Beers.styled";
import { Spinner } from "../../atoms/spinner/Spinner";
import { useBeersService } from "../../../services/useBeersService";

export const SIZE = 10;

export const Beers = () => {
    const [page, loading, setLoading] = useScroll();
    const {fetchBeersPaginated, beersPaginated } = useBeersService();

    useEffect(() => {
        fetchBeersPaginated(page, SIZE);
        setLoading(false);
    }, [page])


    return (
        <>
            <Hero imageUrl={heroImage} title="Buy beautiful beers with us!" />
            <StyledBeers>
                {beersPaginated?.map((beer: IBeer) => {
                    return (<BeerCard beer={beer} key={beer.id}></BeerCard>)
                })}
                {loading && <Spinner />}
            </StyledBeers>
        </>
    )
};

export default Beers;