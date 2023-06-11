import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layouts/DashBoard";
import Main from "../layouts/Main";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/Deshboard/AddClass/AddClass";
import AddedClass from "../pages/Deshboard/AddedClass/AddedClass";
import Enrolled from "../pages/Deshboard/Enrolled/Enrolled";
import History from "../pages/Deshboard/History/History";
import ManageClass from "../pages/Deshboard/ManageClass/ManageClass";
import ManageUsers from "../pages/Deshboard/ManageUsers/ManageUsers";
import MyClasses from "../pages/Deshboard/MyClasses/MyClasses";
import Payment from "../pages/Deshboard/Payment/Payment";
import VeiwFeedback from "../pages/Deshboard/VeiwFeedback/VeiwFeedback";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import ErrorPage from "../pages/Sheared/ErrorPage/ErrorPage";
import AdminRoute from "./adminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // user
      {
        path: "dashboard",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolled",
        element: <Enrolled></Enrolled>,
      },
      {
        path: "history",
        element: <History></History>,
      },
      // instructor---------
      {
        path: "addclass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>,
      },
      {
        path: "addedclass",
        element: <InstructorRoute><AddedClass></AddedClass></InstructorRoute>,
      },
    //   {
    //     path: "veiwfeedback",
    //     element: <InstructorRoute><VeiwFeedback></VeiwFeedback></InstructorRoute>,
    //   },
      // admin------------
      {
        path: "manageclass",
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>,
      },
      {
        path: "manageusers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
    ],
  },
]);

export default router;
