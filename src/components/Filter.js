import React from "react";

const Filter = ({ onCategoryChange, selectedCategory }) => {
  function handleCategoryChange(event) {
    const category = event.target.value;
    onCategoryChange(category);
  }

  return (
    <div>
      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
};

export default Filter;
