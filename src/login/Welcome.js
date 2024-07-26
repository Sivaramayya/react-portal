import React from 'react';
import OrderCount from '../orderdetails/OrderCount';
import Catalog from '../catalog/Catalog';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Welcome = () => {
  return(
    <>
     <Headers />
     <NavBar />
     <OrderCount />
     <Catalog />
     <Footer />
    </>
 
);
};

export default Welcome;
