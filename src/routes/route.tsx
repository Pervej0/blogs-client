import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import BlogDetails from "../components/Blogs/BlogDetails";
import FavouriteBlogs from "../components/Blogs/FavouriteBlogs";
import Header from "../components/header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: (
      <>
        <Header />
        <Blogs />
      </>
    ),
  },
  {
    path: "/blogs/:blogId",
    index: true,
    element: (
      <>
        <Header />
        <BlogDetails />
      </>
    ),
  },
  {
    path: "/blogs/favourite",
    index: true,
    element: (
      <>
        <Header />
        <FavouriteBlogs />
      </>
    ),
  },
]);
