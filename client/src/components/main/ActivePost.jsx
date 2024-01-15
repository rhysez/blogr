import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";
import Nav from "./Nav";
import Comment from "./Comment";
import { useLocation } from "react-router-dom";

const ActivePost = () => {
  const location = useLocation();
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [comments, setComments] = useState(post.comments);

  const [commentText, setCommentText] = useState("");
  const [commentUser, setCommentUser] = useState("");

  const [errors, setErrors] = useState([])

  const ref = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${location.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setComments(data.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  const likePost = () => {
    fetch(`http://localhost:3000/api/posts/${location.state.id}/like`)
      .then(setLikes(post.likes))
      .catch((err) => console.log(err));
  };

  const dislikePost = () => {
    fetch(`http://localhost:3000/api/posts/${location.state.id}/dislike`)
      .then(setDislikes(post.dislikes))
      .catch((err) => console.log(err));
  };

  const handleCommentForm = () => {
    const form = ref.current;
    form.className == "hidden"
      ? (form.className = "form-comment")
      : (form.className = "hidden");
  };

  const handleText = (e) => {
    setCommentText(e.target.value)
  }

  const handleUser = (e) => {
    setCommentUser(e.target.value)
  }

  const handleCreateComment = async(e) => {
    e.preventDefault()

    const comment = {comment_text: commentText, comment_user: commentUser};
    console.log(comment)

    try {
      const response = await fetch(`http://localhost:3000/api/posts/${location.state.id}/comment`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
      });

      if (response.ok) {
        window.location.reload(true);
      } else if (response.status == 400) {
        const errorData = await response.json();
        const errors = errorData.details;
        setErrors(errors.map(error => error.msg))
      } else {
        console.error('Could not save comment')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Nav />
      <section className="active-post">
        <h2 className="active-post-title">{post.title}</h2>
        <article className="active-post-text-container">
          <p className="active-post-text">{post.text}</p>
          <section className="post-buttons">
            <div className="likes-dislikes">
              <div className="likes">
                <Icon
                  onClick={likePost}
                  className="active-like"
                  path={mdiThumbUp}
                  size={2}
                />
                <span className="like-count">{likes}</span>
              </div>
              <div className="dislikes">
                <Icon
                  onClick={dislikePost}
                  className="active-dislike"
                  path={mdiThumbDown}
                  size={2}
                />
                <span className="dislike-count">{dislikes}</span>
              </div>
            </div>
            <p
              onClick={handleCommentForm}
              className="hero-latest-post"
              id="read-post"
            >
              Start a comment
            </p>
          </section>
        </article>

        {/* remember to add method='POST' */}
        <form action="" method="POST" className="hidden" ref={ref} onSubmit={handleCreateComment}>
          <label htmlFor="comment_text" className="form-label">
            Your thoughts:
          </label>
          <input
            type="text"
            id="comment_text"
            name="comment_text"
            onChange={handleText}
            required={true}
          />

          <label htmlFor="comment_user" className="form-label">
            Your name:
          </label>
          <input
            type="text"
            id="comment_user"
            name="comment_user"
            onChange={handleUser}
            required={true}
          />

          <button
            type="submit"
            className="hero-latest-post"
            id='form-submit'
          >Post comment</button>
        </form>

        <section className="comments-container">
          {comments?.map((item) => {
            return <Comment text={item.text} user={item.user} key={item._id} />;
          })}
        </section>
      </section>
    </>
  );
};

export default ActivePost;
