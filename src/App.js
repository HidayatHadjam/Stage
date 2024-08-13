import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import './index.css';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Produits from './Components/Produits';
import Landing from './Components/Landing';
import Offres from './Components/Offres';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Contenu du Dashboard */}
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;

