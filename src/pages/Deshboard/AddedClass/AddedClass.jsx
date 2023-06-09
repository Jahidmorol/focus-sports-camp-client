import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';

const AddedClass = () => {
    const [addedClasses, setAddedClasses] = useState([])
    const {user} = useAuth()
    const [axiosSecure] = useAxios()
    axiosSecure.get(`/addedsports?email=${user.email}`)
    .then(res => {
        // console.log(res.data);
        setAddedClasses(res.data)
    })
    
    return (
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
        My Classes
      </h2>

      {addedClasses.length === 0 ? (
        <p className="text-center md:text-3xl mt-16 text-red-400">You haven't Added any classes yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-1 py-4 border bg-slate-100">Image</th>
                <th className="px-4 py-4 border bg-slate-100">Sport Name</th>
                <th className="px-4 py-4 border bg-slate-100">Instructor</th>
                <th className="px-4 py-4 border bg-slate-100">Available Seats</th>
                <th className="px-4 py-4 border bg-slate-100">Price</th>
                <th className="px-4 py-4 border bg-slate-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {addedClasses.map((classItem, index) => (
                <tr key={classItem._id} className="text-center">
                  <td className="px-1 py-1 border">
                    <div className='w-16 rounded-md mx-auto'>
                    <img src={classItem.image} className="h-12 rounded-md" alt="classImage " />
                    </div>
                    </td>
                  <td className="px-4 py-5 border">{classItem.sportName}</td>
                  <td className="px-4 py-5 border">{classItem.instructorName}</td>
                  <td className="px-4 py-5 border">{classItem.availableSeats}</td>
                  <td className="px-4 py-5 border">{classItem.price}</td>
                  <td className="px-4 py-5 border">
                    {classItem.status === 'pending' && <span className='badge badge-ghost'>Panding</span>}
                    {classItem.status === 'aproved' && <span className='badge badge-success'>Aproved</span>}
                    {classItem.status === 'deny' && <span className='badge badge-error'>Deny</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default AddedClass;