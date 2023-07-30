import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CustomLink from "../../../components/CustomLink/CustomLink";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../assets/Coach/logo.png'

const Header = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const { user, logOut } = useAuth();

 
  const handleSignOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "LogOut Success",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };

  // ---------------------- start dark mood------------------------------------------
  const [theme, seTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handelToggol = (e) => {
    console.log("cliked from togol");
    if (e.target.checked) {
      seTheme("dark");
    } else {
      seTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  // ----------------------- end dark mood ------------------------------------------


  return (
    <nav className="bg-slate-100 shadow-lg border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between">

        {/*------------------- Start logo ---------------------*/}
        <div className="">
          <Link to="/" className="inline mr-0 w-1/3">
            <span className="self-center font-extrabold text-xl whitespace-nowrap dark:text-white">
              <img className="h-12" src={logo} alt="" />
            </span>
          </Link>
        </div>
        {/*------------------- end logo ---------------------*/}

        <div className="flex items-center md:order-2 py-2">

          {/* User image  */}
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            {user && (
              <img
                className="w-8 h-8 rounded-full"
                onClick={() => setUserClicked(!userClicked)}
                src={ user?.photoURL}
                alt="userImg"
              />
            )}
          </button>
          {/* end user image  */}


          {/*---------------------------Start user image navigation ------------------------------*/}
          {/* <div
            className={`z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
              userClicked ? "flex" : "hidden"
            }`}
            id="dropdown"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
            style={{
              position: " absolute",
              top: "100%",
              right: "3%",
              margin: " 0px",
            }}
          >
            <div>
              {user && (
                <>
                  <div className="py-3 px-4 z-50">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.displayName}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                </>
              )}
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <CustomLink
                    to="/dashboard"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </CustomLink>
                </li>
                {user ? (
                  <li>
                    <Link
                      to="/"
                      onClick={handleSignOut}
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <CustomLink
                        to="/signup"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        SignUp
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink
                        to="/signin"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        SignIn
                      </CustomLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div> */}
          {/* ------------------------------End user image navigation-------------------------------- */}


          {/* -------------------------------- Mobile toggle button -------------------------------- */}
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            onClick={() => setMenuClicked(!menuClicked)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {menuClicked ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          {/* --------------------------- end mobile toggle button ------------------------------------- */}


          {/* --------------------------------- start dark mood ----------------------------------------------- */}
          <div className="dropdown dropdown-end md:mt-1 ml-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handelToggol}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          </div>
          {/* --------------------------------- end dark mood ----------------------------------------------- */}
        
        </div>
        

        {/*--------------------------- Header navigation ------------------------------*/}
        <div
          className={`${
            menuClicked ? "block absolute bg-slate-100 top-14" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2 z-50 px-5 leading-9`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <CustomLink
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/instructors"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Instructors
              </CustomLink>
            </li>
            {/* ------------------------------- */}
            <li>
              <CustomLink
                to="/classes"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Classes
              </CustomLink>
            </li>
            {/* --------------------------------------------- */}
           

            {user && (
              <li>
                <CustomLink
                  to="/dashboard"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </CustomLink>
              </li>
            )}

  
            {user ? (
              <li>
                <Link
                  to="/"
                  onClick={handleSignOut}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign out
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <CustomLink
                    to="/signup"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    SignUp
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/signin"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    SignIn
                  </CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/*--------------------------- end Header navigation ------------------------------*/}

      </div>
    </nav>
  );
};

export default Header;
