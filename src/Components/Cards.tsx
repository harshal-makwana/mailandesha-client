import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import perfomance from "./assets/meter.svg"
import search from './assets/audit.svg'
import conversation from './assets/conversation.svg'
import setup from './assets/clock.svg'



const cardData = [
  {
    image:perfomance,
    title : "Pure Performance",
    text: "Revenue split partnership. Less risk for you higher reward for us ",
    
  },
  {
    image:search,
    title : "Deep One-Time Audit",
    text: "Get detailed to-do’s to hit your goals faster than ever before. ",
    
  },
  {
    image:setup,
    title : "One-Time Setup",
    text: "We’ll build you a high performing engine and you run it by yourself "
    
  },
  {
    image:conversation,
    title : "Ongoing Consulting",
    text: "Get ongoing step-by-step advice with data-driven prioritization.",
    
  },
]



const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 height:400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
}));


const QuarterlyBusinessReviewCard = (props: { image: string | undefined, title: string| undefined, text: string | undefined }) => (
  <Item>
    <CardContent>
      <Typography variant="h4" fontWeight={700} color="rgb(0,0,0,0.75)" gutterBottom>
        {props.title}
      </Typography >
      <Typography variant="h6" color="rgb(0,0,0,0.75)" gutterBottom>
       {props.text}
      </Typography>
      <Box marginTop="24px"><img style={{ maxHeight:"240px", }} src={props.image}></img></Box>
    </CardContent>
  </Item>
);

const Cards: React.FC = () => {
  return (
    <Container  sx={{ maxWidth: 800, display:"flex", justifyContent:"center", alignItems:"center", mt:{xs:"90px",lg:"120px"}}}>
     
      <Grid container  justifyContent="center">
          <Typography variant="h1" align="center" sx={{ fontSize: { xs: '2.2rem', md: '2rem', lg: '2.5rem' }, margin:1, fontWeight:"800",color:"rgb(0,0,0,0.85)" }}>
          Choose How We Work Together:
        </Typography>
        <Typography variant="h1" align="center"  sx={{ fontSize: { xs: '2.2rem', md: '1.5rem', lg: '2.5rem' }, mb: 2 ,fontWeight:"800",color:"rgb(0,0,0,0.85)"}}>
        From One-Time Audits to Done-For-You-Everything
        </Typography>
        <Typography variant="body2" align="center" maxHeight="md" sx={{ fontSize: { xs: '1.5rem', md: '1rem', lg: '1.45rem' }, mb: 4 , fontWeight:"500",color:"rgb(0,0,0,0.8)"}}>
        Outsource all your marketing to us or have us help your internal team get better.
        You choose the style of engagement.
        </Typography>
        <Grid container gap={"45px"} sx={{mt:{xs:"30px",lg:"60px"}}} justifyContent="center">
        {
          cardData.map( (card, index) =>(
            
              <Grid item lg={4} key={index}>
              <QuarterlyBusinessReviewCard image={card.image} title={card.title} text={card.text}/>
              </Grid>
            
          ))
        }
       </Grid>
       <Grid container justifyContent="center" pt={"30px"}>
       <Typography color="error"   variant='h5' sx={{fontWeight:800 , textDecoration:"none" , color:"red", textAlign:{xs:"center"}}} >
       < a href='#' style={{color:"rgb(215,0,0)"}}> <p color='#B3404A'> See live examples of our reporting and communication in your marketing plan </p> </a> 
       </Typography>
       </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;