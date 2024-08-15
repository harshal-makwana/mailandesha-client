import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({ 
  '&:hover': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },

  [theme.breakpoints.up('xs')]: {
    fontSize:"0.9rem", 
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
 
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '95%',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing("30px"),
}));

const SocialIcon = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  borderRadius: '50%',
  backgroundColor: 'rgb(215,0,0,0.4)',
  padding: '10px',
  marginInline: theme.spacing(1),
  color: theme.palette.error.dark,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
}));

const Contact: React.FC = () => {

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center',pt:{xs:"30px",md:"90px",lg:"120px"} }}>
      <StyledBox>
      <Box sx={{ border: '1px solid grey', display:"flex", flexDirection:"row",flexWrap:"wrap", justifyContent:"space-between",padding:"15px",mt:{xs:"7px"}}}>
  <Box margin={"15px"}>
    <Typography variant="h4" fontWeight="600">Have a question?</Typography>
    <Typography variant="h6" fontWeight="400">We don't bite.</Typography>
  </Box>
  <StyledButton  variant="outlined" color='error' sx={{fontSize:{xs:"1.25rem",lg:"1.25rem"},margin:"15px"}} >
    FRIENDS@Mailandesha.COM
  </StyledButton>
</Box>
     <Typography variant="h5" sx={{ mt: "30px" ,textAlign:{xs:"center"}}}>
          CURRENTLY ACCEPTING FOLLOWERS
        </Typography>
        <StyledGrid container gap={3} justifyContent="center">
          <Grid item>
            <SocialIcon variant="h6">
              <TwitterIcon />
            </SocialIcon>
          </Grid>
          <Grid item>
            <SocialIcon variant="h6">
              <LinkedInIcon />
            </SocialIcon>
          </Grid>
          <Grid item>
            <SocialIcon variant="h6">
              <InstagramIcon />
            </SocialIcon>
          </Grid>
          <Grid item>
            <SocialIcon variant="h6">
              <YouTubeIcon />
            </SocialIcon>
          </Grid>
        </StyledGrid>
      </StyledBox>
    </Container>
  );
};

export default Contact;