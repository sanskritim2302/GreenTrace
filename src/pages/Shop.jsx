import React, { useState } from 'react';
import data from '../data.json';
import Fetcheddata from '../Fetcheddata'; 
import './Shop.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(data.Sheet1.map(product => product.Product))];

  return (
    <div className="container mt-5 pt-5">
      <Fetcheddata data={data} selectedCategory={selectedCategory} />
    </div>
  );
}

export default Menu;