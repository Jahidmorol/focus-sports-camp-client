import React from 'react';
import useSports from '../../../hooks/useSports';
import ManageItemCard from './ManageItemCard';

const ManageClass = () => {
  const [sports, loader, refetch] = useSports();


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">Manage Classes</h2>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 bg-slate-100">Image</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Sport Name</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Instructor Name</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Instructor Email</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Available Seats</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Price</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Status</th>
            <th className="px-4 py-2 border-2 bg-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sports.map((item) => (
            <ManageItemCard key={item._id} refetch={refetch} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
