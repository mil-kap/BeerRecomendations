import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Beers } from "../components/pages/beers-list-page/Beers"
import { BeerDetail } from "../components/pages/beer-detail-page/BeerDetail"
import { Layout } from "../components/templates/Layout"

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route path="" element={<Beers />}/> 
                    <Route path="beer/:id" element={<BeerDetail />}/> 
                </Route>
           </Routes>
        </BrowserRouter>
    )
}