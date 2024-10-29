import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import VeganPage from "../pages/VeganPage.tsx";
import GelatoPage from "../pages/GelatoPage.tsx";
// import AppLayout from "../layouts/AppLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/", element: HomePage()
    },
    {
        path: "/vegan", element: VeganPage()
    },
    {
        path: "/gelato", element: GelatoPage()
    },
]);


