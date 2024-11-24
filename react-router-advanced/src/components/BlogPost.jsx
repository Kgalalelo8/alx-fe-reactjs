import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Extract dynamic "id" from the URL

  return <h3>Viewing Blog Post #{id}</h3>;
};

export default BlogPost;
