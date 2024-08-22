

import { Box, Typography } from '@mui/material';


interface DropdownProps {
  submenus: {
    title: string;
    url: string;
  }[] , 
  dropdown: boolean,

}



const Dropdown: React.FC<DropdownProps> = ({ submenus , dropdown}) => {
     
if(dropdown === true){
  return (
    <div style={{maxWidth:"960px"}}>
      <Box sx={{backgroundColor:"#ffff" , maxWidth:"960px" , position:{xs:"relative" ,lg:"absolute" }, zIndex:"1", paddingInline:"normal", border:"1px solid grey" }}>
      {submenus.map((submenu, index) => (
        <Box key={index} className="menu-items" > 
             <Typography py="10px" px={2 } fontWeight={400} textAlign="left" >
             <a style={{textDecoration:"none " , color:"black" }} href={submenu.url}>
            {submenu.title}
            </a>
              </Typography> 
             
              
        </Box>
      ))}
    </Box>
    </div>
      
   
  );
}
};

export default Dropdown;