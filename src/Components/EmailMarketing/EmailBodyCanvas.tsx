import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Toolbar,
  AppBar
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import HeroSettings from './CampaignSettings/HeroSettings';
import MyEmail from './MyEmail';
import HeaderSettings from './CampaignSettings/HeaderSettings'; // Import the new Third component
import axios from 'axios';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowForwardIos, ArrowForwardIosOutlined } from '@mui/icons-material';

const NavbarGlass = styled(AppBar)(({ theme }) => ({
  background: 'white',
  padding: '5px',
  borderRadius: '0px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow to the navbar
  [theme.breakpoints.down('md')]: {
    padding: '5px',
   
  },
})); 




const Item = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 2),
  marginBottom: theme.spacing(1),
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

const Navigation = [
  { label: 'Saved blocks', icon: 'bookmark' },
  { label: 'Navigation', icon: 'menu' },
  { label: 'Hero', icon: 'view_headline' },
  { label: 'Sections', icon: 'view_column' },
  { label: 'Elements', icon: 'text_format' },
  { label: 'Content', icon: 'edit' },
  { label: 'Special', icon: 'settings_backup_restore' },
  { label: 'E-commerce', icon: 'local_offer' },
  { label: 'Gallery', icon: 'photo_library' },
  { label: 'Blog and RSS', icon: 'rss_feed' },
];

const ComponentsLIst = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
        <SearchIcon />
        <Typography variant="h6" style={{ marginLeft: '16px' }}>Search..</Typography>
      </div>
      {Navigation.map((item, index) => (
        <Item key={index}>
          <IconWrapper>
            <Typography variant="h6">{item.label}</Typography>
          </IconWrapper>
          <Typography variant="body2">
            -
          </Typography>
        </Item>
      ))}
    </div>
  );
};

interface LocationState {
   
  campaignName : string,
   senderEmail: string ,
    senderName : string,
     subject : string,
      preheader : string 
      recipients : string;
}

