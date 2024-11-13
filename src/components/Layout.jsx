import { Outlet } from "react-router-dom";
import Header from "./Header.jsx"

function Layout(){
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout