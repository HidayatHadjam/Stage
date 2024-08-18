// CommandesPage.js
import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/SideBar';
import Commandes from '../Components/Commandes';

const DashboardPage = () => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar className="h-full w-[90%]" />
          <div className="flex-grow ">
            <Commandes />
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
