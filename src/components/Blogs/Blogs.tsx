import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import Spinner from "../Spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mx-20 py-12">
      {blogs.length < 1 && <Spinner />}
      <div className="grid grid-cols-3 gap-8">
        {blogs?.map((item) => (
          <SingleBlog key={item._id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
