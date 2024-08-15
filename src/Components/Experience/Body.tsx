// src/pages/Experience.tsx

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import experience from '../assets/experience.svg'
import campaigns from './assests/campaigns.svg'
import analytics from './assests/analytics.svg'
import tools from './assests/tools.svg'

const Experience: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{mt:"60px"}}>
      <Typography sx={{ fontSize: { xs: '1.7rem', md: '2.35rem', lg: '3.25rem' }, fontWeight:"900",textAlign:{xs:"center"},  align:"justify",color:"rgb(0,0,0,0.85)"}}>
        Our <span style={{textDecoration:"underline",textDecorationColor:"#B61F0C"}}>Experience</span>
      </Typography>
      <Typography  sx={{ fontSize: { xs: '1.25rem', md: '1.25rem', lg: '1.5rem' }, textAlign:{xs:"center",color:"rgb(0,0,0,0.8)"}}}>
        With years of expertise in email marketing, we deliver powerful solutions that help businesses grow.
      </Typography>
      
      <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt={"60px"}>
      <img src={experience} style={{marginInline:"auto",display:"inline",maxWidth:"100%"}} alt='experience'/>
      </Box>

      {/* Company History Section */}
      <Box sx={{ marginTop: '120px' ,boxShadow:"3px 3px 7px #B61F0C",padding:"30px" }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Our Journey
        </Typography>
        <Typography paragraph>
          Founded in 2010, we started with a mission to revolutionize email marketing. Over the years, we've grown from a small startup to an industry leader, constantly innovating and improving our platform. Our team of experts is dedicated to providing cutting-edge solutions and exceptional service to our clients.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ marginTop: '120px' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} mt="15px">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
               
                sx={{maxHeight:"280px"}}
                image={campaigns}
                alt="Feature 1"
              />
              <CardContent>
                <Typography variant="h6"  fontWeight={700} gutterBottom>
                  Personalized Campaigns
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tailor your campaigns to individual customer preferences and behaviors for maximum impact. Use our advanced segmentation tools to deliver targeted messages that resonate.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                sx={{maxHeight:"280px"}}
                image={analytics}
                alt="Feature 2"
              />
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Advanced Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track and analyze the performance of your campaigns with our comprehensive analytics dashboard. Gain insights into open rates, click-through rates, and more to optimize your strategy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                sx={{maxHeight:"267px"}}
                image={tools}
                alt="Feature 3"
              />
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Automation Tools
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Automate repetitive tasks and streamline your marketing efforts with our powerful tools. Set up automated workflows to nurture leads and engage with your audience effortlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Case Studies Section */}
      <Box sx={{ marginTop: '120px' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Case Studies
        </Typography>
        <Grid container spacing={4} mt={"0px"}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  E-Commerce Success
                </Typography>
                <Typography paragraph>
                  Discover how our platform helped an e-commerce store increase sales by 30% through targeted email campaigns and advanced analytics.
                </Typography>
                <Button variant="contained" color="error" href="/case-studies/ecommerce">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  SaaS Growth
                </Typography>
                <Typography paragraph>
                  Learn about how we supported a SaaS company in achieving a 50% boost in user engagement with our automated workflows and personalized emails.
                </Typography>
                <Button variant="contained" color="error" href="/case-studies/saas">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ marginTop: '120px' , boxShadow:"3px 3px 7px #B61F0C",padding:"30px"}}>
        <Typography variant="h4" fontWeight={700}  gutterBottom>
          Frequently Asked Questions
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="What types of businesses can benefit from your platform?"
              secondary="Our platform is designed for businesses of all sizes and industries looking to improve their email marketing strategies and drive better results."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Is your platform easy to integrate with other tools?"
              secondary="Yes, our platform offers integrations with popular CRM systems, e-commerce platforms, and other marketing tools to ensure seamless workflow."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="What kind of support do you offer?"
              secondary="We provide comprehensive support including live chat, email support, and a knowledge base with detailed guides and tutorials."
            />
          </ListItem>
        </List>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '120px', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={"15px"}>
          <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
              <CardContent sx={{display:"grid",placeItems:"center",minHeight:"150px"}}>
                <Typography variant="body1"  gutterBottom>
                  "The email marketing platform provided by this company has transformed our customer engagement!"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  — Alex Johnson, Marketing Director
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
              <CardContent sx={{display:"grid",placeItems:"center",minHeight:"150px"}}>
                <Typography variant="body1" gutterBottom>
                  "A game-changer for our business. The tools are intuitive and highly effective."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  — Maria Smith, CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button variant="contained" color="error" href='/email-marketing' sx={{ marginTop: '2rem' }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default Experience;
