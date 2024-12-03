import { useEffect, useState } from "react"
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { StyledBarChart, StyledTrends } from "./Trends.styled";
import { theme } from "../../../styles/theme";
import { useBeersService } from "../../../services/useBeersService";
import { Spinner } from "../../atoms/spinner/Spinner";
import { IBeer } from "../../../models/products";


export const Trends = () => {     
    const { getTopTenBeers, loading } = useBeersService();
    const [ beers, setBeers ] = useState<IBeer[]>([]);

    useEffect(() => {
        getTopTenBeers().then((beers) => {
            setBeers(beers)
        });
    }, [])

    return loading ? (
        <Spinner />
    ) :
    (
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