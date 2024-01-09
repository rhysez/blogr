import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Trending from './components/Trending'

// start client using 'npm run dev' command

function App() {
  // state array which contains list of posts
  const [posts, setPosts] = useState([]);
  const [apiResponse, setApiResponse] = useState(false)

  // runs fetch on component mount only
  useEffect(() => {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => setPosts(data))
    .then(function() {
      setApiResponse(true)
      console.log(posts)
    })
    .catch(err => console.log(err))
  }, [])

  if (!apiResponse) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Nav />
      <section className='hero-background'>
        <Hero latestPost={posts[0].title} />
      </section>
      <Trending posts={posts} />
    </>
  )
}

export default App
