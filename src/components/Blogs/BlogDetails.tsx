/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { FavouriteContext } from "../../context/favouriteContext";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { blogId } = useParams();
  const { setFavouriteBlog } = useContext(FavouriteContext);

  const { data, isLoading } = useQuery("fetchSingleBlogs", async () => {
    const response = await fetch(
      `https://blogs-server-alpha.vercel.app/comments/${blogId}`
    );
    const data = await response.json();
    setBlog(data);
    return data;
  });

  // useEffect(() => {
  //   fetch(`https://blogs-server-alpha.vercel.app/comments/${blogId}`)
  //     .then((res) => res.json())
  //     .then((data) => setBlog(data));
  // }, []);

  const { title, body, comments } = data || blog;
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="mx-20 py-12">
            <div className="mb-6">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-md mb-4">{body}</p>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  setFavouriteBlog((prev: any) => {
                    toast.success("Added on Favourite List", {
                      autoClose: 3000,
                      theme: "light",
                    });
                    event.currentTarget.disabled = true;
                    return [...prev, data];
                  })
                }
                className="bg-blue-600 text-white py-1 px-2 rounded-sm"
              >
                Favourite
              </button>
            </div>
            <div>
              <h3 className="text-gray-600 border-b-2 border-gray-600 mt-4 text-xl">
                Comments:
              </h3>
              {comments?.map((item: any) => (
                <div key={item._id} className="px mb-1">
                  <p className="text-xl">{item.body}</p>
                  <p className="text-md">
                    <span className="font-bold">author:</span> {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
