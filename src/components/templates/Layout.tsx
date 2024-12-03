import { Outlet } from "react-router"
import { Header } from "../organisms/header/Header"

export const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}