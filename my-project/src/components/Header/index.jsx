import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FiShoppingCart } from "react-icons/fi";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation"; 



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
  return (
    <header className="bg-white">
      {/* Top Strip */}
      <div className="top-strip py-2 border-t border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-[13px] font-medium text-gray-700">
                Snap it before it’s gone – Deals up to 70% off!
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Link to="/help-center" className="text-[13px] font-medium hover:text-blue-600">
                Help Center
              </Link>
              <Link to="/order-tracking" className="text-[13px] font-medium hover:text-blue-600">
                Order Tracking
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='header py-4 border-b-[1px] border-gray-250 '>
          <div className='container flex items-center justify-between'>
            <div className='col1 w-[25%] '>
              <Link to={"/"}><img src="/logo.png"></img></Link>
      </div>
          {/* Placeholder for Search Bar (center) */}
          <div className="col2 w-[45%]">
            <Search />
            {/* Add search bar here later */}
          </div>

          {/* Login/Register */}
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className = "flex items-center justify-end gap-3 w-full">
              <li className = "list-none">
                <Link to="/login" className = "link transition text-[15px] font-[500] hover:text-blue-600">Login</Link> | &nbsp;
                <Link to="/register" className = "register transition text-[15px] font-[500] hover:text-blue-600">Register</Link>
              </li>

              <li>
              <Tooltip title="Compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                   <IoGitCompareOutline/>
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              </li>

              <li>
              <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                   <FaRegHeart/>
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              </li>

              <li>
              <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                   <FiShoppingCart/>
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              </li>

            </ul>
            
          </div>
        </div>
      </div>

      <Navigation/>

    </header>
  );
};

export default Header;