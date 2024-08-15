import React from 'react';
import { 
  Grid, 
  Typography, 
  Link, 
  Box, 
  Container,
} from '@mui/material';
import marketing from './assets/marketing.svg'
import optimization from './assets/optimization.svg'
import digitalMarketing from './assets/digitalmarketing.svg'
import search from './assets/searchengine.svg'
import creative from "./assets/creativeproduction.svg";
import socialmedia from './assets/socialmedia.svg'


const services = [
  {
    icon: <img src={marketing} height="45px"/>,
    title: 'Email Marketing',
    link: '/email-marketing'
  },
  {
    icon: <img src={optimization} height="45px"/>,
    title: 'Optimization & analytics',
    link: '#'
  },
  {
    icon: <img src={digitalMarketing} height="45px"/>,
    title: 'Web Developement',
    link: '/web-developement'
  },
  {
    icon: <img src={creative} height="45px"/>,
    title: 'Creative production',
    link: '#'
  },
  {
    icon: <img src={search} height="45px"/>,
    title: 'Search engine marketing',
    link: '#'
  },
  {
    icon: <img src={socialmedia} height="45px"/>,
    title: 'Social media marketing',
    link: '#'
  },
];


const ServicesSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt:{xs:"90px",lg:"120px"}, display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center" }}  >
     <Grid container sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
     <Typography  sx={{fontSize: { xs: '2.24rem', md: '2.35rem', lg: '3.05rem'}}} align="center" fontWeight={600} gutterBottom>
        Services We <span style={{color:"#B61F0C" , fontWeight:700,textDecoration:"underline",textDecorationColor:"#B61F0C"}}>Offer</span>
      </Typography>
     </Grid>
      <Grid container spacing="45px" justifyContent="center" sx={{mt:{xs:"0px",lg:"15px"}}}>
        {services.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={4}>
            <Box 
              sx={{ 
                padding: 3, 
                borderRadius: 0, 
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
              }}
            >
              <Box>
                <Typography variant="h6" pt={"15px"} color={"maroon"}>
                {service.icon} 
                </Typography>
                <Typography variant="h6" pt={"15px"} gutterBottom  fontWeight={500}>
                 {service.title}
              </Typography>
              </Box>
              
              <Link  href={service.link} underline="hover" pt={"15px"}  color="error">
                Learn More
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;