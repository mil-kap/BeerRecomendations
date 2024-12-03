import { useShallow } from "zustand/react/shallow";
import useBeerStore from "../store/useBeerStore";
import { useState } from "react";
import { BeersService } from "./BeersService";
import { IBeer } from "../models/products";

interface IUseBeersServiceResponse {
    fetchBeersPaginated: (page: number, size: number) => void,
    beersPaginated: IBeer[],
    getBeerById: (id: number) => void,
    getTopTenBeers: () => Promise<IBeer[]>
    loading: boolean,
    createBeer: (beer: IBeer) => void,
    beer: IBeer | undefined
}

export const useBeersService = (): IUseBeersServiceResponse => {
    const [beers, setBeers] = useState<IBeer[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [beer, setBeer] = useState<IBeer>();

    const {setAllBeers, allBeers, addBeer} = useBeerStore(useShallow(((state) => ({
        ...state,
    }))));

    const fetchAllBeers = async () => {
        setLoading(true);
        return BeersService.getBeers()
                .then((response) => {
                    setAllBeers(response);
                    setLoading(false);
                    return response;
                });
    }
    const fetchBeersPaginated = async (page: number, size: number) => {
        if (!allBeers.length) {
            fetchAllBeers().then((response) => {
                setBeers(response.slice(0, size));
            })
        }
        else {
            setBeers([...beers, ...allBeers.slice((page-1) * size, page * size)]);
        }
    }

    const getBeerById = async (id: number) => {
        if (!allBeers.length) {
            const beers = await fetchAllBeers()
            setBeer(beers.find((beer: IBeer) => beer.id === id));
        }
        else {
            setBeer(allBeers.find((beer: IBeer) => beer.id === id));
        }
    }

    const getTopTenBeers = async () => {
        if (!allBeers.length) {
            const beers = await fetchAllBeers()
            return beers.sort((a: IBeer, b: IBeer) => b.rating.average - a.rating.average).slice(0, 10);
        }
        else {
            return allBeers.sort((a: IBeer, b: IBeer) => b.rating.average - a.rating.average).slice(0, 10);
        }
    }

    const createBeer = (newBeer: IBeer) => {
        addBeer(newBeer);
    }

    return {
        fetchBeersPaginated,
        beersPaginated: beers,
        getBeerById,
        loading,
        getTopTenBeers,
        createBeer,
        beer
    }
}