import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home'
import About from './../pages/About';
import Rentals from './../pages/Rentals';
import Error from './../pages/Error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/a-propos",
        element: <About />,
    },
    {
        path: "/location/:id",
        element: <Rentals />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);