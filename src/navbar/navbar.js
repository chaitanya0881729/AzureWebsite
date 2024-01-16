import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { dividerClasses } from '@mui/material';

import "./style.css";

import Boxslide from "./slider.js"


import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import BasicTabs from './tabs.js';

import  BasicTabss from './tabs1.js';


import BasicTwo from './tab2.js';



import Tab from '@mui/material/Tab';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import KeyboardIcon from '@mui/icons-material/Keyboard';

import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';


import Sliderboxcard from './slider.js';

import { Carousel } from '../Carousel.jsx';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));














export default function AzureWeb() {

  
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  

  


  return (

    <div className='main'>
    <nav className='navbar'>
    <Box sx={{ flexGrow: 1, "& .MuiToolbar-root":{
        backgroundColor:"#FFFFFF"
    } }}>
      <AppBar sx={{display:'flex',justifyContent:"space-between",marginRight:'0rem'}} position="static">
       <Toolbar>


          <div style={{ width:"100%", display:"flex",alignItems:"center",justifyContent:"space-between"}}>          
          <div className='box1' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.6883 2.3125H25.4766V22.4973H45.6883V2.3125Z" fill="#7DBD38"/>
<path d="M22.7118 2.3125H2.5V22.4973H22.7118V2.3125Z" fill="#F35013"/>
<path d="M45.6883 25.3125H25.4766V45.4973H45.6883V25.3125Z" fill="#FFB900"/>
<path d="M22.7118 25.3125H2.5V45.4973H22.7118V25.3125Z" fill="#299FDC"/>
</svg>

        
          </IconButton>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Azure
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Explore
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Products
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Solutions
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Pricing
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Patners
          </Typography>
          <Typography variant="p" component="div" sx={{ margin:'1rem',color:"#DCDCDD" }}>
            Resources
          </Typography>
          </div>

          <div style={{display:"flex", alignItems:"center",justifyContent:"flex-end"}}>
          
          <Typography color="inherit" variant="p" component="div" sx={{ margin:"1rem", flexGrow:0 ,color:"#DCDCDD" }}>Learn</Typography>
          <Typography color="inherit" variant="p" component="div" sx={{ margin:"1rem", flexGrow:0 ,color:"#DCDCDD" }}>Support</Typography>
          <Typography color="inherit" variant="p" component="div" sx={{ margin:"1rem", flexGrow:0 ,color:"#DCDCDD" }}>contact Sales</Typography>
          
          <button color="inherit"   style={{margin:"1rem", flexGrow:0 ,color:"#000",padding:"0.8rem", backgroundColor:"#9BDD02"}}>Free Account</button>
          <button color="inherit" style={{border:"none",backgroundColor:"#fff"}}>Sign in</button>
          </div>


          </div>



       </Toolbar>
        
      </AppBar>
    </Box>
    </nav>



   <div className='bg'  style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-Hero-Oct?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=984&qlt=95&fmt=png-alpha&fit=constrain")',
  backgroundSize: '100% 90vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"80vh"}}>



<div style={{ width:"100%",height:"100%",   display:"flex",alignItems:"flex-start",justifyContent:"flex-start", textAlign:"start"}}>

<div style={{padding:"7rem"}}>


<h1 style={{fontSize:'4rem'}}>
  Endless possibilities—from the  <br></br>
  edge to the cloud 
  </h1>
  <p style={{fontSize:"1.3rem"}}>Broaden your impact with global infrastructure, cutting-edge AI services, and <br></br> the latest dev tools. Pay-as-you-go or try Azure free for up to 30 days. There’s <br></br> no upfront commitment—cancel anytime</p>

 <Button style={{color:"#fff",backgroundColor:"#006DC1", padding: '20px 36px 20px 36px', marginRight:'0.7rem',borderRadius:"0.5rem"}}>Get Started</Button>
 <Button style={{color:"#000",backgroundColor:"#fff", border: "2px solid #000", padding: '18px 18px 18px 18px', borderRadius:"0.5rem"}}>Try Azure for free</Button>



</div>


</div>


   

</div>





<div style={{backgroundColor:"#FEFEFE",height:'5rem',position:"sticky",top:"0rem",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px", zIndex:5}}>
<div style={{
  display:"flex",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  textAlign:"center",
padding:"1rem"
}}>
  
<ul style={{display:"flex", listStyle:"none",textDecoration:"none", alignItems:"center", justifyContent:"center", textAlign:"center"  }}>
  <li style={{marginRight:"4rem"}}><a>Featured news</a></li>
  <li style={{marginRight:"4rem"}}><a>Solutions</a></li>
  <li style={{marginRight:"4rem"}}><a>Products and services</a></li>
  <li style={{marginRight:"4rem"}}><a>Resources by role</a></li>
  <li style={{marginRight:"4rem"}}><a>Customer stories</a></li>
  
</ul>
</div>
  
</div>







<div className='bg'  style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-FeaturedNews-Background-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85")',
  backgroundSize: '100% 90vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"100vh"}}>

  <div   style={{padding:'2rem', marginLeft:"4rem", textAlign:"start", flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start", width:"90vw"}}>
  <p style={{fontSize:"1rem"}}>FEATURED NEWS</p>

  <p style={{fontSize:"3rem",margin:"0rem",padding:"0rem",paddingBottom:"2rem" }}>Discover what’s happening on Azure</p>



  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  flexGrow: 0, }}>
      <Grid container spacing={4} columns={16} >
        <Grid item xs={5}>
          <Item  style={{borderRadius:"1rem"}} >
            <div style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/featured-news-card1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=266&qlt=94&fit=constrain")',
  backgroundSize: '100% 25vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"25vh", borderRadius:"0.7rem"}}>

             

            </div>
            <div style={{display:"flex", padding:"1rem", flexDirection:"column", textAlign:"start"}}>
              <h4 style={{fontSize:"1.5rem"}}> <b>Microsoft Ignite </b> </h4>
              <p style={{fontSize:"1.2rem"}}>Join us November 14–17, 2023 to explore the latest innovations, learn from experts, level up your skillset, and expand your network.</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={5}>
        <Item  style={{borderRadius:"1rem"}} >
            <div style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/featured-news-card2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=268&qlt=95&fit=constrain")',
  backgroundSize: '100% 25vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"25vh", borderRadius:"0.7rem"}}>

             

            </div>
            <div style={{display:"flex", padding:"1rem", flexDirection:"column", textAlign:"start"}}>
              <h4 style={{fontSize:"1.5rem"}}> <b>Transcribe and translate audio </b> </h4>
              <p style={{fontSize:"1.2rem"}}>Create high-quality transcriptions and translations with the OpenAI Whisper model—now in preview in Azure OpenAI Service and Azure AI Speech.</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={5}>
        <Item  style={{borderRadius:"1rem"}} >
            <div style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/featured-news-card3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=833&hei=358&qlt=85&fit=constrain")',
  backgroundSize: '100% 25vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"25vh", borderRadius:"0.7rem"}}>

             

            </div>
            <div style={{display:"flex", padding:"1rem", flexDirection:"column", textAlign:"start"}}>
              <h4 style={{fontSize:"1.5rem"}}> <b>Watch the Cloud Cultures series</b> </h4>
              <p style={{fontSize:"1.2rem"}}>Discover how people around the world are using Azure to innovate—and how their local work is changing lives on a global scale.</p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
</div>




<div style={{width:"100%",height:"100vh",  backgroundColor:"#F4FAFD"}}> 



</div>


<div>


  <p style={{display:"flex", textAlign:"start", paddingLeft:"9rem"}}>PRODUCTS AND SERVICES</p>
  <p style={{display:"flex", fontSize:"2.2rem", color:"#040D12", margin:"0rem", textAlign:"start", paddingLeft:"9rem"}}>Explore tools for bringing your vision to life</p>

  
<BasicTabss/>



<div>

</div>







  


</div>
















<div>  
<div style={{width:'100%', height:"1000px", padding:"4rem 0rem", backgroundColor:"#F7F7F7"}}>



<div style={{marginBottom:"5rem"}}>
<p style={{}}>RESOURCES BY ROLE</p>
<p style={{fontSize:"2rem", margin:"0rem"}}>Transform the way you work</p>
</div>


<div>






</div>



<div style={{
    backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-Hero-Oct?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=984&qlt=95&fmt=png-alpha&fit=constrain")',
  backgroundSize: '100% 90vh',
  backgroundRepeat: 'no-repeat',
  width:"100%",  minHeight:"100vh",
  
}}>





<BasicTwo/>



</div>

</div>
</div>





























<div>


<div  style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Regions-banner-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=983&qlt=95&fmt=png-alpha&fit=constrain")',
  backgroundSize: '100% 50vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"50vh",
}}>

<div className='text' style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column"}}>
<p style={{color:"#fff",fontSize:"3rem", margin:"0rem"}}>Azure global infrastructure</p>
<p style={{color:"#fff", fontSize:"1.5rem"}}>Go beyond the limits of on-premises datacenters with more regions than any other provider.</p>
<button style={{color:"#FFF", padding:"1rem 2rem",  fontSize:"1rem", borderRadius:"0.5rem", backgroundColor:"#61A3BA", border:"none"}}>Explore the globe</button>
</div>

</div>

<div style={{
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-DataCard-Background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=11600&hei=560&qlt=85&fit=constrain")',
  backgroundSize: '100% 50vh',
  backgroundRepeat: 'no-repeat',
  width:"100%", height:"60vh",
  margin:"0rem"
}}>



<div style={{padding:"3rem", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>

<p style={{fontSize:"2.6rem", margin:"0.3rem", marginBottom:"2rem", color:'#fff'}}>
Get more value from your cloud investments
</p>



<div style={{display:"flex",gap:"20px", width:"70%", alignItems:"center", justifyContent:"center" , fontSize:"1.1rem", padding:'6rem', color:"#fff", borderRadius:"3rem", backdropFilter: "blur(7rem)" }}>

  <div style={{display:"flex"}}>
  <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.66669 4.61948C5.56212 4.61948 4.66669 5.51491 4.66669 6.61948V49.9528H10V42.6195C10 40.7785 11.4924 39.2861 13.3334 39.2861H30.6667C32.5076 39.2861 34 40.7785 34 42.6195V49.9528H39.3334V26.6195C39.3334 25.5149 38.4379 24.6195 37.3334 24.6195H32C30.8955 24.6195 30 23.724 30 22.6195V6.61948C30 5.51491 29.1046 4.61948 28 4.61948H6.66669ZM14 43.2861V49.9528H20V43.2861H14ZM24 43.2861V49.9528H30V43.2861H24ZM41.3334 53.9528H2.66669C1.56212 53.9528 0.666687 53.0574 0.666687 51.9528V6.61948C0.666687 3.30577 3.35298 0.619476 6.66669 0.619476H28C31.3137 0.619476 34 3.30577 34 6.61948V20.6195H37.3334C40.6471 20.6195 43.3334 23.3058 43.3334 26.6195V51.9528C43.3334 53.0574 42.4379 53.9528 41.3334 53.9528ZM10 12.6195C10 11.1467 11.1939 9.95281 12.6667 9.95281C14.1394 9.95281 15.3334 11.1467 15.3334 12.6195C15.3334 14.0922 14.1394 15.2861 12.6667 15.2861C11.1939 15.2861 10 14.0922 10 12.6195ZM12.6667 28.6195C11.1939 28.6195 10 29.8134 10 31.2861C10 32.7589 11.1939 33.9528 12.6667 33.9528C14.1394 33.9528 15.3334 32.7589 15.3334 31.2861C15.3334 29.8134 14.1394 28.6195 12.6667 28.6195ZM12.6667 19.2861C11.1939 19.2861 10 20.48 10 21.9528C10 23.4256 11.1939 24.6195 12.6667 24.6195C14.1394 24.6195 15.3334 23.4256 15.3334 21.9528C15.3334 20.48 14.1394 19.2861 12.6667 19.2861ZM22 9.95281C20.5273 9.95281 19.3334 11.1467 19.3334 12.6195C19.3334 14.0922 20.5273 15.2861 22 15.2861C23.4728 15.2861 24.6667 14.0922 24.6667 12.6195C24.6667 11.1467 23.4728 9.95281 22 9.95281ZM22 28.6195C20.5273 28.6195 19.3334 29.8134 19.3334 31.2861C19.3334 32.7589 20.5273 33.9528 22 33.9528C23.4728 33.9528 24.6667 32.7589 24.6667 31.2861C24.6667 29.8134 23.4728 28.6195 22 28.6195ZM31.3334 28.6195C29.8606 28.6195 28.6667 29.8134 28.6667 31.2861C28.6667 32.7589 29.8606 33.9528 31.3334 33.9528C32.8061 33.9528 34 32.7589 34 31.2861C34 29.8134 32.8061 28.6195 31.3334 28.6195ZM22 19.2861C20.5273 19.2861 19.3334 20.48 19.3334 21.9528C19.3334 23.4256 20.5273 24.6195 22 24.6195C23.4728 24.6195 24.6667 23.4256 24.6667 21.9528C24.6667 20.48 23.4728 19.2861 22 19.2861Z" fill="#F4FAFD"/>
  </svg>
 <p>16%: average savings of direct infrastructure-related costs with Azure1</p>
  </div>

  <div style={{display:"flex"}}>
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.6667 6.23281C14.6667 2.9191 17.353 0.232819 20.6667 0.232819H27.3333C30.647 0.232819 33.3333 2.91911 33.3333 6.23282V10.9528H42C45.3137 10.9528 48 13.6391 48 16.9528V46.2861C48 47.3907 47.1046 48.2861 46 48.2861H2C0.895431 48.2861 0 47.3907 0 46.2861V24.9528C0 21.6391 2.68629 18.9528 6 18.9528H14.6667V6.23281ZM18.6667 44.2861H29.3333V6.23282C29.3333 5.12825 28.4379 4.23282 27.3333 4.23282H20.6667C19.5621 4.23282 18.6667 5.12825 18.6667 6.23281V44.2861ZM14.6667 22.9528H6C4.89543 22.9528 4 23.8482 4 24.9528V44.2861H14.6667V22.9528ZM33.3333 44.2861H44V16.9528C44 15.8482 43.1046 14.9528 42 14.9528H33.3333V44.2861Z" fill="#F4FAFD"/>
  </svg>
  <p>37%: average three-year cost savings when you run equivalent workloads on Azure2.</p>
  </div>

  <div style={{display:"flex"}}>
  <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M45.6667 4.28613C43.4575 4.28613 41.6667 6.07699 41.6667 8.28613C41.6667 10.4953 43.4575 12.2861 45.6667 12.2861C47.8758 12.2861 49.6667 10.4953 49.6667 8.28613C49.6667 6.07699 47.8758 4.28613 45.6667 4.28613ZM37.6667 8.28613C37.6667 3.86785 41.2484 0.286133 45.6667 0.286133C50.0849 0.286133 53.6667 3.86785 53.6667 8.28613C53.6667 12.7044 50.0849 16.2861 45.6667 16.2861C45.2352 16.2861 44.8118 16.252 44.3989 16.1862L38.9639 25.142C39.8284 26.4197 40.3333 27.9606 40.3333 29.6195C40.3333 34.0377 36.7516 37.6195 32.3333 37.6195C29.9257 37.6195 27.7665 36.5559 26.2999 34.8729L16.3222 39.8609C16.3296 40.0017 16.3333 40.1435 16.3333 40.2861C16.3333 44.7044 12.7516 48.2861 8.33333 48.2861C3.91505 48.2861 0.333332 44.7044 0.333332 40.2861C0.333332 35.8679 3.91505 32.2861 8.33333 32.2861C11.1764 32.2861 13.6731 33.7692 15.092 36.004L24.5093 31.2961C24.394 30.7554 24.3333 30.1945 24.3333 29.6195C24.3333 25.2012 27.9151 21.6195 32.3333 21.6195C33.6194 21.6195 34.8346 21.9229 35.9112 22.4622L40.7054 14.5624C38.8543 13.0971 37.6667 10.8303 37.6667 8.28613ZM32.3333 25.6195C30.1242 25.6195 28.3333 27.4103 28.3333 29.6195C28.3333 31.8286 30.1242 33.6195 32.3333 33.6195C34.5425 33.6195 36.3333 31.8286 36.3333 29.6195C36.3333 27.4103 34.5425 25.6195 32.3333 25.6195ZM8.33333 36.2861C6.12419 36.2861 4.33333 38.077 4.33333 40.2861C4.33333 42.4953 6.12419 44.2861 8.33333 44.2861C10.5425 44.2861 12.3333 42.4953 12.3333 40.2861C12.3333 38.077 10.5425 36.2861 8.33333 36.2861Z" fill="#F4FAFD"/>
  </svg>
  <p>54%: potential total cost of ownership savings on Azure versus running on-premises3.</p>
  </div>

</div>

</div>




</div>

</div>










<div>

<div   className='slidershow middle' style={{}}>

<div className='slides'>

<div className='slide'>
  




  
  


</div>


</div>


</div>


</div>







<slide/>









<div className='bgimgbox'>


   <div className='pnext'>Take the next step</div>


  <div className='cardbox'>


  <div className='nextcard'>
    
    
     
    <div className="cardcontant">
    <div className='icon'><KeyboardIcon  sx={{ fontSize: 40 }}  /></div>
     <p className='p1'>Start building on Azure free</p>
     <p>Get free services and a USD 200 credit to explore Azure for up to 30 days.</p>
     <a>Try Azure for free</a>
    </div>
  

  </div>


  <div className='nextcard'>
    <div className="cardcontant">
    <div className='icon'><PersonIcon sx={{ fontSize: 40 }} /></div>
     <p className='p1'>Connect with a sales specialist</p>
     <p>Chat with or call a sales specialist for personalized guidance.</p>
     <a>Get in Touch</a>
    </div>
  

  </div>




  <div className='nextcard'>
    <div className="cardcontant">
    <div className='icon'><SchoolIcon sx={{ fontSize: 40 }} /></div>
     <p className='p1' >New to Azure? Learn at your own pace</p>
     <p>Learn cloud computing basics with self-paced modules on Microsoft Learn.</p>
     <a>Get Started</a>
    </div>
  

  </div>



  </div>



</div>


































    </div>


 



  );
}
