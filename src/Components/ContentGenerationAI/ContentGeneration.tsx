import Footer from '../Footer'
import Body from './Body'
import {styled } from '@mui/material/styles';
import svg from '../assets/email.svg'
import {Link} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';



const NavbarGlass = styled(AppBar)(({ theme }) => ({
  background: 'white',
  padding: '5px',
  borderRadius: '0px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow to the navbar
  [theme.breakpoints.down('md')]: {
    padding: '5px',
   
  },
}));

const NavbarText = styled(Typography)(({ theme }) => ({
  color: '#000',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)', // Add text shadow
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


function ContentGeneration() {
  return (
    <div>
        <NavbarGlass position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavbarText variant="h6">
            <Box  component="div" sx={{ flexGrow: 1 , color:"black",  display:"flex",flexWrap:"nowrap",gap:1 }}>
           <Link to={'/'} style={{textDecoration:"none" , color:"black"}}  >
           <span style={{fontWeight:800, fontSize:"30px"}}>Mailandesha</span>    
           <img src={svg} alt=" Logo"  style={{ height: '30px' }} />
           </Link>
        </Box>
            </NavbarText>
          </Box>
        </Toolbar>
      </NavbarGlass>
      <Toolbar /> {/* This Toolbar component acts as a spacer for the AppBar */}
        <Body/>
        <Footer/>
    </div>
  )
}

export default ContentGeneration