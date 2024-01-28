import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import BlogDetails from "../components/Blogs/BlogDetails";
import FavouriteBlogs from "../components/Blogs/FavouriteBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Blogs />,
  },
  {
    path: "/blogs/:blogId",
    index: true,
    element: <BlogDetails />,
  },
  {
    path: "/blogs/favourite",
    index: true,
    element: <FavouriteBlogs />,
  },
]);
