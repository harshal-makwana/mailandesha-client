import * as React from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Slider,
  TextField,
  Typography,
  FormGroup,
  Switch,
  
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase/firebaseConfig';




const StyledButton = styled(Button)(({ theme }) => ({

    height :50,
    width:100,
    variant : "outline",
    color :"red",
    border:"1px solid red",
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      color: 'white',
    },
  }));



interface props{
  paddingHandler : (value : number) => void ,
  bottomPaddingHandler :  (value : number) => void  ,
  handleInputChange : ( type : string , data : string | number | ArrayBuffer | null) => void,
  heroBottomPadding : number ;
  setHeroBottomPadding : any ;
}


// Hero settings 
const HeroSettings : React.FC<props> = ({ bottomPaddingHandler, handleInputChange,heroBottomPadding,setHeroBottomPadding }) => {
    // const [topPadding, setTopPadding] = React.useState(0);
    const [bottomPadding, setBottomPadding] = React.useState(0);
    // const [backgroundImage, setBackgroundImage]  = React.useState<string | ArrayBuffer | null>(null);
    const [backgroundStyle, setBackgroundStyle] = React.useState('fit');
    const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');
    const [fallbackColor, setFallbackColor] = React.useState(false);
    // const [buttonStyle, setButtonStyle] = React.useState('primary');
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const [buttonLink, setButtonLink] = React.useState("https://");
    const [buttonText,setButtonText] = React.useState("Shop Now");


    const handleFileButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    // const handleTopPaddingChange = (event: Event, newValue: number | number[]) => {
    //   event
    //   setTopPadding(newValue as number);
    //   paddingHandler(topPadding)
    
   
    // };
  
    const handleBottomPaddingChange = (
      event: Event,
      newValue: number | number[]
    ) => {
      event
      setBottomPadding(newValue as number);
      bottomPaddingHandler(bottomPadding)
    };
  
    const handleBackgroundImageChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
     
       const input = e.target ;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
      
      
        const reader = new FileReader();
             reader.onload =  async (e) => {
          if (e.target?.result) {
            const dataUrl = await e.target.result as string; // Ensure it's a string
            // await setBackgroundImage(dataUrl); // Set the data URL as the background image
            await handleInputChange("image", dataUrl); // Pass the data URL to handleInputChange
          }
        };
    
        reader.readAsDataURL(file); // Read the file as a data URL
      }




      if (e.target.files) {
        const file = e.target.files[0];
        const fileName = file.name; // Ensure you use a valid filename
        const storageRef = ref(storage, `images/${fileName}`);  
        const uploadTask = uploadBytesResumable(storageRef, file);
        

        // const auth = getAuth();
        // const user = auth.currentUser;
    
        // if (!user) {
        //   console.error("User is not authenticated");
        //   return;
        // }

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error("Upload failed", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              handleInputChange("image", downloadURL);
            });
          }
        );
      }
    
    };
    
  
    const handleBackgroundStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBackgroundStyle(event.target.value as 'fit' | 'fill');
      console.log(backgroundStyle)
    };
  
    const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBackgroundColor(event.target.value);
      handleInputChange("color", event.target.value)
      
    };
  
    const handleFallbackColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFallbackColor(event.target.checked);
    };
  
    // const handleButtonStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setButtonStyle(event.target.value as 'primary' | 'secondary');
    // };
  
    return (
      <Box
      sx={{
       

        color:"black",
        height: '60vh',
        overflow:"scroll",
        scrollbarWidth:"none",
        padding: 2,
        borderRadius: 1,
        
      }}
      
      >
          <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Standard hero</Typography>
        </Grid>
  
        <Grid item xs={6}>
          <Typography variant="body1">Top padding</Typography>
          <Slider
          
            value={bottomPadding}
            onChange={handleBottomPaddingChange}
            min={0}
            color='error'
            max={100}
            step={1}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Bottom padding</Typography>
          <Slider
            value={heroBottomPadding}
            onChange={( event: Event,
              newValue: number | number[]) => { event.preventDefault(); setHeroBottomPadding(newValue as number)}}
            min={0}
            max={100}
           color='error'
            step={1}
            valueLabelDisplay="auto"
          />
        </Grid>
  
        <Grid item xs={6}>
          <Typography variant="body1">Background image</Typography>
       
   
            <StyledButton onClick={handleFileButtonClick}>
            Browse
            <input
           type="file"
           ref={fileInputRef}
           style={{ display: 'none' }}
           onChange={handleBackgroundImageChange}
            />
            </StyledButton>
            
          
        </Grid>
  
        <Grid item xs={6}>
          <Typography variant="body1">Background style</Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Button
                variant={backgroundStyle === 'fit' ? 'contained' : 'outlined'}
                color='error' 
                sx={{height:"50px"}}
                onClick={() => { setBackgroundStyle('fit'); handleBackgroundStyleChange } }
              
              >
                Fit
              </Button>
            </Grid>
            <Grid item>
              <Button
               color='error' 
               sx={{height:"50px"}}
                variant={backgroundStyle === 'fill' ? 'contained' : 'outlined'}
                onClick={() => { setBackgroundStyle('fill') 
                 
                }}
              >
                Fill
              </Button>
            </Grid>
          </Grid>
        </Grid>
  
        <Grid item xs={6}>
          <Typography variant="body1">Background color</Typography>
          <TextField
            value={backgroundColor}
            onChange={handleBackgroundColorChange}    
          />
        </Grid>
  
        <Grid item xs={6}>
          <Typography variant="body1">Set a fallback color (e.g. similar color as image).</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={fallbackColor}
                  onChange={handleFallbackColorChange}
                  color='error'
                />
              }
              label="Image"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
        <Typography>
          Button 
        </Typography>
        </Grid>
        <Grid item xs={6} >
        <TextField label="text" value={buttonText} onChange={(e) => {setButtonText(e.target.value); handleInputChange("buttonText",e.target.value)}} type='text'/>
        </Grid>
        <Grid item xs={6}>
        <TextField label="Link" value={buttonLink} onChange={(e) => {setButtonLink(e.target.value); handleInputChange("buttonLink",e.target.value)}} type='text'/>
        </Grid>
      </Grid>

      </Box>
        );
  };

  export default HeroSettings

