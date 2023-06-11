import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../Sheared/Loading/Loading";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxios();
  const [makeloading, setMakeLoading] = useState(false)

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeInstructor = async (userId) => {
    setMakeLoading(true)
    try {
      const res = await axiosSecure.patch(`/users/${userId}`, {
        role: "instructor",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Instructor",
          showConfirmButton: false,
          timer: 1000,
        });
        fetchUsers();
        setMakeLoading(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeAdmin = async (userId) => {
    try {
      const res = await axiosSecure.patch(`/users/${userId}`, {
        role: "admin",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Admin",
          showConfirmButton: false,
          timer: 1000,
        });
        fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

 return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
        Manage Users
      </h2>

      {loading ? (
        <Loading></Loading>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 border-2 bg-slate-100">Num</th>
              <th className="py-2 border-2 bg-slate-100">Name</th>
              <th className="py-2 border-2 bg-slate-100">Email</th>
              <th className="py-2 border-2 bg-slate-100">Role</th>
              <th className="py-2 border-2 bg-slate-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="py-2 border-2 text-center">{index + 1}</td>
                <td className="py-2 border-2 text-center">{user.name}</td>
                <td className="py-2 border-2 text-center">{user.email}</td>
                <td className="py-2 border-2 text-center"><span className="badge badge-ghost">{user.role}</span></td>
                <td className="py-2 border-2 text-center">
                  <button
                    onClick={() => handleMakeInstructor(user._id)}
                    className={`${user.role === "instructor" && "btn btn-sm btn-disabled"} btn btn-primary btn-sm mr-2`}
                    disabled={
                      user.role === "instructor" || makeloading
                    }
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className={`${user.role === "admin" && "btn btn-sm btn-disabled"} btn btn-success btn-sm `}
                    disabled={makeloading || user.role === "admin"}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
