/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { FavouriteContext } from "../../context/favouriteContext";
import SingleBlog from "./SingleBlog";

const FavouriteBlogs = () => {
  const { favouriteBlog, setFavouriteBlog } = useContext(FavouriteContext);

  const handleRemove = (id: string) => {
    const filteredBlog = favouriteBlog.filter((item: any) => item._id !== id);
    setFavouriteBlog(filteredBlog);
  };

  return (
    <div>
      <div className="mx-20">
        <h1 className="text-2xl mb-6">My Favourite Blogs</h1>
        <div className="grid grid-cols-2 gap-4">
          {favouriteBlog.map((item: any) => (
            <SingleBlog
              key={item._id}
              blog={item}
              from="favourite"
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBlogs;
