import { Container,Grid, Typography, } from '@mui/material'
import React from 'react'


interface InfoProps {
  image1 : string;
  text1 : string ;
  image2 : string;
  text2 : string ;
}

const Info :  React.FC<InfoProps> = ( {image1,text1,image2,text2}  ) => {

  return (
    <div>
  <Container sx={{mt:{xs:"30px",lg:"112px"}}} maxWidth="md">
        <Grid container justifyContent="center" >
      <Grid item >
      <Typography variant="h1" align="center" sx={{ fontSize: { xs: '2.2rem', md: '2rem', lg: '2.5rem' }, fontWeight:"800" }}>
        Your <span style={{color:"#B61F0C" , textDecoration:"underline",textDecorationColor:"#B61F0C"}}>Marketing</span> Will Perform Better With Us
        </Typography>
      </Grid>
        </Grid> 
        <Grid container justifyContent="space-between" sx={{pt:{xs : "30px",sm:"10px",md:"25px",lg:"60px"}}}>
        <Grid item lg={7} md={7} alignItems='center' justifyContent="center" display="flex" > 
          <Typography variant='h6' >
              {text1}
            </Typography>
        </Grid>
        <Grid item lg={4} md={4}>
         <img src={image1} style={{padding:"15px",maxWidth:"100%",maxHeight:"100%"}} ></img>
        </Grid>
        </Grid>
        
        <Grid container justifyContent="space-between"  sx={{pt:{xs :"30px" ,sm:"10px",md:"25px",lg:"6px"}}}>
        <Grid item lg={4} md={4} >
         <img src={image2} style={{padding:"15px",maxWidth:"100%",maxHeight:"100%"}}  ></img>
        </Grid>
        <Grid item lg={7} md={7} alignItems='center' justifyContent="center" display="flex"  sx={{pt:{xs : "30px",sm:"10px",md:"25px",lg:"60px"}}}> 
          <Typography variant='h6'   >
              {text2}
             </Typography>
        </Grid>
        </Grid>
        
  </Container>


    </div>
  )
}

export default Info