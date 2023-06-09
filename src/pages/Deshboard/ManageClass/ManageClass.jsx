import React, { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useSports from '../../../hooks/useSports';
import ManageItemCard from './ManageItemCard';

const ManageClass = () => {
    const [sports, loader, refetch] = useSports();
      const [selectedClass, setSelectedClass] = useState(null);
      const [feedback, setFeedback] = useState('');
      const [status, setStatus] = useState('')
      const [axiosSecure] = useAxios();

      axiosSecure.patch()
    
      const handleApprove = (classId) => {

        setStatus('approved')
        // Update the status to 'approved'
        // const updatedClasses = classes.map((classItem) => {
        //   if (classItem.id === classId) {
        //     return { ...classItem, status: 'approved' };
        //   }
        //   return classItem;
        // });
        // setClasses(updatedClasses);
      };
    
      const handleDeny = (classId) => {
        setStatus('denied')
        // Update the status to 'denied'
        // const updatedClasses = classes.map((classItem) => {
        //   if (classItem.id === classId) {
        //     return { ...classItem, status: 'denied' };
        //   }
        //   return classItem;
        // });
        // setClasses(updatedClasses);
      };
    
      const handleSendFeedback = () => {
        // Send feedback to the instructor
        // You can use the feedback state value
        // and send it to the instructor using axiosSecure.post or any other method
    
        // Clear the feedback input
        setFeedback('');
        // Close the modal or navigate to another route
        setSelectedClass(null);
      };
    
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">Manage Classes</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((item) => (
              <ManageItemCard key={item._id} item={item}></ManageItemCard>
            ))}
          </div>
    
          {selectedClass && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Send Feedback</h3>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 rounded-md border border-gray-300 mb-4 p-2"
                  placeholder="Write your feedback..."
                ></textarea>
                <div className="flex justify-end">
                  <button
                    onClick={handleSendFeedback}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setSelectedClass(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};

export default ManageClass;