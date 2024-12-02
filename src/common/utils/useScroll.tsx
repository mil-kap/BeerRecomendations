import { useEffect, useState } from "react";
import { debounce } from "./debounce";

export const useScroll = (): any => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

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

    return [
        page,
        loading,
        setLoading
    ]
}