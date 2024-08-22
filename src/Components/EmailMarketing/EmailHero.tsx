import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor:"#B61F0C",
  color:"white",
  height : 60,
  width:200,
 '&:hover': {
   backgroundColor: "white",
   color: theme.palette.error.main,
    border: '1px solid red'
 },
}));


const EmailMarketing = () => {
  return (
    <Container  sx={{display:"flex" , justifyContent:"center", alignItems:"center", py:10}}> 
   <Grid container lg={10}>
   <Grid container>
    <Grid item xs={12}>
    <Typography fontWeight={600} sx={{py:1}}>
    EMAIL MARKETING
    </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant='h2'  fontWeight={800} gutterBottom sx={{py:1,}}>
    Grow your business with email
  </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="h6" sx={{py:1,pr:10}} gutterBottom >
    Collect subscribers, strengthen customer relationships, automate
    workflows and monetize your audience with Mailandesha's advanced email
    marketing features.
  </Typography>
    </Grid>
   </Grid>
  <Grid container spacing={3} sx={{py:2}}>
  <Grid item > 
  <StyledButton  color="error" href="/login">
         SignUp for Free
  </StyledButton>
  </Grid>
  <Grid item alignContent="center"> 
    <Typography variant="body2" gutterBottom color="grey">
    Start a 30-day trial of premium features | No card required
  </Typography></Grid>
  </Grid>
   </Grid>
  </Container>
     
  
  );
};

export default EmailMarketing;
