import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[{
            path: "/",
            element: <Dashboard />,
        }]
    }
])