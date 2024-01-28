import React, { useContext } from "react";
import useFavourite, { FavouriteContext } from "../../context/favouriteContext";
import Header from "../header/Header";
import BlogDetails from "./BlogDetails";
import SingleBlog from "./SingleBlog";

const FavouriteBlogs = () => {
  const { favouriteBlog } = useContext(FavouriteContext);

  return (
    <div>
      <Header />
      <div className="mx-20">
        <h1 className="text-2xl mb-6">My Favourite Blogs</h1>
        <div className="grid grid-cols-2 gap-4">
          {favouriteBlog.map((item) => (
            <SingleBlog key={item._id} blog={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBlogs;
