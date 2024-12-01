import {create} from "zustand";
import { IBeer } from "../models/products";

const beerStore = (set: any, get: any) => ({
    beers: [],
    topBeers: [],
    setBeers: (newBeers: IBeer[]) => {
        set({ beers: newBeers })
    },
    getBeer: (id: number) => {
        return get().beers.find((beer: IBeer) => beer.id === id);
    },
    getTopTen: () => {
        const topTen = get().beers.sort((a: IBeer, b: IBeer) => b.rating.average - a.rating.average).slice(0, 10);
        set({ topBeers: topTen });
    },
    addBeer: (newBeer: IBeer) => {
        set({ beers: [...get().beers, newBeer]})
    }
})

const useBeerStore = create(beerStore);

export default useBeerStore;