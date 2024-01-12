import Icon from '@mdi/react'
import { mdiThumbUp, mdiThumbDown, mdiCommentText } from "@mdi/js"

export default function Post(props) {

    return (
        <>
            <section className='trending-post'>
                <section className='like-dislike'>
                    <div className='likes'>
                        <Icon className='like' path={mdiThumbUp} size={2} />
                        <span className='like-count'>{props.likes}</span>
                    </div>
                    <div className='dislikes'>
                        <Icon className='dislike' path={mdiThumbDown} size={2} />
                        <span className='dislike-count'>{props.dislikes}</span>
                    </div>
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