import React, { useEffect } from "react"
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import useBeerStore from "../../../store/useBeerStore";
import { useShallow } from "zustand/react/shallow";
import { StyledBarChart, StyledTrends } from "./Trends.styled";


export const Trends = React.memo(() => {
    const {getTopTen, topBeers} = useBeerStore(useShallow(((state) => ({
        getTopTen: state.getTopTen,
        topBeers: state.topBeers,
    }))));

    useEffect(() => {
        getTopTen();
    }, [getTopTen]);

    return (
        <StyledTrends>
            <h3>Top 10 rated beers: </h3>
            <StyledBarChart width={730} height={250} data={topBeers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating.average" fill="#8884d8" />
            </StyledBarChart>

            <h3>Number of reviews for top 10 rated beers: </h3>
            <StyledBarChart width={730} height={250} data={topBeers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating.reviews" fill="#82ca9d" />
            </StyledBarChart>

        </StyledTrends>
    )
})