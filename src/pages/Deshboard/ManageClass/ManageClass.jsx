import React, { useState } from 'react';
import useSports from '../../../hooks/useSports';
import ManageItemCard from './ManageItemCard';

const ManageClass = () => {
    const [sports, loader, refetch] = useSports();
      

    
      
    
     
    
      
    
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">Manage Classes</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((item) => (
              <ManageItemCard key={item._id} refetch={refetch} item={item} ></ManageItemCard>
            ))}
          </div>
    
          
        </div>
      );
};

export default ManageClass;