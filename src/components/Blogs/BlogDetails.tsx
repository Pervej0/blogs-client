// import {cache} from 'react';
// import calculateUserMetrics from 'lib/user';

import React, { useEffect, useState, useMemo, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import Header from "../header/Header";
import { FavouriteContext } from "../../context/favouriteContext";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { blogId } = useParams();
  const { setFavouriteBlog } = useContext(FavouriteContext);

  useEffect(() => {
    fetch(`http://localhost:4000/comments/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const cachedData = blog;
  console.log(cachedData, "xxxxx");
  return (
    <>
      <Header />
      {Object?.entries(cachedData).length < 1 ? (
        <Spinner />
      ) : (
        <div>
          <div className="mx-20 py-12">
            <div className="mb-6">
              <h1 className="text-4xl font-bold">{cachedData?.title}</h1>
              <p className="text-md mb-4">{cachedData?.body}</p>
              <button
                onClick={() => setFavouriteBlog((prev) => [...prev, blog])}
                className="bg-red-600 text-white py-1 px-2 rounded-sm"
              >
                Favourite
              </button>
            </div>
            <div className="border-t border-green-500">
              <h3 className="text-gray-600 mt-4 text-xl">Comments:</h3>
              <p className="text-xl">{cachedData?.commentBody}</p>
              <p className="text-md">
                <span className="font-bold">author:</span> {cachedData?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
