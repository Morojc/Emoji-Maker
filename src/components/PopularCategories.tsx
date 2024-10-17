import React from 'react';
import './PopularCategories.css';

const PopularCategories: React.FC = () => {
  return (
    <div className="popular-categories">
      <h2>Popular Categories</h2>
      <div className="category-grid">
        <div className="category-item">
          <span className="category-icon">🎉</span>
          <p>Celebration</p>
        </div>
        <div className="category-item">
          <span className="category-icon">🍔</span>
          <p>Food & Drink</p>
        </div>
        <div className="category-item">
          <span className="category-icon">🏠</span>
          <p>Home</p>
        </div>
        <div className="category-item">
          <span className="category-icon">🌞</span>
          <p>Weather</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
