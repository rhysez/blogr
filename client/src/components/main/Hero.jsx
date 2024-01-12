function Hero(props) {

    return (
        <section className='hero'>
            <section className='hero-container-1'>
                <h2 className='hero-title'>Read your mind away</h2>
                <p className='hero-subtitle'>View, like and comment on your favourite posts...</p>
            </section>
            <section className='hero-container-2'>
                <p className='hero-latest-post'>Latest post: {props.latestPost}</p>
            </section>
        </section>
    )
}

export default Hero