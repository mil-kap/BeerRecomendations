import { useMemo } from "react"
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { StyledBarChart, StyledTrends } from "./Trends.styled";
import { theme } from "../../../styles/theme";


export const Trends = () => {
    const {getTopTen, allBeersFetched} = useBeerStore(useShallow(((state) => ({
        getTopTen: state.getTopTen,
        allBeersFetched: state.allBeers.length
    }))));

    const beers = useMemo(() => {
        return allBeersFetched ? getTopTen() : [];
    }, [getTopTen, allBeersFetched]);

    return (
        <StyledTrends>
            <h3>Top 10 rated beers: </h3>
            <StyledBarChart width={730} height={250} data={beers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating.average" fill={theme.colors.primary} />
            </StyledBarChart>

            <h3>Number of reviews for top 10 rated beers: </h3>
            <StyledBarChart width={730} height={250} data={beers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating.reviews" fill={theme.colors.secondary} />
            </StyledBarChart>

        </StyledTrends>
    )
}

export default Trends;