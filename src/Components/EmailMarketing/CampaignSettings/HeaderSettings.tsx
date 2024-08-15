import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Slider,
  TextField,
  Typography
} from '@mui/material';
import { Delete } from '@mui/icons-material';

interface ThirdProps {
  topPadding: number;
  setTopPadding: React.Dispatch<React.SetStateAction<number>>;
  bottomPadding: number;
  setBottomPadding: React.Dispatch<React.SetStateAction<number>>;
  menuLinks: string[];
  setMenuLinks: React.Dispatch<React.SetStateAction<string[]>>;
  menuLinksUrls: string[];
  setMenuLinksUrls: React.Dispatch<React.SetStateAction<string[]>>;
  openLinkInNewTab: boolean;
  setOpenLinkInNewTab: React.Dispatch<React.SetStateAction<boolean>>;
  headerDisplay: string;
  handleMenuLinksChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  handleMenuLinksUrlsChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  handleMenuLinkDeleteChange: (index : number) => void ;
}

const Third: React.FC<ThirdProps> = ({
  topPadding,
  setTopPadding,
  bottomPadding,
  setBottomPadding,
  menuLinks,
  setMenuLinks,
  menuLinksUrls,
  setMenuLinksUrls,
  openLinkInNewTab,
  setOpenLinkInNewTab,
  headerDisplay,
  handleMenuLinksChange,
  handleMenuLinksUrlsChange,
  handleMenuLinkDeleteChange
}) => {
  

  return (
    <Box
      display={headerDisplay}
      sx={{
        color: 'black',
        height: '60vh',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Typography variant="h5" color="black" sx={{ mb: 2 }}>
        Logo + Navigation
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="black" sx={{ mb: 1 }}>
          Top padding
        </Typography>
        <Slider
          value={topPadding}
          onChange={(event, newValue) =>  {event.preventDefault(); setTopPadding(newValue as number)}}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          color='error'
          
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="black" sx={{ mb: 1 }}>
          Bottom padding
        </Typography>
        <Slider
          value={bottomPadding}
          onChange={(event, newValue) => { event.preventDefault(); setBottomPadding(newValue as number)}}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          color='error'
        />
      </FormControl>
      <Typography variant="h6" color="black" sx={{ mb: 2 }}>
        Menu
      </Typography>
      {menuLinks.map((link, index) => (
        <Grid container alignItems="center" sx={{ mb: 1 }} key={index} gap={1}>
          <Grid item xs={3.5}>
            <TextField
              label="About"
              variant="outlined"
              value={link}
              onChange={(event) => handleMenuLinksChange(event, index)}
              sx={{ backgroundColor: '#fff', color: '#212121' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="https://"
              variant="outlined"
              value={menuLinksUrls[index]}
              onChange={(event) => handleMenuLinksUrlsChange(event, index)}
              sx={{ backgroundColor: '#fff', color: '#212121' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outlined" color="error" sx={{paddingBlock:"15px"}} onClick={() => handleMenuLinkDeleteChange(index)}>
              
                <Delete/>
            
            </Button>
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color='error' fullWidth sx={{ mt: 2 }} onClick={() => {
        setMenuLinks((prevMenuLinks) => [...prevMenuLinks, "new"]);
        setMenuLinksUrls((prevMenuLinks) => [...prevMenuLinks, "https://"]);
      }}>
        Add link
      </Button>
      <FormControlLabel
        control={<Checkbox checked={openLinkInNewTab} onChange={(event) => setOpenLinkInNewTab(event.target.checked)} />}
        label={<Typography variant="subtitle1" color="black">Open link in new tab</Typography>}
        sx={{ mt: 2 }}
      />
      <Typography variant="h6" color="black" sx={{ mt: 2, mb: 1 }}>
        Content style
      </Typography>
    </Box>
  );
};

export default Third;
