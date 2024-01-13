import {useState, useEffect} from 'react'
import Icon from '@mdi/react'
import { mdiThumbUp, mdiThumbDown } from "@mdi/js"
import Nav from "./Nav"
import Comment from './Comment'

// need to figure out how to fetch post
// by the data model id
const ActivePost = () => {
    const [post, setPost] = useState({})

    const testPostId = '659da6514993b35ddda0b363'

    useEffect(() => {
        fetch('http://localhost:3000/api/posts/659da6514993b35ddda0b363')
        .then(res => res.json())
        .then(data => {
            setPost(data)
        })
        .catch(err => console.log(err))
    }, [])

    const comments = post.comments

    // DOES NOT WORK
    const likePost = () => {
        fetch('http://localhost:3000/api/posts/659da6514993b35ddda0b363/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(console.log('post liked successfully'))
        .catch(err => console.log(err))
    }

    return (
        <>
            <Nav />
            <section className='active-post'>
                <h2 className='active-post-title'>{post.title}</h2>
                <article className='active-post-text-container'>
                    <p className='active-post-text'>{post.text}</p>
                    <section className='post-buttons'>
                    <div className='likes-dislikes'>
                        <div className='likes'>
                            <Icon onClick={likePost} className='active-like' path={mdiThumbUp} size={2} />
                            <span className='like-count'>{post.likes}</span>
                        </div>
                        <div className='dislikes'>
                            <Icon className='active-dislike' path={mdiThumbDown} size={2} />
                            <span className='dislike-count'>{post.dislikes}</span>
                        </div>
                    </div>
                    <p className='hero-latest-post' id='read-post'>Comment</p>
                </section>
                </article>
                <section className='comments-container'>
                    {comments?.map(item => {
                        return <Comment text={item.text} user={item.user} key={item._id} />
                    })}
                </section>
            </section>
        </>
    )
}

export default ActivePost