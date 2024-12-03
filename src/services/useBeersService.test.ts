import { renderHook, waitFor } from "@testing-library/react";
import { useBeersService } from "./useBeersService";

const MOCK_DATA = [
    {id: 1, name: 'beer1', rating: {average: 1}},
    {id: 2, name: 'beer2', rating: {average: 5}},
    {id: 3, name: 'beer3', rating: {average: 5}},
    {id: 4, name: 'beer4', rating: {average: 5}},
    {id: 5, name: 'beer5', rating: {average: 5}},
    {id: 6, name: 'beer6', rating: {average: 5}},
    {id: 7, name: 'beer7', rating: {average: 5}},
    {id: 8, name: 'beer8', rating: {average: 5}},
    {id: 9, name: 'beer9', rating: {average: 5}},
    {id: 10, name: 'beer10', rating: {average: 5}},
    {id: 11, name: 'beer11', rating: {average: 5}},
]

jest.mock("./BeersService", () => {
    return {
        BeersService: {
            getBeers: () => {
                return new Promise((resolve) => {
                    return resolve([...MOCK_DATA])
        })
    }}}
})



describe('useBeersService', () => {
    it('should return correct number of elements per page', async () => {
        const PAGE_SIZE = 10;
        const {result} = renderHook(() => 
            useBeersService()
        )
        await result.current.fetchBeersPaginated(1, PAGE_SIZE);
        await waitFor(() => expect(result.current.beersPaginated).toHaveLength(PAGE_SIZE))
    })

    it('should return correct beer by id', async () => {
        const {result} = renderHook(() => 
            useBeersService()
        )
        await result.current.getBeerById(MOCK_DATA[3].id);
        await waitFor(() => expect(result.current.beer?.id).toEqual(MOCK_DATA[3].id))
    })

    it('should return correct list of top beers', async () => {
        const {result} = renderHook(() => 
            useBeersService()
        )
        const response = await result.current.getTopTenBeers();
        expect(response).toEqual(MOCK_DATA.slice(1))
    })
});