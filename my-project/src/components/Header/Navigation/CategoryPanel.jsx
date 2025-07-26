import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import { CategoryCollapse } from '../../CategoryCollapse';

const CategoryPanel = (props) => {
  
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
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

      <CategoryCollapse/>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
