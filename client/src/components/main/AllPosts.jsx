import Post from "./Post";
import Nav from "./Nav";
import Hero from "./Hero";

export default function AllPosts(props) {
  const posts = props.posts;

  if (!posts) {
    return (
      <h1 style={{ marginTop: "100px" }}>Sorry, we could not load any posts</h1>
    );
  }

  const postsMapped = posts.map((item, index) => {
    return (
      <Post
        title={item.title}
        text="Read post to see more..."
        likes={item.likes}
        dislikes={item.dislikes}
        comments={item.comments.length}
        key={item._id}
        id={item._id}
      />
    );
  });

  return (
    <>
      <Nav />
      <section className="hero-background">
        <Hero latestPost={props.posts[0].title} />
      </section>
      <section className="all-posts-container">{postsMapped}</section>
    </>
  );
}
