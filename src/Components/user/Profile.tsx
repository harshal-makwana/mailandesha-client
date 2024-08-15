import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Container,
  Avatar,
  Stack,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AccountBoxRounded,
  CreditScoreOutlined,
  EmailRounded,
  PhoneIphoneRounded,
  SubscriptRounded,
} from '@mui/icons-material';
import svg from '../assets/email.svg';
import { useSelector,  } from 'react-redux';
import { RootState, } from '../store'; // Import RootState and AppDispatch
import { jwtDecode } from 'jwt-decode';

// Styled components
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
  fontWeight: 800,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.7rem', // Decrease font size on small screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Further decrease font size on extra small screens
  },
}));

const StyledBox = styled(Typography)(({ theme }) => ({
  paddingBlock: '7px',
  color: 'grey',
  fontSize: '1.23rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const DetailsBox = styled(Box)(() => ({
  border:"1px solid rgb(20,0,0,0.2)",
  fontWeight: 600,
  
  
}));




// Define an interface for the decoded token payload
interface DecodedToken {
  user: any;
  email: string;
  password : string ;
}


// Profile component
export default function Profile() {

  const token = useSelector((state: RootState) => state.auth.token);

   // Decode the token and extract the username
   const decoded = jwtDecode<DecodedToken>(token);
   
const handleLogOut = () => {
    localStorage.removeItem("token")
    window.location.href = '/';
}


// List of user details
const list = [
  {
    title: 'Credits',
    icon: (
      <CreditScoreOutlined
        color="error"
        sx={{
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '7px',
          borderRadius: '5px',
        }}
      />
    ),
    value: '0',
  },
  {
    title: 'Mobile',
    icon: (
      <PhoneIphoneRounded
        color="error"
        sx={{
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '7px',
          borderRadius: '5px',
        }}
      />
    ),
    value: '6351741654',
  },
  {
    title: 'Email',
    icon: (
      <EmailRounded
        color="error"
        sx={{
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '7px',
          borderRadius: '5px',
        }}
      />
    ),
    value: decoded.user.email,
  },
  {
    title: 'Subscription',
    icon: (
      <SubscriptRounded
        color="error"
        sx={{
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '7px',
          borderRadius: '5px',
        }}
      />
    ),
    value: 'FREE',
  },
  {
    title: 'Account',
    icon: (
      <AccountBoxRounded
        color="error"
        sx={{
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '7px',
          borderRadius: '5px',
        }}
      />
    ),
    value: 'FREE',
  },
];


  return (
    <div>
      <NavbarGlass position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavbarText variant="h6">
              <Box
                component="div"
                sx={{
                  flexGrow: 1,
                  color: 'black',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 1,
                }}
              >
                <span style={{ fontWeight: 800, fontSize: '30px' }}>
                  Mailandesha
                </span>
                <img src={svg} alt=" Logo" style={{ height: '30px' }} />
              </Box>
            </NavbarText>
          </Box>
        </Toolbar>
      </NavbarGlass>
      <Toolbar /> {/* Spacer for the AppBar */}
     <Container maxWidth="sm" sx={{pt:{xs:"45px",lg:"45px"}}}>
     <Box
             
          
          padding="30px"
          sx={{padding:{xs:"15px",lg:"30px"}}}
        >
          {/* User avatar */}
         <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={'column'}
         >
         <Avatar
            src="https://i.pinimg.com/originals/2b/47/b7/2b47b7e0ef526cfb2a6d29fec058d87a.png"
            sx={{
              marginInline: 'auto',
              height: { xs: '80px', sm: '100px' },
              width: { xs: '80px', sm: '100px' },
            }}
          ></Avatar>
          <Button color='error'
            
            onClick={handleLogOut}
            variant='outlined'  sx={{
            marginInline:"auto",
            mt:"15px"
          }}>
            Log OUT
          </Button>
          <StyledBox
            textAlign="center"
            fontWeight={700}
            mt={"15px"}
          >
            Name: {decoded.user.name}
          </StyledBox>
         </Box>
          <DetailsBox
           sx={{mt:{xs:"15px",lg:"30"}}} 
          >
            <Stack>
              {list.map((item, index) => (
                <StyledBox
                  sx={{
                    width:"90%",
                    marginInline:"auto",
                    display:"flex",
                    padding:"15px",
                    gap:"15px",
                    alignItems:"center",
                    borderBottom: '2px solid #E2E2E2',
                  }}
                  key={index}
                >
                  {item.icon}
                  
                    {item.title}: {item.value}
                 
                </StyledBox>
              ))}
            </Stack>
          </DetailsBox>
        </Box>
   </Container>
        
    </div>
  );
}
