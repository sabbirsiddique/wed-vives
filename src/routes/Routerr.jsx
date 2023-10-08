import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import SelectedService from "../Pages/SelectedService/SelectedService";
// import ErrorPage from "../Pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('../.././public/data.json'),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services/:id",
        element: <SelectedService></SelectedService>,
        loader: ()=>fetch("../.././public/data.json"),
      }
    ]
  },
]);

export default router;
