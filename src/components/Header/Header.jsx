import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const isLogged = useSelector((state) => state.loggedIn);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/login" className="flex items-center">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNz8jssqpsOm4YXiQ-USnC_7VZpUge_7uGN1Qg4=s1360-w1360-h1020"
              className="mr-3 h-12 w-16 rounded-lg"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={(e) => dispatch(logout(false))}
            >
              {/* if logged in the it'll show logout and vice versa */}
              {!isLogged ? "Log in" : "Log out"}
            </Link>
            {!isLogged && (
              <Link
                to="/register"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Register
              </Link>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={isLogged ? "/" : "/login"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-500 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={isLogged ? "/account-info" : "/login"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-500 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
