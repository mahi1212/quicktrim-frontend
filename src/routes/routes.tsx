import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ShopDetails from "../pages/ShopDetails/ShopDetails";
import Appointment from "../pages/Appointment/Appointment";
import ShopAppointments from "../pages/ShopAppointments/ShopAppointments";
import UpdateShop from "../pages/UpdateShop/UpdateShop";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/shopDetails/:id",
        element: <ShopDetails />,
    },
    {
        path: "/shopAppointments",
        element: <ShopAppointments />,
    },
    {
        path: "/appointment/:id",
        element: <Appointment />,
    },
    {
        path: "/updateShop/:id",
        element: <UpdateShop />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Login />,
    },
    {
        path: "*",
        element: <div>404</div>,
    }

]);


export default routes;