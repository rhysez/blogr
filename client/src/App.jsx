import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state array which contains list of posts
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState('Not connected')

  // runs fetch on component mount only
  useEffect(() => {
    // cannot fetch path
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => setPosts([data]))
    .then(function() {
      setIsLoading(false)
      setApiResponse('Successfully connected')
    })
    .catch(err => console.log(err))
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>blogr</h1>
      <div>{apiResponse}</div>
    </>
  )
}

export default App
