import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import './index.css';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Produits from './Components/Produits';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId); // Update the selected category
  };

  return (
    <div className="App">
      <NavBar /> 
      <Categories onCategoryChange={handleCategoryChange} />
      <Produits selectedCategory={selectedCategory} />
      <Footer /> 
    </div>
  );
}

export default App;
