import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import './index.css';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Produits from './Components/Produits';
import Landing from './Components/Landing';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <NavBar />
      <Landing onSearch={handleSearch} />
      <Categories onCategoryChange={handleCategoryChange} />
      <Produits selectedCategory={selectedCategory} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
