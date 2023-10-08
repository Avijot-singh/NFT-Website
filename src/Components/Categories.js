import React, { useState } from "react";
import "../style/categories.css";
import Card from "./Card"; 
import categoriesData from "../utils/categories";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("clothing");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-container">
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange("clothing")}>
          Clothing
        </button>
        <button onClick={() => handleCategoryChange("home_decor")}>
          Home Decor
        </button>
        <button onClick={() => handleCategoryChange("footwear")}>
          Footwear
        </button>
        <button onClick={() => handleCategoryChange("special_occasion")}>
          Special Occasion
        </button>
        <button onClick={() => handleCategoryChange("home_accessories")}>
          Home Accessories
        </button>
        <button onClick={() => handleCategoryChange("bath_and_bedding")}>
          Bath & Bedding
        </button>
      </div>
      <div className="cards-container">
        {categoriesData[selectedCategory].map((item) => (
          <Card
    id={item.id}
    key={item.id}
    image={item.image}
    name={item.name}
    description={item.description}
    price={item.price}
/>

        ))}
      </div>
    </div>
  );
};

export default Categories;
