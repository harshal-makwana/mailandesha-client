import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { menuItemsData } from './MenuItemsData';
import MenuItems from './MenuItems';
import {  Avatar, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  useEffect, useState } from 'react';
import svg from '../assets/email.svg'
import { CloseOutlined } from '@mui/icons-material';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';


const NavbarGlass = styled(AppBar)(({ theme }) => ({
  background:"white",
  padding: '5px',
  borderRadius: '0px',
  boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    padding: '5px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop:"12px",
  '&:hover': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
}));

const NavbarText = styled(Typography)(({ theme }) => ({
  color: '#000',
  textShadow: '1px 1.5px 3.5px rgba(0, 0, 0, 0.15)', // Add text shadow
  marginLeft: theme.spacing(2), // Add margin to the left
  fontSize: '2rem', // Default font size
  fontWeight : "800",
  [theme.breakpoints.down('md')]: {
    fontSize: '1.7rem', // Decrease font size on small screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Further decrease font size on extra small screens
  },
}));

// Define an interface for the decoded token payload
interface DecodedToken {
  user: any;
  email: string;
  password : string ;
}

export default function Navbar() {
 const [isOpen , setOPen] = useState("none");
 const [name, setName] = useState<string | null>(null);

  //checking if user is loggedIn 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the token and extract the username
        const decoded = jwtDecode<DecodedToken>(token);
        setName(decoded.user.name);
        console.log(name);
        
      } catch (error) {
        console.error('Failed to decode token:', error);
        setName(null);
      }
    }
  }, []);


  return (
   <div>
 <div style={{maxWidth:"85%" , margin: "0 auto"}}>
   <NavbarGlass position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      <NavbarText variant="h6">
        <Box  component="div" sx={{ flexGrow: 1 , color:"black",  display:"flex",flexWrap:"nowrap",gap:1 }}>
           <a href='/' style={{textDecoration:"none" , color:"black"}}>
           <span style={{fontWeight:800, fontSize:"30px"}} >Mailandesha</span>    
           <img src={svg}  alt=" Logo" style={{ height: '30px' }} />
           </a>
        </Box>
        </NavbarText>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Hidden lgUp>
        
        <IconButton color='inherit' sx={{color:"black"}} onClick={() => setOPen("")}>
       
          <MenuIcon/>
         
        </IconButton>
        
      </Hidden>
        </Box>
      <Hidden lgDown> 
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </Box>
         {name?<Link to="profile"><Avatar sx={{ height:"50px" , width:"50px" }} src='https://i.pinimg.com/originals/2b/47/b7/2b47b7e0ef526cfb2a6d29fec058d87a.png'/></Link>: <StyledButton variant="outlined" color="error" href="/login" sx={{ mr: 2, mb: 2, border: '1px solid red', color: 'red' }}>
          LOgin / signup 
          </StyledButton>}
        </Box>
      </Hidden>
      </Toolbar>    
    </NavbarGlass> 
   </div>
    <Box display={isOpen} sx={{transition:"smooth ease in-out"}}>
    <IconButton color='inherit' sx={{color:"black", }} onClick={() => setOPen("none")}>
       
       <CloseOutlined/>
      
     </IconButton>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' , flexDirection:"column" }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' ,flexDirection:"column" }}>
        {menuItemsData.map((menu, index) => {
          return <Box ><MenuItems items={menu} key={index} /></Box>
        })}
      </Box>
      {name?<Link to="/profile"><StyledButton variant="outlined" color="error" sx={{ mr: 2, mb: 2, border: '1px solid red', color: 'red' }}>
          Profile 
          </StyledButton></Link>: 
          <Link to="/login">
           <StyledButton variant="outlined" color="error" href="/login" sx={{ mr: 2, mb: 2, border: '1px solid red', color: 'red' }}>
          LOgin / signup 
          </StyledButton>
          </Link>
         
          }
        </Box>
    </Box>
   </div>
  );
}