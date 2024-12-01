import { useCallback, useEffect, useState } from "react";
import { debounce } from "./debounce";
import { IBeer } from "../../models/products";
import { SIZE } from "../../components/pages/beers-list-page/Beers";

export const useScroll = (fetchMore: () => IBeer[]): any => {
    const [data, setData] = useState<IBeer[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchBeers = useCallback(() => {
        if (data.length < page * SIZE) {
            const newData = fetchMore();
            setData((prevData) => [...prevData, ...newData]);
            setLoading(false);
        }
    }, [data.length, fetchMore, page]);

    const handleScroll = () => {
        if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
          setLoading(true);
        }
    };

    window.addEventListener("scroll", debounce(handleScroll, 500));

    useEffect(() => {
        if (loading) {
          setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);

    
    useEffect(() => {
        fetchBeers();
     }, [page])

    return [
        data,
        page,
        loading,
        fetchBeers
    ]
}