import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/Shared/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import AddToy from '../pages/AddToy/AddToy';
import ToyDetails from '../pages/Home/ShopByCategory/ToyDetails';
import UpdateToy from '../pages/MyToys/UpdateToy'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/totalToys')
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/toy/${params.id}`)
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/toy/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router