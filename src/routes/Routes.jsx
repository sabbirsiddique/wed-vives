import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('data.json')
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
]);

export default router;