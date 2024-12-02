import {create} from "zustand";
import { IBeer } from "../models/products";

const beerStore = (set: any, get: any) => ({
    allBeers: [],
    loading: false,
    setAllBeers: (newBeers: IBeer[]) => {
        set({ allBeers: newBeers })
    },
    getNextPage: (page: number, size: number) => {
        return get().allBeers.slice((page-1) * size, page * size);
    },
    getBeer: (id: number) => {
        return get().allBeers.find((beer: IBeer) => beer.id === id);
    },
    getTopTen: () => {
        return get().allBeers.sort((a: IBeer, b: IBeer) => b.rating.average - a.rating.average).slice(0, 10);
    },
    addBeer: (newBeer: IBeer) => {
        set({ allBeers: [...get().allBeers, newBeer]})
    },
    setLoading: (loading: boolean) => {
        set({ loading })
    },
    getLoading: () => {
        return get().loading;
    }
})

const useBeerStore = create(beerStore);

export default useBeerStore;