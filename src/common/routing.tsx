import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Beers } from "../components/pages/beers-list-page/Beers"
import { BeerDetail } from "../components/pages/beer-detail-page/BeerDetail"
import { Layout } from "../components/templates/Layout"
import { ManageBeers } from "../components/pages/manager-list-page/ManageBeers"
import { Trends } from "../components/pages/trends-page/Trends"
import { CreateBeer } from "../components/pages/create-beer-page/CreateBeer"

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route path="" element={<Beers />}/> 
                    <Route path="beer/:id" element={<BeerDetail />}/> 
                    <Route path="mng-list" element={<ManageBeers />} />
                    <Route path="mng-trends" element={<Trends />} />
                    <Route path="mng-create" element={<CreateBeer />} />
                    <Route path="mng-beer/:id" element={<BeerDetail />} />
                </Route>
           </Routes>
        </BrowserRouter>
    )
}