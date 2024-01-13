import { useState } from 'react'
import Post from './Post'

function Trending(props) {
    const posts = props.posts
    const [trendingPost, setTrendingPost] = useState(posts[0])
    

    function nextPost() {
        let currentIndex = posts.indexOf(trendingPost)

        if (!posts[currentIndex + 1]) {
            return false;
        }

        if (posts.indexOf(trendingPost) === -1) {
            setTrendingPost(posts[1]);
            return; 
        }

        setTrendingPost(posts[currentIndex + 1])
    }

    function previousPost() {
        let currentIndex = posts.indexOf(trendingPost)

        if (currentIndex == 0) {
            return false;
        }
        setTrendingPost(posts[currentIndex - 1])
    }

    return (
        <section className='trending-container'>
            <h2 className='trending-title'>Check out trending posts!</h2>
            <h3 className='trending-post-title'>{trendingPost.title}</h3>
            <article className='trending-post-container'>
                <p className='switch-post' onClick={previousPost}>Back</p>
                <Post text={trendingPost.text} likes={trendingPost.likes} dislikes={trendingPost.dislikes} />
                <p className='switch-post' onClick={nextPost}>Next</p>
            </article>
        </section>
    )
};

export default Trending;