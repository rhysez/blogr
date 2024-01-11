import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Trending from './components/Trending'

// start client using 'npm run dev' command

export default function App(props) {
 

  if (!props.apiResponse) {
    return <h1 style={{marginTop: '100px'}}>Loading...</h1>
  }

  return (
    <>
      <Nav />
      <section className='hero-background'>
        <Hero latestPost={props.posts[0].title} />
      </section>
      <Trending posts={props.posts} />
    </>
  )
}
