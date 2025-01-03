import React from 'react';
import Home from '../../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
      return (
            <div>
                 <Home></Home>
                 <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;