import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default Menu;
