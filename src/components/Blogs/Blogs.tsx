/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleBlog from "./SingleBlog";
import Spinner from "../Spinner";
import { useQuery } from "react-query";

// const fetchBlogs
const Blogs = () => {
  const { data, isLoading } = useQuery("blogs", async () => {
    const response = await fetch("https://blogs-server-alpha.vercel.app/blogs");
    const data = response.json();
    return data;
  });

  return (
    <div className="mx-20 py-12">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {data?.length > 0 &&
            data?.map((item: any) => <SingleBlog key={item._id} blog={item} />)}
        </div>
      )}
    </div>
  );
};

export default Blogs;
