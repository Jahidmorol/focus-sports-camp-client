import React from "react";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaCheckSquare, FaCreditCard, FaHistory, FaHome, FaLayerGroup, FaPeopleArrows, FaPlusSquare, FaSlidersH, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import Footer from "../pages/Sheared/Footer/Footer";

const DashBoard = () => {
  const {user} = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin);

  return (
    <div>
        <Helmet>
        <title>Summer Camp | Dashboard</title>
      </Helmet>
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
      <div className="drawer-side  bg-[#3173de] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
               <FaUsers></FaUsers> Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
            </NavLink>
          </li>
          <div className="divider"></div>
          {isAdmin && user && !isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/manageclass"><FaSlidersH></FaSlidersH> Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && user && !isAdmin &&(
            <>
              <li>
                <NavLink to="/dashboard/addclass"><FaPlusSquare></FaPlusSquare> Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addedclass">
                  <FaLayerGroup></FaLayerGroup> Added classes
                </NavLink>
              </li>
            </>
          )}

          {user && !isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/myclasses"><FaLayerGroup></FaLayerGroup> My Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled"><FaCreditCard></FaCreditCard> Enrolled classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history"><FaHistory></FaHistory> Payment History</NavLink>
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
