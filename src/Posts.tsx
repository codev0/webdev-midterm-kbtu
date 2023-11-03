import { FormEventHandler, useState } from "react";
import { Header } from "./Header";
import { PostsData } from "./data";

export const Posts = () => {
  const [posts, setPosts] = useState(PostsData);
  const [selected, setSelected] = useState<(typeof PostsData)[number] | null>();

  function handleLike(id: number) {
    const updated = posts.map((post) => {
      if (id === post.id) {
        post.likes = post.likes + 1;
      }
      return post;
    });
    setPosts(updated);
  }

  function handleDislike(id: number) {
    const updated = posts.map((post) => {
      if (id === post.id) {
        post.dislikes = post.dislikes + 1;
      }
      return post;
    });
    setPosts(updated);
  }

  function handleDelete(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function handleEdit(id: number) {
    setSelected(posts.find((item) => item.id === id));
  }

  const handleForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    setPosts(
      posts.map((post) => {
        if (post.id === Number(fd.get("id"))) {
          post.title = fd.get("title")?.toString() ?? post.title;
          post.text = fd.get("text")?.toString() ?? post.text;
        }
        return post;
      })
    );
    setSelected(null);
  };

  return (
    <div className="container">
      <Header />
      <h1>Posts Page</h1>
      {selected && (
        <div>
          <form onSubmit={handleForm}>
            <h3>Edit post</h3>
            <label>
              <input type="text" defaultValue={selected.id} name="id" hidden />
            </label>
            <label>
              <input type="text" defaultValue={selected.title} name="title" />
            </label>
            <label>
              <input type="text" defaultValue={selected.text} name="text" />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.text}</div>
          <div>
            <button
              onClick={() => {
                handleLike(post.id);
              }}
            >
              Like: {post.likes}
            </button>
            <button
              onClick={() => {
                handleDislike(post.id);
              }}
            >
              Dislike: {post.dislikes}
            </button>
            <button
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              Edit
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
