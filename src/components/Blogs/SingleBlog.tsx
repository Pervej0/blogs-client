/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";

type TBlog = {
  userId: string;
  _id: string;
  title: string;
  body: string;
};

const SingleBlog = (props: {
  blog: TBlog;
  handleRemove?: any;
  from?: string;
}) => {
  const { title, body, _id } = props.blog;

  return (
    <div className="border border-gray-800 rounded-lg p-3">
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      <p className="text-black pb-2">{body.slice(0, 60)}...</p>
      <div>
        <NavLink to={`/blogs/${_id}`}>
          <button className="bg-green-700 text-white px-2 py-1 rounded">
            Read More
          </button>
        </NavLink>
        {props?.from && (
          <button
            onClick={() => props.handleRemove(_id)}
            className="bg-red-600 text-white py-1 px-2 rounded ml-2"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
