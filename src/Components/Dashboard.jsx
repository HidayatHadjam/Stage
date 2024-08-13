import React from 'react';
import ProductIcon from '../Images/Produits_totals.svg'; // Assurez-vous que ce chemin est correct
import OrderIcon from '../Images/Produits_totals.svg'; // Assurez-vous que ce chemin est correct
import Menu from '../Images/Menu.svg'; // Assurez-vous que ce chemin est correct
import ImageBelowLine from '../Images/Ventes_totles.svg'; // Assurez-vous que ce chemin est correct
import ListIcon from '../Images/Categories_dadshboardsvg.svg'; // Ajoutez le chemin vers votre icône de liste
import Listmoi from '../Images/list_moi.svg';

const Dashboard = () => {
    return (
        <div className="bg-[#E6E6E6] p-6 w-[80%]">
            {/* Titre et Breadcrumb */}
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-[#333]">Dashboard</h1>
                <p className="text-gray-600 mt-2">Acceuil &gt; Dashboard</p>
            </div>

            {/* Colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Colonne 1 */}
                <div className="bg-[#FAFAFA] p-4 rounded-lg flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-[#333]">Produit totals</p>
                        <div className="p-2 rounded-full">
                            <img src={Menu} alt="Produit totals" className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="flex items-center mt-auto">
                        <div className="bg-[#243645] p-2 rounded-lg w-8 h-8 flex items-center justify-center">
                            <img src={ProductIcon} alt="Total" className="h-4 w-4" />
                        </div>
                        <span className="text-xl font-bold text-[#333] ml-4">500</span>
                    </div>
                </div>

                {/* Colonne 2 */}
                <div className="bg-[#FAFAFA] p-4 rounded-lg flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-[#333]">Commandes totales</p>
                        <div className="p-2 rounded-full">
                            <img src={Menu} alt="Commandes totales" className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="flex items-center mt-auto">
                        <div className="bg-[#243645] p-2 rounded-lg w-8 h-8 flex items-center justify-center">
                            <img src={OrderIcon} alt="Total" className="h-4 w-4" />
                        </div>
                        <span className="text-xl font-bold text-[#333] ml-4">200</span>
                    </div>
                </div>
            </div>

            {/* Nouvelles Colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Colonne 1 */}
                <div className="bg-[#FAFAFA] p-4 rounded-lg flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-[#333]">Ventes totales</p>
                        <div className="flex space-x-2">
                            <button className="bg-[#243645] text-white py-1 px-3 rounded-lg">MENSUEL</button>
                            <button className="border border-black text-black py-1 px-3 rounded-lg">ANNUEL</button>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 mb-2" /> {/* Ligne fine */}
                    <div className="flex justify-center">
                        <img src={ImageBelowLine} alt="Image Below Line" className=" w-auto h-auto my-auto p-4" /> {/* Image */}
                    </div>
                </div>

                {/* Colonne 2 */}
                <div className="bg-[#FAFAFA] p-4 rounded-lg flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-[#333]">Plus Vendus</p>
                        <div className="p-2 rounded-full">
                            <img src={Menu} alt="Menu" className="h-4 w-4" />
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" /> {/* Ligne fine */}

                    {/* Trois lignes identiques */}
                    {Array(3).fill().map((_, index) => (
                        <div key={index} className="flex items-center mb-4 p-2 border rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="bg-gray-200 p-4 rounded-lg w-[60%] h-14">
                                    {/* Rectangle */}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Lorem Ipsum</p>
                                    <p className="text-xs text-gray-500">1260 Da</p>
                                </div>
                            </div>
                            <div className="text-right  ml-6 space-x-60">
                                <p className="text-sm font-semibold">1260 Da</p>
                                <p className="text-xs text-gray-500">900 ventes</p>
                            </div>
                        </div>
                    ))}
                    <button className="bg-[#243645] text-white py-1 ml-2 rounded-lg w-[13%] ">Voir</button>
                </div>
            </div>

            {/* Ventes par catégorie */}
            <div className="bg-[#FAFAFA] p-4 rounded-lg mt-4 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-semibold text-[#333]">Ventes par catégorie</p>
                    <button className="flex items-center text-[#243645] border border-[#243645] py-1 px-3 rounded-lg bg-[#F7F7F7]">
                        <span>Ce moi</span>
                        <img src={Listmoi} alt="Liste" className="h-4 w-4 ml-2" />
                    </button>
                </div>
                <hr className="border-t border-gray-300 mb-2" /> {/* Ligne fine */}
                <div className="flex justify-center">
                    <img src={ListIcon} alt="Image Below Line" className="h-35 w-auto p-4" /> {/* Image */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
