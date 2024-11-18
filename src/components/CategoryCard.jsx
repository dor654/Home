import React from "react";

export default function CategoryCard({ name, price, image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Package2 className="h-12 w-12 text-blue-600" />
          </div>
        )}
      </div>
      {/* Text Section */}
      <h3 className="font-semibold">{name}</h3>
      <p className="text-blue-600 font-medium">{price}</p>
    </div>
  );
}
