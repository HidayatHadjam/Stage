// DashboardPage.js
import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/SideBar';
import Dashboard from '../Components/Dashboard';

const DashboardPage = () => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar className="h-full w-[100%]" />
          <div className="flex-grow ">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
