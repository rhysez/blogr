import { useState, useEffect } from 'react'
import Nav from './components/main/Nav'
import Hero from './components/main/Hero'
import Trending from './components/main/Trending'

export default function App(props) {

  if (!props.apiResponse) {
    return <h1 style={{marginTop: '100px'}}>Loading...</h1>
  }

  return (
    <>
      <Nav />
      <section className='hero-background'>
        <Hero latestPost={props.posts[0]} />
      </section>
      <Trending posts={props.posts} />
    </>
  )
}
