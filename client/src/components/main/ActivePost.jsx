import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";
import Nav from "./Nav";
import Comment from "./Comment";

// need to figure out how to fetch post
// by the data model id as props
// after clicking 'read post' on a post
// user should be redirected to /posts/activepost
// with the post object passed as props
const ActivePost = () => {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [comments, setComments] = useState(post.comments);
  const ref = useRef(null);

  const testPostId = "659da6514993b35ddda0b363";

  useEffect(() => {
    fetch("http://localhost:3000/api/posts/659da6514993b35ddda0b363")
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
    fetch("http://localhost:3000/api/posts/659da6514993b35ddda0b363/like")
      .then(setLikes(post.likes))
      .catch((err) => console.log(err));
  };

  const dislikePost = () => {
    fetch("http://localhost:3000/api/posts/659da6514993b35ddda0b363/dislike")
      .then(setDislikes(post.dislikes))
      .catch((err) => console.log(err));
  };

  const handleCommentForm = () => {
    const form = ref.current;
    form.className == "hidden"
      ? (form.className = "form-comment")
      : (form.className = "hidden");
  };

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

        <form action="" method="POST" className="form-comment" ref={ref}>
          <label htmlFor="comment-text" className="form-label">
            Your thoughts:
          </label>
          <input
            type="text"
            id="comment-text"
            name="comment-text"
            required={true}
          />

          <label htmlFor="comment-user" className="form-label">
            Your name:
          </label>
          <input
            type="text"
            id="comment-user"
            name="comment-user"
            required={true}
          />

          <input
            type="submit"
            value="Post comment"
            className="hero-latest-post"
            id='form-submit'
          />
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
