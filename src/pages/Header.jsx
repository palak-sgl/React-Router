import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "../components/Dropdown";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.techjockey.com/web/assets/images/techjockey/products/27157_shipgloballogo.jpg?d=95"
              className="mr-3 h-12 w-24"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="login"
              className="text-gray-800 hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="started"
              className="text-white bg-orange-700 hover:bg-orange-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <Dropdown className="lg:hidden">
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </Dropdown>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/profilepictures"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Profile Pictures
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Personal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/preferences"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Preferences
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/security"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Security
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/summary"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Summary
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/demo"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Demo
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
