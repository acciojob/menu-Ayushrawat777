

import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const menuItems = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Omelette", category: "Breakfast", price: "$6", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Burger", category: "Lunch", price: "$8", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Pizza", category: "Lunch", price: "$10", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Strawberry Shake", category: "Shakes", price: "$4", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$4", image: "https://via.placeholder.com/100" },
];

const categories = ["All", "Breakfast", "Lunch", "Shakes"];

const App = () => {
  const [items, setItems] = useState(menuItems);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <div className="app-container">
      <h1>Our Menu</h1>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={category === activeCategory ? "active" : ""}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Menu items={items} />
    </div>
  );
};

export default App;
 
