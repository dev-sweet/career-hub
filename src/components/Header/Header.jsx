import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className="mx-4 hover:text-[#7E90FE]" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-4 hover:text-[#7E90FE]" to="/statistics">
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-4 hover:text-[#7E90FE]" to="/appliedJobs">
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-4 hover:text-[#7E90FE]" to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold hover:cursor-pointer">
            Career Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to=""
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            Start Apllying
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
