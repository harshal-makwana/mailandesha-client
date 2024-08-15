import {  Box, Button, Container, Grid,  Stack, TextField,  Typography } from '@mui/material'
import weDevelopement from '../assets/web-developement.svg'
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
import ServiceCards from './ServiceCards';

  

export default function WebDevelopement() {
  return (
    <div>
        <Navbar/>
        <Container sx={{mt:{xs:"30px",md:"90px"}}}>
           {/* //Hero */}
           <Grid container>
            <Grid item lg={6}>
             <Typography variant='h3' fontWeight={700} >
             An Indian IT Company That Offers Tailored Web Development Services
             </Typography>
             <Typography variant='h6' mt={"24px"} color={"rgb(0,0,0,0.8)"}>
             As one of the top rated web development companies in India, we at Mailandesha, hold more than a year's worth of expertise in creating top-notch and cutting-edge B2B and B2C applications. 
             </Typography>
             <Typography variant='h6' mt={"14px"} color={"rgb(0,0,0,0.8)"}>
             We offer end-to-end custom web development services including ground-up bespoke web development, migration, update, & ongoing maintenance services.
             </Typography>
            </Grid>
            <Grid item lg={6} display={"grid"} sx={{placeItems:"center",mt:{xs:"24px",md:"60px",lg:"0px"}}}>
            <img src={weDevelopement} style={{maxWidth:"100%"}} ></img>
            </Grid>
           </Grid>
           <ServiceCards/>
            <Typography sx={{fontSize:{xs:"1.35rem",md:"2.25rem"}}} textAlign={"center"} fontWeight={700} mt={"120px"}>
             Submit your Query with us and Our Team will shortly contect you .
            </Typography>
            <Box maxWidth="sm" border="solid 0.5px rgb(0,0,0,0.3)" marginInline="auto" mt="45px" padding={"25px 0px"} sx={{borderRadius:"15px"}}>
            <Typography variant='h5' fontWeight={700} textAlign={"center"} >Please fill in the form below</Typography>
            <Stack display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} >
            <TextField margin='normal' label="Full Name" sx={{width:"80%"}}/>
            <TextField margin='normal' label="Email Address" sx={{width:"80%"}}/>
            <TextField margin='normal' label="Contact Number" sx={{width:"80%"}}/>
            <TextField margin='normal' label="Subject" sx={{width:"80%"}}/>
            <Button fullWidth variant='contained' color='error' sx={{mt:"10px",width:"80%",paddingBlock:"9px"}}>Submit</Button>
            </Stack>
            </Box>
        </Container>
        <Footer/>
    </div>
  )
}
