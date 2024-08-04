import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import product1Image from '../Images/Produit1.svg';
import product2Image from '../Images/Produit2.svg';
import product4Image from '../Images/Produit3.svg';
import product6Image from '../Images/Produit4.svg';
import product7Image from '../Images/Produit1.svg';
import product8Image from '../Images/Produit2.svg';

const Offres = () => {
    const scrollRef = useRef(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const items = [
        { id: 1, name: 'Television', price: 10955, oldPrice: 15000, image: product1Image, description: 'Description of Product1', discount: '-25%' },
        { id: 2, name: 'Chaussures', price: 15555, oldPrice: 20000, image: product2Image, description: 'Description of Product 2', discount: '-20%' },
        { id: 3, name: 'Casque', price: 20000, oldPrice: 25000, image: product7Image, description: 'Description of Product 3', discount: '-15%' },
        { id: 4, name: 'Petrin', price: 3000, oldPrice: 5000, image: product4Image, description: 'Description of Product 1', discount: '-40%' },
        { id: 5, name: 'Vêtements', price: 15555, oldPrice: 18000, image: product8Image, description: 'Description of Product 2', discount: '-14%' },
        { id: 6, name: 'Pièce', price: 20000, oldPrice: 22000, image: product6Image, description: 'Description of Product 3', discount: '-9%' },
        { id: 7, name: 'Casque', price: 20000, oldPrice: 25000, image: product7Image, description: 'Description of Product 3', discount: '-15%' },
        { id: 8, name: 'Petrin', price: 3000, oldPrice: 5000, image: product4Image, description: 'Description of Product 1', discount: '-40%' },
        { id: 9, name: 'Vêtements', price: 15555, oldPrice: 18000, image: product8Image, description: 'Description of Product 2', discount: '-14%' },
    ];

    return (
        <div className="w-[90%] mx-auto relative">
            <h2 className="text-black mb-6 font-bold text-2xl text-center">Nos Offres</h2>
            <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4 w-[100%]">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[24%] max-w-[24%] p-2 relative"
                        onMouseEnter={() => setHoveredProduct(item.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >++++++++++++++++++++++++++++++++
                        <div className="bg-white shadow-md overflow-hidden w-[100%] flex flex-col justify-between h-full">
                            <div className="relative bg-[#243645] bg-opacity-5 w-[100%]">
                                <img src={item.image} alt={item.name} className="product-image h-42 w-[70%] object-cover mx-auto" />
                                <div className="absolute top-0 left-0 mt-3 ml-2 w-12 h-6 bg-red-600 bg-opacity-70 rounded flex items-center justify-center shadow-md">
                                    <span className="text-white font-semibold">{item.discount}</span>
                                </div>
                                <div className={`absolute bottom-0 left-0 w-full text-center ${hoveredProduct === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                                    <button className="bg-[#243645] text-white px-2 py-1 rounded-bl-sm rounded-br-sm transition-colors duration-300 w-full">
                                        Ajouter au panier
                                    </button>
                                </div>
                                <div className="absolute top-0 right-1 mt-2 mr-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <AiOutlineHeart className="text-black" />
                                </div>
                            </div>
                            <div className="p-2 bg-white shadow-md flex flex-col h-full">
                                 <h5 className="font-medium text-[#243645] text-opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</h5>
                                 <div className="flex flex-col mt-2">
                                       <p className="text-red-500 font-bold">{item.price} DA</p>
                                       <p className="text-gray-500 line-through">{item.oldPrice} DA</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleScrollLeft} className="bg-gray-400 text-white rounded-full p-2 shadow-lg absolute top-1/2 left-2 transform -translate-y-1/2">
                <FaChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={handleScrollRight} className="bg-gray-400 text-white rounded-full p-2 shadow-lg absolute top-1/2 right-2 transform -translate-y-1/2">
                <FaChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Offres;
