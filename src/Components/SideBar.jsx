import React, { useState } from "react";
import GrosMaket from "../Images/GrosMarket_dark_v.svg";
import Dashboard from "../Images/dashboaard.svg";
import Produits from "../Images/Produits.svg";
import Commandes from "../Images/Commandes.svg";
import Categories from "../Images/Ctegories.svg";

const SideBar = () => {
    // État pour le bouton actif
    const [activeLink, setActiveLink] = useState('dashboard');

    return (
        <div className="flex flex-col h-screen w-64 bg-[#FAFAFA] shadow-md">
            <div className="border-t border-gray-300">
            </div>

            <nav className="flex-1 pt-8">
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#dashboard"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'dashboard' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('dashboard')}
                        >
                            <img 
                                src={Dashboard} 
                                alt="dashboard" 
                                className={`h-6 w-[40%] ${activeLink === 'dashboard' ? 'text-white' : 'text-black'}`} 
                            />
                            <span className="text-sm font-bold ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'products' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('products')}
                        >
                            <img 
                                src={Produits} 
                                alt="produits" 
                                className={`h-6 w-[40%] ${activeLink === 'products' ? 'text-white' : 'text-black'}`} 
                            />
                            <span className="text-sm font-bold ml-3">Produits</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#orders"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'orders' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('orders')}
                        >
                            <img 
                                src={Commandes} 
                                alt="commandes" 
                                className={`h-6 w-[40%] ${activeLink === 'orders' ? 'text-white' : 'text-black'}`} 
                            />
                            <span className="text-sm font-bold ml-3">Commandes</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#categories"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'categories' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('categories')}
                        >
                            <span className="text-sm font-bold mr-12 ml-6">Catégories</span>
                            <img 
                                src={Categories} 
                                alt="categories" 
                                className={`h- w-[10%] ${activeLink === 'categories' ? 'text-white' : 'text-black'}`} 
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
