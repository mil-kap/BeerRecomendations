import { Outlet } from "react-router-dom"
import { Header } from "../organisms/header/Header"

export const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    )
}