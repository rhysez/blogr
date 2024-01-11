export default function Post(props) {


    return (
        <section className='trending-post'>
            <h2 className='post-title'>{props.title}</h2>
            <p className='post-text'>{props.text}</p>
        </section>
    )
}