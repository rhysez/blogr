import Icon from '@mdi/react'
import { mdiThumbUp, mdiThumbDown, mdiCommentText } from "@mdi/js"
import { useNavigate } from 'react-router-dom'

export default function Post(props) {

    return (
        <>
            <section className='trending-post'>
                <section className='post-buttons'>
                    <div className='like-dislike'>
                        <div className='likes'>
                            <Icon className='like' path={mdiThumbUp} size={2} />
                            <span className='like-count'>{props.likes}</span>
                        </div>
                        <div className='dislikes'>
                            <Icon className='dislike' path={mdiThumbDown} size={2} />
                            <span className='dislike-count'>{props.dislikes}</span>
                        </div>
                    </div>
                    <p className='hero-latest-post' id='read-post'>Read post</p>
                </section>
                <h2 className='post-title'>{props.title}</h2>
                <p className='post-text'>{props.text}</p>
                <section className='likes'>
                    <Icon path={mdiCommentText} size={2} />
                    <span className='comment-count'>0</span>
                </section>
            </section>
        </>
    )
}