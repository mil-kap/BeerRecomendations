import axios from 'axios';
import { IBeer } from '../models/products';

const httpService = axios.create();

export const BeersService = {
    getBeers: (): Promise<IBeer[]> => {
        return httpService.get(`https://api.sampleapis.com/beers/ale`)  // paging not working 
            .then((response) => response.data)
            .catch((error) => console.error(error));    // TODO: HANDLE ERROR
    }
}