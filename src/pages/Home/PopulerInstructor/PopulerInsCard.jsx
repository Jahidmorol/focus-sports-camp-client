import React from "react";

const PopulerInsCard = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-auto rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{email}</p>
    </div>
  );
};

export default PopulerInsCard;