const App: React.FC = () => {
  const [topPadding, setTopPadding] = React.useState<number>(0);
  const [headerBottomPadding, setHeaderBottomPadding] = React.useState<number>(0);
  const [heroBottomPadding, setHeroBottomPadding] = React.useState<number>(0);
  const [menuLinks, setMenuLinks] = React.useState<string[]>(['About', 'New!', 'Shop']);
  const [menuLinksUrls, setMenuLinksUrls] = React.useState<string[]>(['https://', 'https://', 'https://']);
  const [buttonLink, setButtonLink] = React.useState("https://");
  const [buttonText,setButtonText] = React.useState("Shop Now");
  const [openLinkInNewTab, setOpenLinkInNewTab] = React.useState<boolean>(true);
  const [headerDisplay, setHeaderDisplay] = React.useState<string>("");
  const [heroDisplay, setHeroDisplay] = React.useState("none");
  const [image, setImage] = React.useState("https://firebasestorage.googleapis.com/v0/b/mailandesha.appspot.com/o/images%2Fundraw_photograph_re_up3b.svg?alt=media&token=8dfbc90a-9d53-46f1-85df-f6e1678d6be3");
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");
  const emailRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const {  campaignName , senderEmail , senderName, subject, preheader, recipients} = location.state as LocationState|| { message: 'No message' };


  const paddingHandler = (value: number) => {
    setTopPadding(value);
  };

  const bottomPaddingHandler = (value: number) => {
    setHeaderBottomPadding(value);
  };

  const handleMenuLinksChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const updatedMenuLinks = [...menuLinks];
    updatedMenuLinks[index] = (event.target as HTMLInputElement).value;
    setMenuLinks(updatedMenuLinks);
  };

  const handleMenuLinksUrlsChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const updatedMenuLinksUrls = [...menuLinksUrls];
    updatedMenuLinksUrls[index] = (event.target as HTMLInputElement).value;
    setMenuLinksUrls(updatedMenuLinksUrls);
  };

  const handleMenuLinkDeleteChange = (index:number) => {
    const updatedMenuLinksUrls = [...menuLinksUrls];
    const updatedMenuLinks = [...menuLinks];

    // Remove the element at the specified index
    updatedMenuLinks.splice(index, 1);
    updatedMenuLinksUrls.splice(index, 1);
  
    // Update the state with the modified arrays
    setMenuLinks(updatedMenuLinks);
    setMenuLinksUrls(updatedMenuLinksUrls);
    
  }

  const handleInputChange = (type: string, data: string | number | ArrayBuffer | null) => {
    if (type === "image") {
      setImage(data as string);
      console.log(data);
    }
    if (type === "color") {
      setBackgroundColor(data as string);
    }
    if(type === "buttonText"){
      setButtonText(data as string)
    }
    if(type === "buttonLink"){
      setButtonLink(data as string)
    }
  };

  const handleSectionClick = (data: React.SetStateAction<string>) => {
    switch (data) {
      case "header":
        setHeaderDisplay("");
        setHeroDisplay("none");
        break;
      case "hero":
        setHeaderDisplay("none");
        setHeroDisplay("");
        break;
      default:
        break;
    }
  };

  const sendData = async () => {
    if (emailRef.current) {
      const emailHtml = emailRef.current.innerHTML;
      try {
        await axios.post('/api/email', { data: { emailHtml, campaignName, senderEmail, senderName, subject, preheader,image,recipients} });
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (

   < >
      <NavbarGlass position="fixed" color='success'>
        <Toolbar color='success'>
          <Box sx={{ display: 'flex', alignItems: 'center' , color:"black", gap:1 }}>
            <Typography variant='body1' fontWeight={500}>Details</Typography>
            <ArrowForwardIosOutlined  sx={{color:"black" , fontSize:"15px"}} fontWeight={600}></ArrowForwardIosOutlined>
            <Typography variant='body1'  fontWeight={600}>Content</Typography>
            <ArrowForwardIos sx={{color:"black",  fontSize:"15px"}} fontWeight={600}></ArrowForwardIos>
            <Typography variant='body1' fontWeight={500}>Review and schedule</Typography>
          </Box>
        </Toolbar>
      </NavbarGlass>
    <Grid container  sx={{ mt: 10}} >
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            overflow: "scroll",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            borderRight: "5px #f3f3f3 solid",
            height: '80vh',
            padding: 2,
            borderRadius: 1,
          }}
        >
          <ComponentsLIst />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ backgroundColor:"rgba(0, 0, 0, 0.03)", display:"grid", placeItems:"center", overflow:"scroll", height:"90vh"}}>
        <div ref={emailRef} style={{width:"100%", marginTop:"17px"}}>
          <MyEmail
            menuLinks={menuLinks}
            menuLinksUrls={menuLinksUrls}
            handleSectionClick={handleSectionClick}
            image={image}
            backgroundColor={backgroundColor}
            headerPadding={topPadding}
            buttonLink = {buttonLink}
            buttonText = {buttonText}
            headerBottomPadding = {headerBottomPadding}
            heroBottompadding = {heroBottomPadding}
          />
        </div>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box borderLeft="5px #f3f3f3 solid" sx={{ height: "90vh" }}>
          <HeaderSettings
                   topPadding={topPadding}
                   setTopPadding={setTopPadding}
                   bottomPadding={headerBottomPadding}
                   setBottomPadding={setHeaderBottomPadding}
                   menuLinks={menuLinks}
                   setMenuLinks={setMenuLinks}
                   menuLinksUrls={menuLinksUrls}
                   setMenuLinksUrls={setMenuLinksUrls}
                   openLinkInNewTab={openLinkInNewTab}
                   setOpenLinkInNewTab={setOpenLinkInNewTab}
                   headerDisplay={headerDisplay}
                   handleMenuLinksChange={handleMenuLinksChange}
                   handleMenuLinksUrlsChange={handleMenuLinksUrlsChange}
                   handleMenuLinkDeleteChange = {handleMenuLinkDeleteChange}
           />
          <Box display={heroDisplay}>
            <HeroSettings paddingHandler={paddingHandler} bottomPaddingHandler={bottomPaddingHandler} 
            handleInputChange={handleInputChange}
            heroBottomPadding={heroBottomPadding}
            setHeroBottomPadding={setHeroBottomPadding}
            />
          </Box>
          <Button variant="contained" color='error' fullWidth sx={{ mt: 4 }} onClick={sendData}>
            Save 
          </Button>
          <Button variant="outlined" color='error' fullWidth sx={{ mt: 3 }}>
            Cancel
          </Button>
        </Box>
      </Grid>
    </Grid>
   </>
  );
};

export default App; 

