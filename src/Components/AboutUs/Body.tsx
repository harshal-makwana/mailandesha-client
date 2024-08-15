import * as React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import teamWork from '../assets/team-work.svg'


const HeroSection = styled(Grid)(({ theme }) => ({
  backgroundImage: `${teamWork}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0)
}));

const MissionSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 5),
  margin:theme.spacing(10,0)
}));

const TeamSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 5),
  margin:theme.spacing(10,0)
}));

const Body: React.FC = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection container sx={{justifyContent:"space-between"}}>
        <Grid item md={7} sx={{marginBlock:"auto"}}>
        
        <Typography variant="h2" color={"black"} gutterBottom fontWeight={700}>
          Welcome to <span style={{textDecoration:"underline",textDecorationColor:"#B61F0C"}}> Mailandesha</span>
        </Typography>
        <Typography variant="h6" gutterBottom color={"rgb(0,0,0,0.8)"}>
          Crafting Effective Email Campaigns for Your Business Success
        </Typography>
        <Button variant="contained" color="error" sx={{mt:{xs:"7px",md:"30px"}}}>
          Get Started
        </Button>
        
        </Grid>
        <Grid item md={5}>
        <img src={teamWork} width="100%"/>
        </Grid>
       
      </HeroSection>

      {/* Mission Section */}
      <MissionSection boxShadow={"3px 3px 7px #B61F0C"} sx={{backgroundColor:"rgb(255,0,0,0.02)"}}>
       
       <Typography variant="h3" gutterBottom fontWeight={700} sx={{fontSize: { xs: '1.9rem', md: '2.35rem', lg: '3.05rem' }}}>
          Our Mission
        </Typography>
        <Typography variant="h6" paragraph color={"rgb(0,0,0,0.8)"}>
          At Mailandesha, our mission is to empower businesses with effective email marketing strategies that drive results. We believe in creating personalized and impactful email campaigns that resonate with your audience and foster meaningful connections.
        </Typography>
    
      </MissionSection>

      {/* Team Members Section */}
      <TeamSection>
        <Typography variant="h3" gutterBottom fontWeight={700}> 
          Meet the Team
        </Typography>
        <Grid container spacing={4} mt={"35px"}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                sx={{minHeight:"150px"}}
                image='https://cdn.dribbble.com/users/5047705/screenshots/10955695/media/20f48f3992374e5715b6a2263a3b4f0c.png'
                alt="Team Member 1"
              />
              <CardContent>
                <Typography variant="h6">Harshal Makwana</Typography>
                <Typography variant="body2" color="text.secondary">
                Founder & CEO
                </Typography>
                <Typography variant="body2">
                  Harshal leads our team with a passion for innovative email marketing strategies and a commitment to client success.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
              
                alt="Team Member 2"
              />
              <CardContent>
                <Typography variant="h6">Jane Smith</Typography>
                <Typography variant="body2" color="text.secondary">
                  Creative Director
                </Typography>
                <Typography variant="body2">
                  Jane brings creativity and vision to our campaigns, ensuring that each email stands out and engages effectively.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
             
                alt="Team Member 3"
              />
              <CardContent>
                <Typography variant="h6">Alice Johnson</Typography>
                <Typography variant="body2" color="text.secondary">
                  Marketing Strategist
                </Typography>
                <Typography variant="body2">
                  Alice develops data-driven strategies to optimize our email campaigns and maximize ROI for our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </TeamSection>

      {/* Additional Section */}
      <Section sx={{boxShadow:"3px 3px 7px #B61F0C"}}>
        <Typography sx={{fontSize: { xs: '1.9rem', md: '2.35rem', lg: '3.05rem' }}} gutterBottom fontWeight={700}>
          Why choose us?
        </Typography>
        <Typography variant="body1" paragraph mt="35px" sx={{ mt:{xs:"15px",lg:"15px"}}}>
          We offer a comprehensive suite of email marketing services, from strategy development to execution and analysis. Our team of experts is dedicated to delivering high-quality campaigns that drive engagement and achieve your business goals.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" paragraph>
          Our client-centric approach ensures that we understand your unique needs and tailor our services to meet your specific objectives. Partner with us to elevate your email marketing efforts and achieve measurable success.
        </Typography>
      </Section>
    </Container>
  );
};

export default Body;
