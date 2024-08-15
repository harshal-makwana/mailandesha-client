// src/components/AuthPage.tsx
import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Divider, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import svg from '../assets/email.svg'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', // Example secondary color
    },
  },
});

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

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFromLoginPage = () => {
   //setting isLogin to false from loginpage
    setIsLogin(false);
   
  }

  return (
    <div>
      <NavbarGlass position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavbarText variant="h6">
            <Box  component="div" sx={{ flexGrow: 1 , color:"black",  display:"flex",flexWrap:"nowrap",gap:1 }}>
           <span style={{fontWeight:800, fontSize:"30px"}}>Mailandesha</span>    
           <img src={svg} alt=" Logo" style={{ height: '30px' }} />
        </Box>
            </NavbarText>
          </Box>
        </Toolbar>
      </NavbarGlass>
      <Toolbar /> {/* This Toolbar component acts as a spacer for the AppBar */}
      <Container maxWidth="xs" sx={{ mt: 8 ,}} >
        <Box margin="normal" sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 2 }}>
            <Divider>
              <Button
                variant={isLogin ? 'contained' : 'outlined'}
                color="error"
                onClick={() => setIsLogin(true)}
                sx={{ mr: 1 }}
              >
                Login
              </Button>
              <Button
                variant={isLogin ? 'outlined' : 'contained'}
                color="error"
                onClick={() => setIsLogin(false)}
              >
                SignUp
              </Button>
            </Divider>
          </Box>
          <ThemeProvider theme={theme}>
            {isLogin ? <LoginForm  handleFromLogin = {handleFromLoginPage}/> : <RegisterForm />}
          </ThemeProvider>
        </Box>
      </Container>
    </div>
  );
};

export default AuthPage;
