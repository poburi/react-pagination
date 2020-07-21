import React, { useState, useEffect } from "react";
import axios from "axios";

const PostDetail = ({ match }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const postDetail = posts.find((post) => post.id === match.params.id);
  useEffect(() => {
    const postFetch = async () => {
      let result = await axios(
        `https://jsonplaceholder.typicode.com/posts?id=${match.params.id}`
      );
      result = result.data[0];
      console.log(result);
      setIsLoading(false);
      setItem(result);
    };

    postFetch();
  }, []);

  return isLoading ? (
    ""
  ) : (
    <div>
      <ul>
        <li>제목: {`${item.title}`}</li>
        <li>내용: {`${item.body}`}</li>
      </ul>
    </div>
  );
};

export default PostDetail;
