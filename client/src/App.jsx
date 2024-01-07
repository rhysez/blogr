import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state array which contains list of posts
  const [posts, setPosts] = useState([]);

  // runs fetch on component mount only
  useEffect(() => {
    // cannot fetch path
    fetch('/home')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>blogr</h1>
      <div>{posts.title}</div>
    </>
  )
}

export default App
