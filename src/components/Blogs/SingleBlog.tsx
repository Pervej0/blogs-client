import { NavLink } from "react-router-dom";

type TBlog = {
  userId: string;
  id?: string;
  title: string;
  body: string;
};

const SingleBlog = (props: { blog: TBlog }) => {
  const { title, body, _id } = props.blog;
  return (
    <div className="border border-gray-800 rounded-lg p-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-black pb-2">{body}</p>
      <NavLink to={`/blogs/${_id}`}>
        <button className="bg-green-700 text-white px-2 py-1 rounded">
          Read More
        </button>
      </NavLink>
    </div>
  );
};

export default SingleBlog;
