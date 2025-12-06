// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/signup', '/login'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;