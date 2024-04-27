import { use } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const Posts = () => {
  const posst = use(fetchPosts());
  return (
    <ul>
      {posst.map((p) => (
        <div key={p.id} className="">
          <h2>{p.title}</h2>
          <p>{p.body}</p>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
