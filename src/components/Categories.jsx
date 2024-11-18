import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Smart Watches",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Laptops",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "GoPro Cameras",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1644303318621-fb6032f7f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Headphones",
    price: "$199",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smartphones",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const Categories = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map(({ name, price, image }, index) => (
        <CategoryCard key={index} name={name} price={price} image={image} />
      ))}
    </div>
  </div>
);

export default Categories;
