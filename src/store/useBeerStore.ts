import {create} from "zustand";
import { IBeer } from "../models/products";

const beerStore = (set: any, get: any) => ({
    beers: [],
    setBeers: (newBeers: IBeer[]) => {
        set({ beers: newBeers })
    },
    getBeer: (id: number) => {
        console.log(get());
        console.log(get().beers)
        console.log(id);
        return get().beers.find((beer: IBeer) => beer.id === id);
    }
})

const useBeerStore = create(beerStore);

export default useBeerStore;