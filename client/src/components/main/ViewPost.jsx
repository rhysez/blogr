import {useState, useEffect} from 'react'
import Nav from "./Nav";

// need to figure out how to fetch post
// by the data model id
export default function ViewPost(props) {
    const url = `http://localhost:3000/api/posts/` // need to add id to end of url
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPost(data)
            })
    }, [])

    return (
        <>
            <Nav />
            <section>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </section>
        </>
    )
}