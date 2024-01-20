import { useState, useEffect } from 'react'
import Nav from './components/main/Nav'
import Hero from './components/main/Hero'
import Trending from './components/main/Trending'
import SignUp from './components/authentication/SignUp';

export default function App(props) {

  if (!props.apiResponse) {
    return <h1 style={{marginTop: '100px'}}>Loading...</h1>
  }

  return (
    <>
      <section className='gradient-box'>
        <Nav />
        <h2 style={{marginTop: '7.5rem'}}>Welcome to blogr, a full stack MERN application that allows you to view, like and comment on blog posts.</h2>
        <SignUp />
        <section className='hero-background'>
          <Hero latestPost={props.posts[0]} />
        </section>
      </section>
      <Trending posts={props.posts} />
    </>
  )
}
