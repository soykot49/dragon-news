// import { createBrowserRouter, Navigate } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layout/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: async ({ params }) => {
                    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`);
                    
                    if (!res.ok) {
                        throw new Error(`Failed to fetch data: ${res.status}`);
                    }

                    const data = await res.json();
                    console.log(data); // Log the parsed JSON
                    return data; // Return the parsed JSON
                }
            }
        ]
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/login',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default router;