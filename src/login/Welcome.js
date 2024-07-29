import React from 'react';
import Catalog from '../catalog/Catalog';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Welcome = () => {
  return(
    <>
     <Headers />
     <NavBar />
     <Catalog />
     <Footer />
    </>
 
);
};

export default Welcome;
