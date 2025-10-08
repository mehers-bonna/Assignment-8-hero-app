import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/apps",
                element: <Apps />,
            },
            {
                path: "/installation",
                element: <Installation />,
            },

        ]
    },
    // {
    //     path: "/about",
    //     element: <ErrorPage/>,
    // },
]);

export default router;