import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

// start client using 'npm run dev' command

function App() {
  // state array which contains list of posts
  const [posts, setPosts] = useState([]);
  const [apiResponse, setApiResponse] = useState(false)

  // runs fetch on component mount only
  useEffect(() => {
    // successfully fetches api
    // remember to start server with nodemon
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => setPosts([...posts, data[0]]))
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
    </>
  )
}

export default App
