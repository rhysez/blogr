import Post from './Post'
import Nav from './Nav'

export default function AllPosts(props) {
    const posts = props.posts

    if (!posts) {
        return <h1 style={{marginTop: '100px'}}>Sorry, we could not load any posts</h1>
    }

    const postsMapped = posts.map((item, index) => {
        return <Post title={item.title} text={item.text} key={index} />
    })

    return (
        <>
            <Nav />
            <section className='all-posts-container'>
               {postsMapped}
            </section>
        </>
    )
}