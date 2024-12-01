export interface IBeer {
    id: number;
    name: string;
    image: string;
    price: string; 
    rating: IRating;
}

export interface IRating {
    average: number;
    reviews: number;
}

export interface IFormInputs {
    name: string;
    price: string;
    image: string;
}