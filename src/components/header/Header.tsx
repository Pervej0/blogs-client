import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-center py-5 text-green-700 mx-20">
      <ul className="flex gap-4 justify-between items-center">
        <li>
          <NavLink to="/" className="text-3xl font-semibold uppercase italic">
            Doodle Blogs
          </NavLink>
        </li>
        <div className="flex gap-5">
          <li>
            <NavLink to="/" className="text-lg font-semibold uppercase">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs/favourite"
              className="text-lg font-semibold uppercase"
            >
              Favourite
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
