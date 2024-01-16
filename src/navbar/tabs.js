import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import the Button component

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleButtonClick = (newValue) => {
    setValue(newValue);
  };

  return (

    <div style={{maxwidth:"80%"}}>

    <div >
    <Button variant="contained"   onClick={() => handleButtonClick(0)} style={{buttonStyle, }}>
        Item One
      </Button>
      <Button variant="contained" onClick={() => handleButtonClick(1)} style={{buttonStyle, zIndex:2}}>
        Item Two
      </Button>
      <Button variant="contained" onClick={() => handleButtonClick(2)} style={{buttonStyle, zIndex:2}}>
        Item Three
      </Button>

    </div>



  
    <Box sx={{ width: '100%' }}>


      <Box></Box>

      <CustomTabPanel value={value} index={0}>
      <Box sx={{  padding:"4rem", display: 'flex', flexGrow: 0, alignItems:"flex-start",justifyContent:"" }}>

      <Grid  spacing={4}>

      <Grid item xs={4}>
          <Item>
            <div style={{width:"500px", height:"700px"}}>

            </div>
          </Item>
        </Grid>

      </Grid>

      <Grid container spacing={5}>

        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="35" height="35" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1246 4.77446C10.264 4.36144 10.6513 4.08337 11.0872 4.08337H17.4697L10.8451 23.7117C10.7057 24.1248 10.3184 24.4028 9.88246 24.4028H4.9152C4.22014 24.4028 3.73031 23.7205 3.95258 23.062L10.1246 4.77446Z" fill="url(#paint0_linear_149_62402)"/>
<path d="M20.3279 17.291H10.2692C9.84658 17.291 9.64252 17.8087 9.95149 18.0971L16.4149 24.1296C16.603 24.3052 16.8508 24.4028 17.1081 24.4028H22.8035L20.3279 17.291Z" fill="#0078D4"/>
<path d="M17.4696 4.08337H10.3578L3.5 24.4028H10.6118L12.072 20.0762L16.7076 24.4028H22.8035L20.3279 17.291H13.012L17.4696 4.08337Z" fill="url(#paint1_linear_149_62402)"/>
<path d="M19.2269 4.77446C19.0875 4.36144 18.7002 4.08337 18.2643 4.08337H11.1199H11.1525C11.5884 4.08337 11.9757 4.36144 12.1151 4.77446L18.2871 23.062C18.5094 23.7205 18.0196 24.4028 17.3245 24.4028H17.2157H24.4363C25.1314 24.4028 25.6212 23.7205 25.3989 23.062L19.2269 4.77446Z" fill="url(#paint2_linear_149_62402)"/>
<defs>
<linearGradient id="paint0_linear_149_62402" x1="11.0433" y1="4.7867" x2="4.41619" y2="24.3648" gradientUnits="userSpaceOnUse">
<stop stop-color="#114A8B"/>
<stop offset="1" stop-color="#0669BC"/>
</linearGradient>
<linearGradient id="paint1_linear_149_62402" x1="16.3445" y1="17.2964" x2="14.7732" y2="17.8324" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.3"/>
<stop offset="0.0711768" stop-opacity="0.2"/>
<stop offset="0.321031" stop-opacity="0.1"/>
<stop offset="0.623053" stop-opacity="0.05"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_149_62402" x1="15.2453" y1="4.78673" x2="22.5198" y2="24.1677" gradientUnits="userSpaceOnUse">
<stop stop-color="#3CCBF4"/>
<stop offset="1" stop-color="#2892DF"/>
</linearGradient>
</defs>
</svg>
          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Azure AI services</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Create intelligent apps with APIs and customizable models.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>
        


        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0359 0.583374L2.33325 7.27431V18.1416V18.8551V20.6475L14.0359 27.4167L25.7385 20.7258V7.30911L14.0359 0.583374ZM23.5807 19.3249L14.0359 24.8413L4.49106 19.3859V10.4501V8.62293V8.59683L14.0359 3.08051L23.5807 8.61423V19.3249Z" fill="#0078D1"/>
<path d="M18.6462 14.0001C18.4548 14.0001 18.2721 14.0175 18.098 14.0524C16.7233 12.2774 14.696 11.0941 12.4686 10.7808L22.1178 5.20362L19.873 3.91589L11.0504 9.01458C10.5979 8.68394 10.0324 8.48383 9.42333 8.48383C7.90069 8.48383 6.66517 9.71934 6.66517 11.242C6.66517 12.7646 7.90069 14.0001 9.42333 14.0001C10.3021 14.0001 11.0939 13.5825 11.5985 12.9386C13.4344 13.0431 15.1398 13.9305 16.2709 15.3488C16.0273 15.7577 15.888 16.2363 15.888 16.7496C15.888 16.8453 15.8967 16.9497 15.9054 17.0454L6.00391 22.7706L8.24002 24.0583L17.0191 18.977C17.4716 19.3076 18.0371 19.5078 18.6462 19.5078C20.1688 19.5078 21.4044 18.2723 21.4044 16.7496C21.4044 15.2357 20.1688 14.0001 18.6462 14.0001Z" fill="#50E6FF"/>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Azure Synapse Analytics</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Accelerate time to insight across enterprise data warehouses and big data systems.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>
        
        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.54 11.1222C22.4745 9.01443 21.5801 7.01764 20.051 5.56545C18.5219 4.11327 16.4817 3.32297 14.3733 3.36619C12.6681 3.34596 10.9989 3.85785 9.59822 4.8306C8.19749 5.80336 7.13486 7.1886 6.55822 8.79352C4.76251 9.03631 3.11334 9.91485 1.91004 11.2697C0.706744 12.6246 0.0290651 14.3659 0 16.1777C0.0537714 18.2157 0.914218 20.1491 2.39236 21.5531C3.87051 22.9572 5.84549 23.7172 7.88356 23.6662H21.4978C23.1843 23.6241 24.7924 22.945 25.9986 21.7656C27.2049 20.5862 27.9199 18.9938 28 17.3086C27.9688 15.7982 27.4031 14.3478 26.4034 13.2151C25.4037 12.0824 24.0348 11.3408 22.54 11.1222Z" fill="url(#paint0_linear_149_62179)"/>
<path d="M20.0666 17.7333V12.4444H18.6666V18.8688H22.4933V17.7333H20.0666ZM8.95994 15.1355C8.67082 15.0194 8.40279 14.8565 8.1666 14.6533C8.10393 14.5869 8.05514 14.5087 8.02309 14.4232C7.99103 14.3377 7.97636 14.2467 7.97994 14.1555C7.97547 14.0642 7.9946 13.9733 8.03547 13.8916C8.07633 13.8099 8.13757 13.74 8.21327 13.6888C8.40474 13.5568 8.63426 13.4912 8.8666 13.5022C9.42063 13.4773 9.9674 13.6358 10.4222 13.9533V12.6155C9.92517 12.4306 9.39647 12.346 8.8666 12.3666C8.25633 12.3343 7.6547 12.5219 7.17105 12.8955C6.96027 13.058 6.79111 13.2683 6.67752 13.509C6.56394 13.7497 6.50916 14.0139 6.51771 14.28C6.51771 15.0733 7.01549 15.6955 8.07327 16.1622C8.41663 16.3083 8.74057 16.4964 9.03771 16.7222C9.11052 16.7831 9.16913 16.8593 9.20943 16.9453C9.24973 17.0312 9.27076 17.125 9.27105 17.22C9.27096 17.3143 9.24833 17.4073 9.20504 17.4912C9.16175 17.5751 9.09905 17.6474 9.02216 17.7022C8.8106 17.8265 8.56721 17.886 8.32216 17.8733C7.69648 17.8681 7.09397 17.636 6.6266 17.22V18.6666C7.14038 18.9313 7.71344 19.0598 8.29105 19.04C8.94309 19.079 9.5894 18.8982 10.1266 18.5266C10.3164 18.3469 10.4616 18.1253 10.5507 17.8796C10.6399 17.6338 10.6704 17.3707 10.6399 17.1111C10.6477 16.7128 10.5094 16.3254 10.251 16.0222C9.88745 15.6395 9.4476 15.3375 8.95994 15.1355ZM17.111 17.6088C17.4488 17.0676 17.6279 16.4424 17.6279 15.8044C17.6279 15.1664 17.4488 14.5412 17.111 14C16.8683 13.5141 16.4902 13.1089 16.0222 12.8333C15.548 12.5645 15.0116 12.4251 14.4666 12.4288C13.8791 12.4161 13.299 12.5611 12.7866 12.8488C12.3062 13.1166 11.9122 13.5159 11.651 14C11.376 14.5501 11.2372 15.1583 11.2466 15.7733C11.2496 16.3136 11.3774 16.846 11.6199 17.3288C11.8578 17.809 12.2309 18.2091 12.6933 18.48C13.163 18.7668 13.6988 18.9275 14.2488 18.9466L15.5866 20.5022H17.4688L15.5555 18.7911C16.1998 18.5978 16.7523 18.1779 17.111 17.6088ZM15.5555 17.22C15.4138 17.3957 15.2333 17.5364 15.0282 17.6308C14.8231 17.7253 14.599 17.771 14.3733 17.7644C14.1458 17.7723 13.9198 17.7255 13.7141 17.6281C13.5084 17.5307 13.3291 17.3854 13.191 17.2044C12.8626 16.755 12.7029 16.2043 12.7399 15.6488C12.7037 15.0935 12.8633 14.5431 13.191 14.0933C13.3375 13.9128 13.5224 13.7674 13.7324 13.6678C13.9424 13.5682 14.172 13.5169 14.4044 13.5177C14.6316 13.5078 14.8576 13.5553 15.0615 13.6559C15.2654 13.7565 15.4407 13.907 15.571 14.0933C15.8776 14.5518 16.0252 15.0983 15.991 15.6488C16.0455 16.2084 15.8903 16.7683 15.5555 17.22Z" fill="#F2F2F2"/>
<defs>
<linearGradient id="paint0_linear_149_62179" x1="15.4124" y1="24.8002" x2="11.6916" y2="3.70685" gradientUnits="userSpaceOnUse">
<stop offset="0.15" stop-color="#0078D4"/>
<stop offset="0.8" stop-color="#5EA0EF"/>
<stop offset="1" stop-color="#83B9F9"/>
</linearGradient>
</defs>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Azure SQL </p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Migrate and modernize your SQL workloads.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1246 4.77446C10.264 4.36144 10.6513 4.08337 11.0872 4.08337H17.4697L10.8451 23.7117C10.7057 24.1248 10.3184 24.4028 9.88246 24.4028H4.9152C4.22014 24.4028 3.73031 23.7205 3.95258 23.062L10.1246 4.77446Z" fill="url(#paint0_linear_149_62402)"/>
<path d="M20.3279 17.291H10.2692C9.84658 17.291 9.64252 17.8087 9.95149 18.0971L16.4149 24.1296C16.603 24.3052 16.8508 24.4028 17.1081 24.4028H22.8035L20.3279 17.291Z" fill="#0078D4"/>
<path d="M17.4696 4.08337H10.3578L3.5 24.4028H10.6118L12.072 20.0762L16.7076 24.4028H22.8035L20.3279 17.291H13.012L17.4696 4.08337Z" fill="url(#paint1_linear_149_62402)"/>
<path d="M19.2269 4.77446C19.0875 4.36144 18.7002 4.08337 18.2643 4.08337H11.1199H11.1525C11.5884 4.08337 11.9757 4.36144 12.1151 4.77446L18.2871 23.062C18.5094 23.7205 18.0196 24.4028 17.3245 24.4028H17.2157H24.4363C25.1314 24.4028 25.6212 23.7205 25.3989 23.062L19.2269 4.77446Z" fill="url(#paint2_linear_149_62402)"/>
<defs>
<linearGradient id="paint0_linear_149_62402" x1="11.0433" y1="4.7867" x2="4.41619" y2="24.3648" gradientUnits="userSpaceOnUse">
<stop stop-color="#114A8B"/>
<stop offset="1" stop-color="#0669BC"/>
</linearGradient>
<linearGradient id="paint1_linear_149_62402" x1="16.3445" y1="17.2964" x2="14.7732" y2="17.8324" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.3"/>
<stop offset="0.0711768" stop-opacity="0.2"/>
<stop offset="0.321031" stop-opacity="0.1"/>
<stop offset="0.623053" stop-opacity="0.05"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_149_62402" x1="15.2453" y1="4.78673" x2="22.5198" y2="24.1677" gradientUnits="userSpaceOnUse">
<stop stop-color="#3CCBF4"/>
<stop offset="1" stop-color="#2892DF"/>
</linearGradient>
</defs>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Azure AI Document Intelligence</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Accelerate information extraction from documents.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.15" filter="url(#filter0_d_149_62388)">
<path d="M25.5554 5.07658C24.2633 5.06578 22.9845 4.81536 21.7838 4.33799C20.2856 3.81416 18.9499 2.43646 18.0279 1.92835C17.1576 1.39033 16.1487 1.119 15.1259 1.14784C14.0534 1.11813 12.9939 1.38844 12.0667 1.92835C11.1448 2.45218 9.71997 3.70415 8.22181 4.23322C7.01893 4.70873 5.73835 4.95735 4.44493 4.96657C4.13063 4.96657 3.86871 4.96657 3.65394 4.96657C3.46729 4.96656 3.28822 5.04037 3.15575 5.17186C3.02328 5.30335 2.94816 5.48187 2.94678 5.66852V12.0331C2.95629 12.9255 3.11202 13.8103 3.40775 14.6523C3.69632 15.7248 4.15622 16.7436 4.7697 17.6695C5.41172 18.792 6.19324 19.8287 7.09555 20.7549C8.32467 22.0631 9.6636 23.2635 11.0976 24.3432C11.9986 25.0137 15.1521 26.9256 15.1259 26.8523C15.1259 26.9256 18.1431 25.0137 19.0441 24.3432C20.4337 23.2992 21.7275 22.1334 22.91 20.8597C23.8131 19.9341 24.5947 18.8973 25.2359 17.7743C25.8465 16.8494 26.3046 15.8324 26.5926 14.7622C26.8879 13.9201 27.0437 13.0354 27.0536 12.1431V5.75756C27.0543 5.66519 27.0366 5.57361 27.0016 5.48813C26.9665 5.40265 26.9148 5.32498 26.8495 5.25966C26.7842 5.19434 26.7065 5.14266 26.621 5.10763C26.5356 5.0726 26.444 5.05494 26.3516 5.05564C26.1369 5.05564 25.8697 5.06087 25.5554 5.07658Z" fill="#1F1D20"/>
</g>
<path d="M27.2834 14.0767C27.4764 13.4253 27.5714 12.7489 27.565 12.0695V5.41327C27.565 5.31668 27.5459 5.22105 27.5087 5.13188C27.4716 5.04271 27.4173 4.96177 27.3487 4.89371C27.2802 4.82566 27.1988 4.77183 27.1094 4.73533C27.02 4.69884 26.9242 4.6804 26.8276 4.68108C26.6024 4.68108 26.3156 4.68108 26.0033 4.68108C24.6545 4.67217 23.3192 4.4117 22.0659 3.91305C20.5042 3.36518 19.1166 1.93151 18.154 1.40413C17.2457 0.844317 16.1946 0.559772 15.128 0.584906L12.189 15.8278L27.2834 14.0767Z" fill="#0883D9"/>
<path d="M7.92935 3.84637C6.67636 4.33999 5.34363 4.60028 3.997 4.6144C3.6693 4.6144 3.39281 4.6144 3.16752 4.6144C2.97333 4.6144 2.78706 4.69154 2.64975 4.82885C2.51244 4.96616 2.4353 5.1524 2.4353 5.34659V12.0029C2.42927 12.7214 2.53462 13.4364 2.74763 14.1226H15.1283V0.625733C14.0103 0.603441 12.9074 0.886715 11.9385 1.44499C10.9707 1.97237 9.49101 3.29339 7.92935 3.84637Z" fill="#33BFF0"/>
<path d="M15.1282 27.4148C15.1282 27.4865 18.2771 25.4947 19.2243 24.7984C20.6736 23.7077 22.0238 22.4912 23.2591 21.1631C24.1991 20.1979 25.0128 19.1175 25.6809 17.9475C26.3219 16.9839 26.801 15.922 27.0992 14.8037C27.176 14.5272 27.2426 14.2917 27.2989 14.0767H15.1435L15.1282 27.4148Z" fill="#0F5094"/>
<path d="M2.74731 14.0767C2.7934 14.261 2.84976 14.4607 2.91632 14.6911C3.21526 15.8082 3.69245 16.8698 4.32951 17.8349C4.99893 19.0068 5.81444 20.089 6.75648 21.0555C8.03781 22.4203 9.43394 23.6725 10.9295 24.7984C11.8665 25.4947 15.1536 27.4865 15.128 27.4148V14.1023L2.74731 14.0767Z" fill="#0370C8"/>
<defs>
<filter id="filter0_d_149_62388" x="0.613444" y="1.14563" width="28.7734" height="30.3754" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.33333"/>
<feGaussianBlur stdDeviation="1.16667"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_149_62388"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_149_62388" result="shape"/>
</filter>
</defs>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Microsoft Defender for Cloud</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Protect multicloud and hybrid environments with integrated security.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>
          

        <Grid item xs={3}>
          <Item style={{padding:'1.7rem'}}>
          
          <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0698 3.30078L12.8596 4.30528V7.15645L14.0698 6.15196L22.1241 12.8389L19.4082 22.0427H8.5578L8.48839 21.7936H6.21143L6.89232 24.236H21.0482L24.6369 12.0738L14.0698 3.30078Z" fill="#DC5900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.99879 12.8526L12.8613 7.15538V4.3042L3.50439 12.0727L6.21317 21.7925H8.49013L5.99879 12.8526Z" fill="#E58C58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0728 1.3125C16.2752 1.3125 18.0607 3.09793 18.0607 5.30037C18.0607 7.50281 16.2752 9.28773 14.0728 9.28773C11.8704 9.28773 10.0854 7.5023 10.0854 5.30037C10.0849 3.09793 11.8704 1.3125 14.0728 1.3125Z" fill="#FF8B00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6348 1.35688C14.5715 1.3477 14.5087 1.33749 14.4449 1.33187C14.3224 1.32013 14.1984 1.31299 14.0728 1.31299C13.935 1.31299 13.7992 1.31962 13.665 1.3334C11.654 1.53757 10.0854 3.23572 10.0854 5.30086C10.0854 5.48206 10.1018 5.65968 10.1253 5.83424C10.1309 5.87712 10.1375 5.91948 10.1447 5.96236C10.1727 6.13028 10.2079 6.29515 10.2564 6.45542C10.4805 7.19705 10.9154 7.84579 11.4906 8.33579C11.5764 8.40929 11.6667 8.47819 11.7586 8.54404C11.779 8.55833 11.7979 8.57466 11.8188 8.58844C12.048 8.74667 12.295 8.87989 12.5553 8.98759C12.5962 9.00392 12.638 9.01719 12.6794 9.03301C12.7677 9.06619 12.8565 9.09732 12.9473 9.12438C12.9647 9.12948 12.9826 9.13305 13.0004 9.13816L14.7624 1.37628C14.72 1.36913 14.6771 1.36301 14.6348 1.35688Z" fill="#FAB05E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4443 1.33203C14.5081 1.33816 14.5709 1.34836 14.6342 1.35704C14.5709 1.34836 14.5081 1.33816 14.4443 1.33203Z" fill="#FF8B00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0728 1.3125C14.1983 1.3125 14.3223 1.32016 14.4448 1.33139C14.3223 1.31965 14.1983 1.3125 14.0728 1.3125Z" fill="#FAB05E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7639 1.37429C14.7215 1.36663 14.6786 1.36357 14.6357 1.35693C14.6786 1.36357 14.721 1.36918 14.7633 1.37633L14.7639 1.37429Z" fill="#FAB05E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.28621 18.8579C10.4887 18.8579 12.2741 20.6433 12.2741 22.8453C12.2741 25.0477 10.4887 26.8331 8.28621 26.8331C6.08377 26.8331 4.29834 25.0477 4.29834 22.8453C4.29834 20.6433 6.08377 18.8579 8.28621 18.8579Z" fill="#FF8B00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.40033 20.0987C5.37327 20.1273 5.34724 20.1564 5.32121 20.1855C5.25792 20.2559 5.19718 20.3284 5.13899 20.4029C5.11194 20.4376 5.08591 20.4723 5.06039 20.508C5.00731 20.581 4.95678 20.6555 4.9088 20.7326C4.88379 20.7719 4.85929 20.8117 4.83581 20.8526C4.79191 20.9286 4.75108 21.0067 4.71178 21.0858C4.68983 21.1297 4.66788 21.1731 4.64797 21.218C4.61224 21.2976 4.5806 21.3793 4.54997 21.461C4.53262 21.5085 4.51425 21.5549 4.49842 21.6024C4.47086 21.6866 4.4484 21.7728 4.42594 21.8596C4.41369 21.9076 4.39991 21.9551 4.38919 22.0036C4.36878 22.098 4.355 22.1939 4.34121 22.2904C4.33509 22.3333 4.32641 22.3751 4.32182 22.4185C4.30651 22.5589 4.29834 22.7018 4.29834 22.8457C4.29834 25.0482 6.08377 26.8336 8.28621 26.8336C8.41484 26.8336 8.54193 26.8265 8.66749 26.8142C8.71904 26.8091 8.76957 26.8004 8.82011 26.7938C8.87931 26.7856 8.93903 26.777 8.99773 26.7662L10.6208 19.6184C10.6112 19.6112 10.6025 19.6041 10.5928 19.5969C10.4437 19.4913 10.2875 19.3943 10.1237 19.3096C10.1023 19.2978 10.0798 19.2887 10.0579 19.2774C9.90219 19.1998 9.7414 19.132 9.57501 19.0753C9.55561 19.0687 9.53724 19.0605 9.51784 19.0544C9.34226 18.9972 9.16055 18.9543 8.97476 18.9217C8.93903 18.9155 8.90228 18.9104 8.86655 18.9053C8.67617 18.8773 8.48374 18.8589 8.28621 18.8589C8.10042 18.8589 7.91871 18.8752 7.73956 18.9002C6.92851 19.0115 6.19708 19.3657 5.61776 19.8884C5.54273 19.9563 5.46974 20.0257 5.40033 20.0987Z" fill="#FAB05E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.856 18.8579C22.0585 18.8579 23.8439 20.6433 23.8439 22.8453C23.8439 25.0477 22.0585 26.8326 19.856 26.8326C17.6536 26.8326 15.8687 25.0472 15.8687 22.8453C15.8687 20.6433 17.6536 18.8579 19.856 18.8579Z" fill="#FF8B00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8458 8.09131C25.0482 8.09131 26.8331 9.87674 26.8331 12.0787C26.8331 14.2811 25.0477 16.066 22.8458 16.066C20.6433 16.066 18.8579 14.2806 18.8579 12.0787C18.8579 9.87674 20.6433 8.09131 22.8458 8.09131Z" fill="#FF8B00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.30037 8.09131C7.50281 8.09131 9.28773 9.87674 9.28773 12.0787C9.28773 14.2811 7.5023 16.066 5.30037 16.066C3.09793 16.0665 1.3125 14.2816 1.3125 12.0792C1.3125 9.87674 3.09793 8.09131 5.30037 8.09131Z" fill="#FAB05E"/>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Microsoft Fabric</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Bring data and analytics services together on an AI-powered platform.</p>
            
            <p><u>Explore the product</u></p>
            </div>
          </Item>
        </Grid>


      </Grid>
    </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Content for Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Content for Item Three
      </CustomTabPanel>
    </Box>
    </div>
  );
}
