import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ProductListing from './components/ProductListing';
import { ProductDetails } from './Pages/ProductDetails';
import { createContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ProductZoom } from './components/ProductZoom';
import { IoCloseCircleSharp } from "react-icons/io5";

const MyContext = createContext();
function App() {
   const [openProductDetailsModal, setOpenProductDetailsModal] = useState(true);
   const [maxWidth, setMaxWidth] = React.useState('lg');
   const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {


  }

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home />} />
        <Route path={"productListing"} exact={true} element={<ProductListing/>} />
        <Route path={"product/:id"} exact={true} element={<ProductDetails/>} />
      </Routes>
      <Footer />
      </MyContext.Provider>
    </BrowserRouter>

    <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
         <div className='flex items-center w-full productDetailsModalContainer relative'>
          <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[0px] right-[0px]' onClick={handleCloseProductDetailsModal}><IoCloseCircleSharp/></Button>
          <div className='col1 w-[40%]'>
            <ProductZoom/>
          </div>
         </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

