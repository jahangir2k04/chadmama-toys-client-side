import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddToys from '../pages/AddToys/AddToys';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/Shared/ErrorPage';

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
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: 'add-toy',
                element: <AddToys></AddToys>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
]);

export default router