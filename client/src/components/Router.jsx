import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Error from './Error';
import AllPosts from './AllPosts'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />
        },
        {
            path: '/posts',
            element: <AllPosts />,
            errorElement: <Error />
        }
    ]);

    return <RouterProvider router={router} />
};

export default Router;