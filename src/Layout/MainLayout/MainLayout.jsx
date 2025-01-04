import React from 'react';
import Home from '../../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';


const MainLayout = () => {
      return (
            <div>
                 <Home></Home>
                 <Outlet></Outlet>
                 <Footer></Footer>
            </div>
      );
};

export default MainLayout;