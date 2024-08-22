import { useState } from 'react';
import Dropdown from './Dropdown';
import { styled } from '@mui/material/styles';
import { Box, Typography} from '@mui/material';
import {  ArrowDropDownRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';




const ButtonStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '15px 23px',
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
            gutterBottom
            onMouseEnter={() => {setDropdown(true) }
            }

            onMouseLeave={() => {setDropdown(false)}}
          >
            {items.title}{items.submenu && <ArrowDropDownRounded sx={{ position: "absolute" }} />}
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