import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Error from './Error';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />
        }
    ]);

    return <RouterProvider router={router} />
};

export default Router;