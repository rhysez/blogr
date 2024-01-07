function Hero(props) {

    return (
        <section className='hero'>
            <section>
                <h2 className='hero-title'>Read your mind away</h2>
                <p className='hero-subtitle'>View, like and comment on your favourite posts...</p>
            </section>
            <section>
                <p className='hero-latest-post'>Latest post: {props.latestPost}</p>
            </section>
        </section>
    )
}

export default Hero