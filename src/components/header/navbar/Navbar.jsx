import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
          <NavLink
                to="/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Gallery
              </NavLink>
          <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Blog
              </NavLink>
          <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                About
              </NavLink>
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl font-bold"><span className="text-[#ee514b]">Wed</span><span className="text-[#F9B232]">Vibes</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">

          <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
          <NavLink
                to="/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Gallery
              </NavLink>
          <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                Blog
              </NavLink>
          <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 text-lg underline font-bold"
                    : ""
                }
              >
                About
              </NavLink>
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
