import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <Layouts>
            <ErrorPage />
        </Layouts>,
        hydrateFallbackElement: <p>Loading....</p>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path: "/installation",
                Component: Installation,
            },
            {
                path: '/app/:id',
                element: <AppDetails></AppDetails>
            },
            {
                path: "*",
                element: <ErrorPage />,
            }

        ]
    },
]);

export default router;