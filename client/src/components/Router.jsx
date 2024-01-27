import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Error from './main/Error';
import AllPosts from './main/AllPosts'
import SignUp from './authentication/SignUp'
import LogIn from './authentication/LogIn'
import ActivePost from './main/ActivePost';

// start client using 'npm run dev' command
// start server using 'nodemon' command
const Router = () => {
    const [posts, setPosts] = useState([]);
    const [apiResponse, setApiResponse] = useState(false)

    // connects to server and gets posts via /posts route
    useEffect(() => {
        fetch('https://blogr-production.up.railway.app/api/posts')
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
            element: <AllPosts posts={posts}/>,
            errorElement: <Error />
        },
        {
            path: '/signup',
            element: <SignUp />,
            errorElement: <Error />
        },
        {
            path: '/login',
            element: <LogIn />,
            errorElement: <Error />
        },
        {
            path: '/posts/activepost',
            element: <ActivePost />,
            errorElement: <Error />
        },
    ]);

    return <RouterProvider router={router} />
};

export default Router;