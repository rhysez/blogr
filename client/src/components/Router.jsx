import {useState, useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Error from './Error';
import AllPosts from './AllPosts'

const Router = () => {
    const [posts, setPosts] = useState([]);
    const [apiResponse, setApiResponse] = useState(false)

    useEffect(() => {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => setPosts(data))
    .then(function() {
        setApiResponse(true)
    })
    .catch(err => console.log(err))
    }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App posts={posts} apiResponse={apiResponse} />,
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