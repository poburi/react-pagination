import React, { createContext } from "react";
import { Link } from "react-router-dom";

const Post = ({ loading, posts }) => {
  return loading ? (
    <h2>loading...</h2>
  ) : (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <Link to={`/detail/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Post;
