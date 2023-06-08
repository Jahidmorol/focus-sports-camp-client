import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../pages/Sheared/Footer/Footer";
import Header from "../pages/Sheared/Header/Header";

const DashBoard = () => {
  // const {user} = useAuth()
  const user = true;
  const isAdmin = false;
  const isInstructor = true;

  return (
    <div>
        <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <div className="divider"></div>
          {isAdmin && user && (
            <>
              <li>
                <NavLink to="/dashboard/manageclass">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && user &&(
            <>
              <li>
                <NavLink to="/dashboard/addclass">Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclass">
                  <FaHome></FaHome> Manage classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/veiwfeedback">Veiw Feedback</NavLink>
              </li>
            </>
          )}

          {user && !isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/myclasses">My Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled">enrolled classes</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default DashBoard;
