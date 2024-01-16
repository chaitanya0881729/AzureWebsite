import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import the Button component

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Repeat } from '@mui/icons-material';


import './style.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const buttonStyle = {
    backgroundColor: '#B0D5F2',
    color: 'white', 
    
    
  };
  





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTwo() {
  const [value, setValue] = React.useState(0);

  const handleButtonClick = (newValue) => {
    setValue(newValue);
  };

  return (

    <div style={{  width:"100", height:"100%",  marginBottom:"3rem"}}>


   <div style={{display:"flex",alignItems:"center", justifyContent:"center",      margin:"2rem 1rem "}}>
   <Button variant="contained"  className='tabbtn'   onClick={() => handleButtonClick(0)} style={{buttonStyle, zIndex:2, backgroundColor:"#FEFEFE", color:"#000",    textTransform:"capitalize",  paddingRight:"8rem", padding:"0.8rem 8.5rem 0.8rem 1rem"}}>
        IT Professionals
      </Button>
      <div>
            <Button variant="contained" onClick={() => handleButtonClick(1)} style={{buttonStyle, zIndex:2, backgroundColor:"#FEFEFE", color:"#000",  textTransform:"capitalize", paddingRight:"8rem", padding:"0.8rem 8.5rem 0.8rem 1rem" }}>
        Data Analysts
      </Button>
      </div>

     <div>
     <Button variant="contained" onClick={() => handleButtonClick(2)} style={{buttonStyle, backgroundColor:"#FEFEFE", color:"#000",  zIndex:2, textTransform:"capitalize", paddingRight:"8rem",padding:"0.8rem 8.5rem 0.8rem 1rem" }}>
        Cloud architects
      </Button>

     </div>

     <div>
     <Button variant="contained" onClick={() => handleButtonClick(3)} style={{buttonStyle, backgroundColor:"#FEFEFE", color:"#000",  zIndex:2, textTransform:"capitalize", paddingRight:"8rem", padding:"0.8rem 8.5rem 0.8rem 1rem"}}>
        Business administrators
      </Button>

     </div>
  
   <div>
   <Button variant="contained" onClick={() => handleButtonClick(4)} style={{buttonStyle, backgroundColor:"#FEFEFE", color:"#000",  zIndex:2, textTransform:"capitalize", paddingRight:"8rem", padding:"0.8rem 8.5rem 0.8rem 1rem" }}>
        Students
      </Button>

   </div>

   


   </div>

    <Box >


   <CustomTabPanel value={value} index={0}>

   <div className='card'>

      <p>Optimize your infrastructure with popular Azure solutions and services.</p>

     <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/resources-it-professional-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=608&hei=342&qlt=85'></img>

   </div>


  </CustomTabPanel>


  <CustomTabPanel value={value} index={1}>

<div className='card'>

<p>Create advanced, cloud-based analytics solutions at enterprise scale.</p>

  <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/resources-data-analysts-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=608&hei=342&qlt=85'></img>

</div>


</CustomTabPanel>


<CustomTabPanel value={value} index={2}>

<div className='card'>

<p>Get tools and support for every stage of cloud migration and modernization. </p>

  <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/resources-cloud-architects-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=608&hei=342&qlt=85'></img>

</div>


</CustomTabPanel>



<CustomTabPanel value={value} index={3}>

<div className='card'>

<p>Build your cloud business case with financial and technical guidance. </p>

  <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/resources-business-administrators-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=608&hei=342&qlt=85'></img>

</div>


</CustomTabPanel>

<CustomTabPanel value={value} index={4}>

<div className='card'>

<p>Learn about programming, cloud technologies, and developer tools.
</p>

  <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/resources-students-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=608&hei=342&qlt=85'></img>

</div>


</CustomTabPanel>



























    </Box>
    </div>
  );
}
