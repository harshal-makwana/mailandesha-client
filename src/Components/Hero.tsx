import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import marketingCounseling from '../Components/assets/brand_loyalty.gif'

const StyledButton = styled(Button)(({ theme }) => ({
  color:"#B3404A",
  '&:hover': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
}));


const Hero = () => {
  return (
  <Container sx={{marginInline:"auto", pt:{xs :" 30px", lg:"15px"}}}>
    <Grid container >
      <Grid item md={6} lg={6} sx={{marginBlock:"auto"}}>
      <Box>
        <Typography sx={{ fontSize: { xs: '1.7rem', md: '2.35rem', lg: '3.05rem' }, fontWeight:"900",textAlign:{xs:"center", md:"left"},  align:"justify",color:"rgb(0,0,0,0.85)"}}>
         Create <span style={{backgroundColor:"rgb(215,0,0,0.3)"}}>Email capmpaigns</span>   
        </Typography>
        <Typography   sx={{ fontSize: { xs: '1.7rem', md: '2.35rem', lg: '3.05rem'}  ,textAlign:{xs:"center", md:"left"},fontWeight:"900", align:"justify",color:"rgb(0,0,0,0.85)" }}>
        your audience will love
        </Typography>
        <Typography  sx={{ fontSize: { xs: '1.25rem', md: '1.25rem', lg: '1.25rem' },  mt:{xs:"15px",lg:"15px"},textAlign:{xs:"center", md:"left",color:"rgb(0,0,0,0.8)"}}}>
          And that's just the average result from our 200+ case studies.
          Use our marketing services to improve your performance starting today.
        </Typography>
        <Box sx={{   alignItems:{xs:"center"},justifyContent:{xs:"center",md:"left"}, display:{xs:"flex",lg:"block"} ,    }}> 
          <StyledButton variant="outlined" color="error" href="/pricing" sx={{  fontSize: { xs: '1.1rem', md: '1.25rem', lg: '1.2rem' }, border: '1px solid red', color: 'red', mt:{xs:"35px",lg:"50px"} }}>
          GET YOUR FREE MARKETING PLAN
          </StyledButton>
        </Box>
        <Typography variant="body2"   sx={{  fontSize: { xs: '1.25rem', md: '1.25rem', lg: '1.2rem' }, fontWeight:"900" ,textAlign:{xs:"center", md:"left"} ,  mt:{xs:"15px"} ,color:"rgb(0,0,0,0.85)" }}>
          Take our ideas, even if we don't work together
        </Typography>
    </Box>
      </Grid>
      <Grid item md={6} lg={6} >
       <img width="100%"  src={marketingCounseling}></img>
      </Grid>
    </Grid>
  </Container>
  );
};

export default Hero;