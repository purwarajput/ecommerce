import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar';
import cart2 from '../../assets/cart2.jpg';

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import   Button from '@mui/material/Button';
import Badge from '../../components/Badge';

const Orders = () => {

    const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

    const isShowOrderedProduct = (index)=>{
        if(isOpenOrderedProduct===index){
            setIsOpenOrderedProduct(null);
        }else{
            setIsOpenOrderedProduct(index);
        }
    };


  return (
   <section className='py-10 w-full'>
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                
                <AccountSidebar/>
              </div>


              <div className='col2 w-[80%]'>
                <div className='shadow-md rounded-md bg-white'>
                    <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                        <h2>My Orders</h2>
                <p className='mt-0 mb-0'>There are <span className='font-bold text-primary'>2</span>{" "} orders</p>




                   <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap"> 
                    Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Payment Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Phone Number 
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Pincode 
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    User Id
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Order Status
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Date 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(0)}>

                        {
                            isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                        }
                        
                        </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>pay_PTP0qEXFhrtpy8</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    PURWA SINGH
                </td>
                <td className="px-6 py-4 font-[500]">
                    8092873661
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='block w-[200px]'> House no: 114 Street NO 113 Near Centre Market Rohini Delhi ph. +91-8092873661</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    11053
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    s.purwarajput@gmail.com
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>66e120733d4b21245ab</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <Badge status="pending"/>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2025-12-04
                </td>
            </tr>
 
            {
                isOpenOrderedProduct===0 &&

                 <tr>
                <td className= "pl-20" colSpan="6">
                     <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" className="px-6 py-3 whitespace-nowrap"> 
                    Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Sub Total
                </th>

            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-[500]">
                    <span className='text-gray-500'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>Bandhani Printed Embroidered Sa...</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    <img src={cart2} className='w-[40px] h-[40px] object-cover rounded-md'/>
                </td>
                <td className="px-6 py-4 font-[500]">
                    2
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                
            </tr>





             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                    <span className='text-gray-500'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>Bandhani Printed Embroidered Sa...</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    <img src={cart2} className='w-[40px] h-[40px] object-cover rounded-md'/>
                </td>
                <td className="px-6 py-4 font-[500]">
                    2
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                
            </tr>



            <tr>
                <td className='bg-[#f1f1f1]' colSpan="12"></td>
            </tr>
            </tbody>
           </table>
          </div>
        </td>
     </tr>
        }






                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(1)}>

                        {
                            isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                        }
                        
                        </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>pay_PTP0qEXFhrtpy8</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    PURWA SINGH
                </td>
                <td className="px-6 py-4 font-[500]">
                    8092873661
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='block w-[200px]'> House no: 114 Street NO 113 Near Centre Market Rohini Delhi ph. +91-8092873661</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    11053
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    s.purwarajput@gmail.com
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>66e120733d4b21245ab</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <Badge status="pending"/>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2025-12-04
                </td>
            </tr>
 
            {
                isOpenOrderedProduct===1 &&

                 <tr>
                <td className= "pl-20" colSpan="6">
                     <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" className="px-6 py-3 whitespace-nowrap"> 
                    Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Sub Total
                </th>

            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>Bandhani Printed Embroidered Sa...</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    <img src={cart2} className='w-[40px] h-[40px] object-cover rounded-md'/>
                </td>
                <td className="px-6 py-4 font-[500]">
                    2
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                
            </tr>





             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>67514d78ff66hjy321</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>Bandhani Printed Embroidered Sa...</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    <img src={cart2} className='w-[40px] h-[40px] object-cover rounded-md'/>
                </td>
                <td className="px-6 py-4 font-[500]">
                    2
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                <td className="px-6 py-4 font-[500]">
                    1300
                </td>
                
            </tr>



            <tr>
                <td className='bg-[#f1f1f1]' colSpan="12"></td>
            </tr>
            </tbody>
           </table>
          </div>
        </td>
     </tr>
        } */}


        </tbody>
        </table>
        </div>
         </div> 
        </div>
      </div>
     </div>
    </section>
  );
};

export default Orders;
