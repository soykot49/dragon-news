// import { createBrowserRouter, Navigate } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path: '/news/:id',
        element: <h1>News</h1>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [{
            path: '/auth/login',
            element: <Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }]


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