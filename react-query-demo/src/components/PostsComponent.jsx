import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
