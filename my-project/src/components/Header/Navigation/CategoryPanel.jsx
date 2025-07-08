import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="p-3 flex items-center justify-between">
        <h3 className="text-[16px] font-[500]">Shop By Categories</h3>
        <IoClose
          onClick={(e) => {
            e.stopPropagation();
            toggleDrawer(false)();
          }}
          className="cursor-pointer text-[20px]"
          role="button"
          aria-label="Close drawer"
        />
      </div>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion</Button>
            </Link>
            
            {submenuIndex === 0 ? (
              <FaMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Apparel</Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <FaMinus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaPlus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Smart Tablet</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Crepe T-shirt</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Leather Watch</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Rolling Diamond</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>



          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Electronics</Button>
            </Link>
            
            {submenuIndex === 2 ? (
              <FaMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Smartphones</Button>
                  </Link>

                  {innerSubmenuIndex === 2 ? (
                    <FaMinus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FaPlus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {innerSubmenuIndex === 2 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Vivo</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Oppo</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Samsung</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Motorola</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>




          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Face Care</Button>
            </Link>
            
            {submenuIndex === 3 ? (
              <FaMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            ) : (
              <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            )}

            {submenuIndex === 3 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Sunscreens</Button>
                  </Link>


                  {innerSubmenuIndex === 3 ? (
                    <FaMinus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FaPlus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}

                  {innerSubmenuIndex === 3 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Derma Co</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Cetaphil</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Dot & Key</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Plum</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>





         <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Books and Stationaries</Button>
            </Link>
            
            {submenuIndex === 4 ? (
              <FaMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(4)}
              />
            ) : (
              <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(4)}
              />
            )}

            {submenuIndex === 4 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fictional</Button>
                  </Link>


                  {innerSubmenuIndex === 4 ? (
                    <FaMinus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  ) : (
                    <FaPlus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(4)}
                    />
                  )}

                  {innerSubmenuIndex === 4 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Inferno</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Ember</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Hollow</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Crimson</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>


          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Grocery</Button>
            </Link>
            
            {submenuIndex === 5 ? (
              <FaMinus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(5)}
              />
            ) : (
              <FaPlus 
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(5)}
              />
            )}

            {submenuIndex === 5 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Dairy Products</Button>
                  </Link>


                  {innerSubmenuIndex === 5 ? (
                    <FaMinus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  ) : (
                    <FaPlus 
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(5)}
                    />
                  )}

                  {innerSubmenuIndex === 5 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Milk</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Cheese</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Butter</Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">Yoghurt</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
