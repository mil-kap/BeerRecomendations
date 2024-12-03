import {create} from "zustand";
import { IBeer } from "../models/products";

const beerStore = (set: any, get: any) => ({
    allBeers: [],
    setAllBeers: (newBeers: IBeer[]) => {
        set({ allBeers: newBeers })
    },
    addBeer: (newBeer: IBeer) => {
        set({ allBeers: [...get().allBeers, newBeer]})
    },
})

const useBeerStore = create(beerStore);

export default useBeerStore;