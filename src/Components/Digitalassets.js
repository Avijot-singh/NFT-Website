import React from 'react'
import "../style/categories.css";
import Card from "./Card";
import categoriesData from "../utils/categories"; 

function Digitalassets() {
    const allItems = [];

    // Iterate through all categories and collect items in allItems array
    for (const category in categoriesData) {
      allItems.push(...categoriesData[category]);
    }
  return (
    <div className="categories-container">
    <div className="cards-container">
      {allItems.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  </div>
  )
}

export default Digitalassets