import { useState } from 'react';
import Dropdown from './Dropdown';
import { styled } from '@mui/material/styles';
import { Box, Button} from '@mui/material';
import {  ArrowDropDownRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';




const ButtonStyle = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '20px 20px',
  border: 'none',
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
  [theme.breakpoints.down('md')]: {
    padding: '5px 10px',
    fontSize: '0.875rem',
  },
}));

interface MenuItemProps {
  items: {
    title: string;
    url: string ;
    submenu?: any; // adjust the type of submenu as needed
  };
}

const MenuItems: React.FC<MenuItemProps> = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Box className="menu-items" style={{textDecoration:"none",  }}>
    <Link  style={{textDecoration:"none"}} to={items.url} >  <ButtonStyle 
            onMouseEnter={() => {setDropdown(true) }
            }

            onMouseLeave={() => {setDropdown(false)}}
          >
            {items.title}{items.submenu? <ArrowDropDownRounded />:""}
          </ButtonStyle></Link>
      {
      
      
      items.submenu ? (
        <div onMouseEnter={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}}>
          <Dropdown 
           dropdown={dropdown}
           submenus={items.submenu}
          />
        </div>
      ) : (
        ""
      )}
    </Box>
  );
};

export default MenuItems