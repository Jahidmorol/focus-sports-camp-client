import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../layouts/DashBoard";
import Main from "../layouts/Main";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/Deshboard/AddClass/AddClass";
import AddedClass from "../pages/Deshboard/AddedClass/AddedClass";
import Enrolled from "../pages/Deshboard/Enrolled/Enrolled";
import ManageClass from "../pages/Deshboard/ManageClass/ManageClass";
import ManageUsers from "../pages/Deshboard/ManageUsers/ManageUsers";
import MyClasses from "../pages/Deshboard/MyClasses/MyClasses";
import VeiwFeedback from "../pages/Deshboard/VeiwFeedback/VeiwFeedback";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "enrolled",
        element: <Enrolled></Enrolled>,
      },
      // instructor---------
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "addedclass",
        element: <AddedClass></AddedClass>,
      },
      {
        path: "veiwfeedback",
        element: <VeiwFeedback></VeiwFeedback>,
      },
      // admin------------
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);

export default router;
