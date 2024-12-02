import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components/templates/Layout"
import { lazy, Suspense } from "react"
import { Spinner } from "../components/atoms/spinner/Spinner"

const Beers = lazy(() => import("../components/pages/beers-list-page/Beers"));
const BeerDetail = lazy(() => import("../components/pages/beer-detail-page/BeerDetail"));
const Trends = lazy(() => import("../components/pages/trends-page/Trends"));
const CreateBeer = lazy(() => import("../components/pages/create-beer-page/CreateBeer"));

export const Routing = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/beer" />} />
                    <Route path="/beer" element={<Layout />}> 
                        <Route path="" element={<Beers />} /> 
                        <Route path=":id" element={<BeerDetail />}/> 
                    </Route>
                    <Route path="/mng" element={<Layout />}>
                        <Route path="" element={<Beers />} />
                        <Route path="trends" element={<Trends />} />
                        <Route path="create" element={<CreateBeer />} />
                        <Route path="beer/:id" element={<BeerDetail />} />
                    </Route>
            </Routes>
           </Suspense>
        </BrowserRouter>
    )
}
