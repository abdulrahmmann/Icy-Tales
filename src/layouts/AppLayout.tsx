import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

function AppLayout() {
    return (
        <section className={`min-h-screen w-full flex flex-col justify-between`}>
            <Header/>

            <Outlet/>

            <Footer/>
        </section>
    );
}

export default AppLayout;