import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import the Button component

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Repeat } from '@mui/icons-material';

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

    <div style={{}}>


   <div style={{display:"flex",alignItems:"flex-start",  paddingLeft:"8rem", margin:"2rem 1rem "}}>
   <Button variant="contained"   onClick={() => handleButtonClick(0)} style={{buttonStyle, zIndex:2,  textTransform:"capitalize",  padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        Featured
      </Button>
      <div style={{marginLeft:"1rem" }} >
            <Button variant="contained" onClick={() => handleButtonClick(1)} style={{buttonStyle, zIndex:2, textTransform:"capitalize", padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        Al + machine learning
      </Button>
      </div>

     <div style={{marginLeft:"1rem" }}>
     <Button variant="contained" onClick={() => handleButtonClick(2)} style={{buttonStyle, zIndex:2, textTransform:"capitalize", padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        Compute
      </Button>

     </div>

     <div style={{marginLeft:"1rem" }}>
     <Button variant="contained" onClick={() => handleButtonClick(3)} style={{buttonStyle, zIndex:2, textTransform:"capitalize", padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        Containers
      </Button>

     </div>
  
   <div style={{marginLeft:"1rem" }}>
   <Button variant="contained" onClick={() => handleButtonClick(4)} style={{buttonStyle, zIndex:2, textTransform:"capitalize", padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        Hybrid + multicloud
      </Button>

   </div>

   <div style={{marginLeft:"1rem" }}>
   <Button variant="contained" onClick={() => handleButtonClick(5)} style={{buttonStyle, zIndex:2, textTransform:"capitalize", padding:"0.8rem 1.9rem", borderRadius:"2rem" }}>
        IoT
      </Button>

   </div>


   </div>

    <Box >


   <CustomTabPanel value={value} index={0}>

   <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

   <div style={{width:"500px",height:"790px", border:"1px solid #000", 
    backgroundColor:"#000",
     borderRadius:"2rem",
     backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-ai-machinelearning-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fmt=png-alpha&fit=constrain")',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
     }}>
    

    <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>

   


    <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
    <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
    <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
      <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
      <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
    </div>
    </div>

    </div>
    
     
     
    
     
  </div>


  
  <div className='b2' style={{display:"flex", flexDirection:"column"}}>
    
    <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




    <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
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



    </div>












    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
    <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0359 0.583374L2.33325 7.27431V18.1416V18.8551V20.6475L14.0359 27.4167L25.7385 20.7258V7.30911L14.0359 0.583374ZM23.5807 19.3249L14.0359 24.8413L4.49106 19.3859V10.4501V8.62293V8.59683L14.0359 3.08051L23.5807 8.61423V19.3249Z" fill="#0078D1"/>
<path d="M18.6462 14.0001C18.4548 14.0001 18.2721 14.0175 18.098 14.0524C16.7233 12.2774 14.696 11.0941 12.4686 10.7808L22.1178 5.20362L19.873 3.91589L11.0504 9.01458C10.5979 8.68394 10.0324 8.48383 9.42333 8.48383C7.90069 8.48383 6.66517 9.71934 6.66517 11.242C6.66517 12.7646 7.90069 14.0001 9.42333 14.0001C10.3021 14.0001 11.0939 13.5825 11.5985 12.9386C13.4344 13.0431 15.1398 13.9305 16.2709 15.3488C16.0273 15.7577 15.888 16.2363 15.888 16.7496C15.888 16.8453 15.8967 16.9497 15.9054 17.0454L6.00391 22.7706L8.24002 24.0583L17.0191 18.977C17.4716 19.3076 18.0371 19.5078 18.6462 19.5078C20.1688 19.5078 21.4044 18.2723 21.4044 16.7496C21.4044 15.2357 20.1688 14.0001 18.6462 14.0001Z" fill="#50E6FF"/>
</svg>

          </div>
          
            <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
            <p style={{fontSize:"24px",color:"#17253D"}}>Azure Synapse Analytics</p>
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Accelerate time to insight across enterprise data warehouses and big data systems.</p>
            
            <p><u>Explore the product</u></p>
            </div>
    </div>











    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


                 
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
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4.4rem"}}>Migrate and modernize your SQL workloads.</p>
            
            <p><u>Explore the product</u></p>
            </div>
    </div>


    </div>



    



    <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
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
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Accelerate information extraction from documents.</p>
            
            <p><u>Explore the product</u></p>
            </div>
    </div>












    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
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
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Protect multicloud and hybrid environments with integrated security.</p>
            
            <p><u>Explore the product</u></p>
            </div>
    </div>














    <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
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
            <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"6rem"}}>Bring data and analytics services together on an AI-powered platform.</p>
            
            <p><u>Explore the product</u></p>
            </div>

    </div>
    </div>




   </div>
    
   </div>




 </CustomTabPanel>





 <CustomTabPanel value={value} index={1}>

<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

<div style={{width:"500px",height:"790px", border:"1px solid #000", 
 backgroundColor:"#000",
  borderRadius:"2rem",
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-ai-machinelearning-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fmt=png-alpha&fit=constrain")',
backgroundSize: '100% 100%',
backgroundRepeat: 'no-repeat',
  }}>
 

 <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>




 <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
 <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
 <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
   <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
   <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
 </div>
 </div>

 </div>
 
  
  
 
  
</div>



<div className='b2' style={{display:"flex", flexDirection:"column"}}>
 
 <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




 <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7755 47.0001H5.9764L3 35.9062H45.7519L42.7755 47.0001Z" fill="#198AB3"/>
<path d="M18.6937 1V18.3172L3 35.905L5.9764 46.9989L30.0582 18.3172V1H18.6937Z" fill="url(#paint0_linear_1915_129658)"/>
<path d="M42.7748 46.9979L25.9988 29.6807L33.0339 21.5632L45.7512 35.9041L42.7748 46.9979Z" fill="#32BEDD"/>
<defs>
<linearGradient id="paint0_linear_1915_129658" x1="3" y1="23.9994" x2="30.1123" y2="23.9994" gradientUnits="userSpaceOnUse">
<stop stop-color="#50C7E8"/>
<stop offset="0.25" stop-color="#4CC3E4"/>
<stop offset="0.51" stop-color="#41B6DA"/>
<stop offset="0.77" stop-color="#2FA2C8"/>
<stop offset="1" stop-color="#1989B2"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Machine Learning</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Build, train, and deploy machine learning models.</p>
         
         <p><u>Explore the product</u></p>
         </div>



 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
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
 </div>











 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


              
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7667 0.716826C12.8519 0.712882 10.9573 1.10844 9.20402 1.87821C7.45074 2.64799 5.87733 3.77506 4.58433 5.18739C3.29132 6.59973 2.30717 8.26627 1.69476 10.0805C1.08235 11.8948 0.855148 13.8168 1.02767 15.7239C1.2002 17.6309 1.76866 19.481 2.69673 21.1558C3.6248 22.8307 4.89207 24.2936 6.41754 25.4509C7.94302 26.6083 9.69316 27.4347 11.5561 27.8773C13.4191 28.3199 15.3539 28.369 17.2369 28.0215L16.8309 27.6715L15.6456 26.469C15.5449 26.3673 15.478 26.2371 15.4538 26.096C15.4296 25.955 15.4493 25.8099 15.5103 25.6804L16.2958 24.0159L16.0578 23.4404L14.5925 22.9613L14.3529 22.8913C14.2079 22.8489 14.0806 22.7606 13.99 22.6398C13.8994 22.5189 13.8505 22.3719 13.8505 22.2208V20.5315C13.8508 20.3872 13.8958 20.2466 13.9794 20.129C14.063 20.0114 14.181 19.9227 14.3171 19.875L16.0563 19.2528L16.2943 18.6804L15.5803 17.2897L15.4667 17.0626C15.3993 16.9304 15.3756 16.7802 15.3991 16.6337C15.4226 16.4872 15.492 16.352 15.5974 16.2475L16.7858 15.0715C16.8885 14.9697 17.0203 14.9023 17.163 14.8786C17.3057 14.855 17.4521 14.8761 17.5823 14.9393L19.2529 15.7482L19.8363 15.5288L20.3029 14.1288C20.3371 14.0267 20.3946 13.9341 20.4709 13.8582L20.5565 13.7726C20.6215 13.7078 20.6987 13.6564 20.7835 13.6215C20.8684 13.5865 20.9593 13.5686 21.0511 13.5688H22.7187C22.8593 13.5687 22.9967 13.611 23.1129 13.69C23.2292 13.7691 23.3189 13.8814 23.3705 14.0122L23.9771 15.5677L24.534 15.7233L25.9729 14.9859L26.2 14.8724C26.2963 14.8232 26.403 14.7976 26.5111 14.7977C26.6033 14.7974 26.6947 14.8154 26.7798 14.8507C26.865 14.8859 26.9423 14.9377 27.0074 15.003L27.6545 15.6533L28.1865 16.1899C28.2854 16.2893 28.3521 16.4161 28.3778 16.5539C28.481 15.8697 28.533 15.1786 28.5334 14.4866C28.5338 12.6785 28.178 10.888 27.4863 9.21737C26.7947 7.54676 25.7807 6.02877 24.5023 4.75009C23.2239 3.47141 21.7061 2.45708 20.0357 1.76505C18.3652 1.07301 16.5748 0.716826 14.7667 0.716826V0.716826Z" fill="#0078D4"/>
<path d="M15.6457 26.4691C15.5451 26.3673 15.4781 26.2371 15.4539 26.096C15.4297 25.955 15.4494 25.8099 15.5104 25.6804L16.2959 24.016L16.0579 23.4404L14.5926 22.9613L14.3531 22.8913C14.2081 22.8489 14.0807 22.7607 13.9901 22.6398C13.8996 22.5189 13.8506 22.3719 13.8506 22.2209V20.5315C13.8509 20.3873 13.8959 20.2466 13.9795 20.1291C14.0631 20.0115 14.1811 19.9227 14.3173 19.8751L16.0564 19.2529L16.2944 18.6804L15.5804 17.2897L15.4668 17.0626C15.3994 16.9305 15.3757 16.7803 15.3992 16.6338C15.4227 16.4873 15.4921 16.352 15.5975 16.2475L16.7859 15.0715C16.8887 14.9697 17.0205 14.9024 17.1631 14.8787C17.3058 14.855 17.4523 14.8762 17.5824 14.9393L19.2531 15.7482L19.8364 15.5289L20.3031 14.1289C20.3372 14.0268 20.3947 13.9341 20.4711 13.8582L20.5566 13.7726C20.6216 13.7078 20.6988 13.6565 20.7837 13.6215C20.8685 13.5865 20.9595 13.5686 21.0513 13.5689H22.7188C22.8594 13.5688 22.9968 13.611 23.1131 13.6901C23.2293 13.7691 23.3191 13.8814 23.3706 14.0122L23.9773 15.5677L24.5342 15.7233L25.9731 14.986L26.2002 14.8724C26.2702 14.8319 26.348 14.8068 26.4285 14.7988C26.5089 14.7907 26.5902 14.7999 26.6668 14.8257C26.6668 14.8009 26.6668 14.776 26.6668 14.7511C26.6674 12.3981 25.9703 10.0978 24.6636 8.141C23.3568 6.18422 21.4992 4.65888 19.3256 3.75787C17.1519 2.85685 14.7599 2.62063 12.452 3.07907C10.1441 3.53751 8.02402 4.67002 6.35977 6.3334C4.69553 7.99677 3.5619 10.1163 3.10225 12.424C2.64261 14.7316 2.87758 17.1237 3.77746 19.2978C4.67734 21.4719 6.20171 23.3304 8.1578 24.6381C10.1139 25.9459 12.4138 26.6442 14.7668 26.6449C15.1044 26.6449 15.4373 26.6215 15.7686 26.5935L15.6457 26.4691Z" fill="url(#paint0_linear_241_47259)"/>
<path d="M16.2955 24.0157L16.0575 23.4402L14.5922 22.961L14.3527 22.891C14.2077 22.8487 14.0803 22.7604 13.9897 22.6395C13.8992 22.5186 13.8502 22.3717 13.8502 22.2206V20.5313C13.8505 20.387 13.8955 20.2464 13.9791 20.1288C14.0627 20.0112 14.1807 19.9225 14.3169 19.8748L16.056 19.2526L16.294 18.6802L15.58 17.2895L15.4664 17.0624C15.399 16.9302 15.3753 16.78 15.3988 16.6335C15.4223 16.487 15.4917 16.3517 15.5971 16.2473L16.7855 15.0713C16.8883 14.9695 17.0201 14.9021 17.1627 14.8784C17.3054 14.8547 17.4519 14.8759 17.582 14.939L19.2527 15.7479L19.836 15.5286L20.3027 14.1286C20.3368 14.0265 20.3943 13.9338 20.4707 13.8579L20.5562 13.7724C20.6212 13.7076 20.6984 13.6562 20.7833 13.6212C20.8681 13.5863 20.9591 13.5684 21.0509 13.5686H22.7184C22.859 13.5685 22.9964 13.6107 23.1127 13.6898C23.2289 13.7689 23.3187 13.8811 23.3702 14.0119L23.9769 15.5675L24.4062 15.6888C24.6355 13.7335 24.265 11.7548 23.3439 10.0149C22.4228 8.27497 20.9946 6.85618 19.2486 5.94661C17.5026 5.03705 15.5214 4.6797 13.5677 4.92194C11.614 5.16419 9.7801 5.99458 8.30915 7.30301C6.8382 8.61144 5.79973 10.3361 5.33144 12.2483C4.86315 14.1604 4.98717 16.1698 5.68705 18.0098C6.38693 19.8499 7.6296 21.4338 9.25029 22.5514C10.871 23.669 12.7931 24.2676 14.7618 24.2677C15.2548 24.2641 15.7467 24.2225 16.2333 24.1433L16.2955 24.0157Z" fill="#5EA0EF"/>
<path d="M13.8503 20.5313C13.8505 20.387 13.8956 20.2464 13.9791 20.1288C14.0627 20.0112 14.1808 19.9225 14.3169 19.8748L16.056 19.2526L16.294 18.6801L15.58 17.2895L15.4665 17.0624C15.3991 16.9302 15.3754 16.78 15.3989 16.6335C15.4223 16.487 15.4918 16.3517 15.5971 16.2473L16.7856 15.0713C16.8883 14.9695 17.0201 14.9021 17.1628 14.8784C17.3054 14.8547 17.4519 14.8759 17.582 14.939L19.2527 15.7479L19.836 15.5286L20.3027 14.1286C20.3368 14.0265 20.3944 13.9338 20.4707 13.8579L20.5563 13.7724C20.6213 13.7076 20.6984 13.6562 20.7833 13.6212C20.8682 13.5863 20.9591 13.5684 21.0509 13.5686H21.1271C20.934 12.392 20.4186 11.292 19.6381 10.3907C18.8576 9.48937 17.8426 8.82196 16.7058 8.4626C15.569 8.10323 14.3548 8.06596 13.198 8.35492C12.0413 8.64388 10.9872 9.24777 10.1529 10.0995C9.31865 10.9513 8.73674 12.0176 8.47181 13.1801C8.20689 14.3426 8.26931 15.5558 8.65217 16.6849C9.03502 17.8141 9.72331 18.815 10.6406 19.5766C11.5579 20.3383 12.6684 20.8308 13.8487 20.9995L13.8503 20.5313Z" fill="#005BA1"/>
<path d="M12.6423 14.1753C13.7128 14.1753 14.5805 13.3075 14.5805 12.2371C14.5805 11.1666 13.7128 10.2988 12.6423 10.2988C11.5719 10.2988 10.7041 11.1666 10.7041 12.2371C10.7041 13.3075 11.5719 14.1753 12.6423 14.1753Z" fill="#83B9F9"/>
<path d="M14.767 15.5412C15.242 15.5412 15.6272 15.1561 15.6272 14.681C15.6272 14.2059 15.242 13.8208 14.767 13.8208C14.2919 13.8208 13.9067 14.2059 13.9067 14.681C13.9067 15.1561 14.2919 15.5412 14.767 15.5412Z" fill="#83B9F9"/>
<path d="M29.0002 22.1398V20.4614L28.91 20.3774L27.1989 19.7972L26.7555 18.6414L27.6064 16.8774L27.6966 16.6783L27.1646 16.1432L26.5113 15.4945L26.2873 15.6081L24.6089 16.4683L23.4515 16.1447L22.7204 14.2656H21.0529L20.9673 14.3512L20.3886 16.0623L19.2142 16.5025L17.2729 15.5692L16.0891 16.739L16.2026 16.9598L17.0629 18.6367L16.5837 19.7925L14.5615 20.5252V22.2145L14.8011 22.2845L16.5931 22.8772L17.0737 24.033L16.156 25.979L17.3413 27.1814L17.5669 27.0679L19.2469 26.2076L20.4026 26.6867L21.1384 28.709H22.8169L22.8869 28.4694L23.4795 26.6774L24.6229 26.1967L26.5844 27.1145L27.7713 25.9292L27.6577 25.7036L26.7975 24.0236L27.1289 22.8492L29.0002 22.1398ZM21.9302 23.6954C21.4641 23.6982 21.0077 23.5627 20.6186 23.306C20.2295 23.0494 19.9253 22.6831 19.7443 22.2535C19.5634 21.824 19.5139 21.3504 19.6022 20.8927C19.6904 20.4351 19.9123 20.0138 20.2399 19.6823C20.5676 19.3508 20.9861 19.1238 21.4427 19.0302C21.8993 18.9365 22.3734 18.9804 22.8051 19.1562C23.2368 19.332 23.6066 19.6318 23.8679 20.0178C24.1292 20.4038 24.2701 20.8586 24.2729 21.3247V21.3387C24.2716 21.9608 24.0248 22.5573 23.5861 22.9983C23.1474 23.4394 22.5523 23.6893 21.9302 23.6938V23.6954Z" fill="#50E6FF"/>
<defs>
<linearGradient id="paint0_linear_241_47259" x1="14.7668" y1="26.6449" x2="14.7668" y2="2.85108" gradientUnits="userSpaceOnUse">
<stop stop-color="#5EA0EF"/>
<stop offset="1" stop-color="#0078D4"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure AI Vision</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Discover computer vision insights from image and video analysis.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>


 </div>



 



 <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 30.3927C46.9448 27.9382 46.008 25.5856 44.361 23.765C42.7139 21.9443 40.4667 20.7772 38.03 20.4771C37.8837 17.0515 36.3933 13.8215 33.882 11.4871C31.3706 9.15276 28.0405 7.90203 24.6133 8.006C21.845 7.94595 19.1259 8.7439 16.829 10.2904C14.5322 11.8369 12.7701 14.0562 11.7844 16.6438C8.85076 17.0003 6.1444 18.4039 4.16302 20.5966C2.18164 22.7893 1.05846 25.6235 1 28.5782C1.12647 31.891 2.56143 35.0184 4.99027 37.2748C7.4191 39.5312 10.6436 40.7323 13.9567 40.6149H15.0811H36.0622C36.2487 40.6415 36.438 40.6415 36.6244 40.6149C39.3419 40.5892 41.943 39.5087 43.8789 37.6014C45.8147 35.6942 46.9338 33.1094 47 30.3927V30.3927Z" fill="url(#paint0_linear_1915_132676)"/>
<path d="M14.8503 27.8679H12.6014C12.4476 27.2012 12.0538 26.6145 11.4951 26.2195C10.9364 25.8245 10.2519 25.649 9.57204 25.7264C8.89221 25.8038 8.26465 26.1287 7.80902 26.6391C7.35339 27.1496 7.10156 27.8098 7.10156 28.4941C7.10156 29.1783 7.35339 29.8386 7.80902 30.349C8.26465 30.8594 8.89221 31.1843 9.57204 31.2617C10.2519 31.3391 10.9364 31.1636 11.4951 30.7686C12.0538 30.3737 12.4476 29.7869 12.6014 29.1202H14.8503C14.9858 29.1202 15.1158 29.174 15.2117 29.2699C15.3075 29.3657 15.3614 29.4957 15.3614 29.6313V40.6202H16.6136V29.6313C16.6136 29.1636 16.4278 28.7151 16.0971 28.3844C15.7665 28.0537 15.3179 27.8679 14.8503 27.8679V27.8679ZM9.86695 30.1168C9.54347 30.1168 9.22725 30.0209 8.95829 29.8412C8.68932 29.6615 8.47969 29.406 8.3559 29.1072C8.2321 28.8083 8.19971 28.4795 8.26282 28.1622C8.32593 27.8449 8.4817 27.5535 8.71044 27.3248C8.93918 27.096 9.2306 26.9403 9.54787 26.8772C9.86514 26.814 10.194 26.8464 10.4929 26.9702C10.7917 27.094 11.0471 27.3036 11.2269 27.5726C11.4066 27.8416 11.5025 28.1578 11.5025 28.4813C11.5025 28.9151 11.3302 29.3311 11.0235 29.6378C10.7167 29.9445 10.3007 30.1168 9.86695 30.1168V30.1168Z" fill="#9CEBFF"/>
<path d="M23.8463 28.4226V25.8671C23.8463 25.3926 23.6579 24.9376 23.3224 24.6021C22.9869 24.2667 22.5319 24.0782 22.0575 24.0782H18.0963C17.9608 24.0782 17.8308 24.0243 17.7349 23.9285C17.6391 23.8326 17.5852 23.7026 17.5852 23.5671V9.99707L16.9975 10.3037L16.333 10.6615V23.4393C16.333 23.907 16.5188 24.3555 16.8495 24.6862C17.1802 25.0168 17.6287 25.2026 18.0963 25.2026H22.0575C22.1279 25.2026 22.1977 25.2165 22.2628 25.2435C22.3279 25.2704 22.3871 25.31 22.4369 25.3598C22.4868 25.4096 22.5263 25.4688 22.5533 25.5339C22.5802 25.599 22.5941 25.6688 22.5941 25.7393V28.2948C21.9766 28.4294 21.424 28.7719 21.0287 29.2649C20.6333 29.758 20.4191 30.3717 20.4219 31.0037C20.4214 31.5273 20.5686 32.0405 20.8464 32.4843C21.1243 32.9281 21.5216 33.2846 21.9928 33.5129C22.464 33.7412 22.99 33.8321 23.5106 33.7752C24.0311 33.7182 24.525 33.5157 24.9356 33.1908C25.3463 32.866 25.6571 32.4319 25.8323 31.9385C26.0076 31.4451 26.0402 30.9123 25.9265 30.4012C25.8128 29.8901 25.5573 29.4214 25.1894 29.0488C24.8215 28.6763 24.356 28.4149 23.8463 28.2948V28.4226ZM23.2075 32.7671C22.884 32.7671 22.5678 32.6711 22.2988 32.4914C22.0298 32.3117 21.8202 32.0563 21.6964 31.7574C21.5726 31.4586 21.5402 31.1297 21.6033 30.8124C21.6664 30.4952 21.8222 30.2037 22.0509 29.975C22.2797 29.7463 22.5711 29.5905 22.8884 29.5274C23.2056 29.4643 23.5345 29.4967 23.8334 29.6205C24.1322 29.7442 24.3876 29.9539 24.5674 30.2228C24.7471 30.4918 24.843 30.808 24.843 31.1315C24.843 31.3463 24.8007 31.559 24.7185 31.7574C24.6363 31.9558 24.5158 32.1361 24.364 32.288C24.2121 32.4399 24.0318 32.5604 23.8334 32.6426C23.6349 32.7248 23.4222 32.7671 23.2075 32.7671V32.7671Z" fill="#F2F2F2"/>
<path d="M38.1312 23.0344C37.4499 23.0369 36.7931 23.289 36.2851 23.743C35.7771 24.197 35.4531 24.8215 35.3744 25.4982C35.2957 26.175 35.4678 26.8571 35.858 27.4156C36.2483 27.9741 36.8298 28.3701 37.4923 28.5289V29.04C37.4923 29.1105 37.4785 29.1802 37.4515 29.2454C37.4245 29.3105 37.385 29.3696 37.3352 29.4195C37.2853 29.4693 37.2262 29.5088 37.1611 29.5358C37.0959 29.5628 37.0262 29.5766 36.9557 29.5766H31.8446V20.5811C31.8446 20.3495 31.799 20.1202 31.7103 19.9063C31.6217 19.6924 31.4918 19.498 31.3281 19.3342C31.1644 19.1705 30.97 19.0406 30.756 18.952C30.5421 18.8634 30.3128 18.8178 30.0812 18.8178H27.449C27.3144 18.2003 26.972 17.6477 26.4789 17.2523C25.9859 16.8569 25.3721 16.6427 24.7401 16.6455C24.2165 16.6451 23.7034 16.7922 23.2596 17.0701C22.8157 17.3479 22.4592 17.7452 22.2309 18.2165C22.0026 18.6877 21.9117 19.2137 21.9687 19.7342C22.0257 20.2547 22.2282 20.7486 22.553 21.1593C22.8779 21.5699 23.3119 21.8807 23.8053 22.056C24.2987 22.2312 24.8315 22.2639 25.3427 22.1502C25.8538 22.0364 26.3225 21.781 26.695 21.413C27.0676 21.0451 27.3289 20.5796 27.449 20.07H30.1835C30.319 20.07 30.449 20.1238 30.5449 20.2197C30.6407 20.3155 30.6946 20.4455 30.6946 20.5811V40.6166H31.9468V30.8289H37.0579C37.5323 30.8289 37.9874 30.6404 38.3228 30.3049C38.6583 29.9694 38.8468 29.5144 38.8468 29.04V28.5289C39.4621 28.39 40.012 28.0464 40.4066 27.5543C40.8012 27.0622 41.0171 26.4507 41.019 25.82C41.0193 25.4454 40.944 25.0746 40.7976 24.7298C40.6513 24.385 40.4369 24.0733 40.1673 23.8133C39.8978 23.5532 39.5785 23.3502 39.2286 23.2164C38.8788 23.0826 38.5055 23.0207 38.1312 23.0344V23.0344ZM24.7401 21.0666C24.4166 21.0666 24.1004 20.9707 23.8314 20.791C23.5625 20.6113 23.3529 20.3558 23.2291 20.057C23.1053 19.7581 23.0729 19.4293 23.136 19.112C23.1991 18.7947 23.3549 18.5033 23.5836 18.2746C23.8123 18.0458 24.1038 17.8901 24.421 17.827C24.7383 17.7639 25.0672 17.7962 25.366 17.92C25.6649 18.0438 25.9203 18.2535 26.1 18.5224C26.2797 18.7914 26.3757 19.1076 26.3757 19.4311C26.3757 19.6459 26.3334 19.8586 26.2512 20.057C26.169 20.2554 26.0485 20.4357 25.8966 20.5876C25.7448 20.7395 25.5645 20.86 25.366 20.9421C25.1676 21.0243 24.9549 21.0666 24.7401 21.0666V21.0666ZM38.1312 27.4555C37.8067 27.4606 37.488 27.369 37.2157 27.1924C36.9434 27.0158 36.7298 26.7622 36.6021 26.4638C36.4744 26.1654 36.4383 25.8358 36.4985 25.5169C36.5587 25.1979 36.7124 24.9041 36.9401 24.6728C37.1678 24.4415 37.4591 24.2832 37.7771 24.218C38.095 24.1528 38.4252 24.1836 38.7255 24.3066C39.0259 24.4296 39.2828 24.6392 39.4637 24.9087C39.6446 25.1782 39.7412 25.4954 39.7412 25.82C39.7413 26.2494 39.5725 26.6615 39.2713 26.9676C38.97 27.2736 38.5606 27.4488 38.1312 27.4555V27.4555Z" fill="#9CEBFF"/>
<defs>
<linearGradient id="paint0_linear_1915_132676" x1="24" y1="50.1982" x2="24" y2="0.569333" gradientUnits="userSpaceOnUse">
<stop stop-color="#0078D4"/>
<stop offset="0.16" stop-color="#1380DA"/>
<stop offset="0.53" stop-color="#3C91E5"/>
<stop offset="0.82" stop-color="#559CEC"/>
<stop offset="1" stop-color="#5EA0EF"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Cognitive Search</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Add AI-powered content search to apps.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7788 1C19.2736 1 14.8696 2.34893 11.1236 4.8762C7.37764 7.40347 4.45802 10.9956 2.73395 15.1983C1.00987 19.401 0.558773 24.0255 1.4377 28.4871C2.31663 32.9486 4.4861 37.0468 7.67178 40.2634C10.8575 43.4801 14.9163 45.6706 19.3349 46.5581C23.7536 47.4455 28.3336 46.99 32.4959 45.2492C36.6582 43.5084 40.2158 40.5604 42.7188 36.7781C45.2217 32.9958 46.5577 28.549 46.5577 24C46.5577 17.9 44.1578 12.0499 39.8859 7.73654C35.6141 3.42321 29.8202 1 23.7788 1Z" fill="url(#paint0_radial_1915_132668)"/>
<path d="M23.7769 43.0193C34.1817 43.0193 42.6164 34.5027 42.6164 23.997C42.6164 13.4912 34.1817 4.97461 23.7769 4.97461C13.3722 4.97461 4.9375 13.4912 4.9375 23.997C4.9375 34.5027 13.3722 43.0193 23.7769 43.0193Z" fill="white"/>
<path d="M19.626 26.085C20.7656 26.085 21.6895 25.1522 21.6895 24.0015C21.6895 22.8508 20.7656 21.918 19.626 21.918C18.4864 21.918 17.5625 22.8508 17.5625 24.0015C17.5625 25.1522 18.4864 26.085 19.626 26.085Z" fill="#32BEDD"/>
<path d="M13.7564 18.0444H12.7381C12.532 18.0444 12.3343 18.127 12.1886 18.2742C12.0428 18.4214 11.9609 18.621 11.9609 18.8291V34.3067C11.9609 34.7301 12.1275 35.1362 12.424 35.4356C12.7206 35.735 13.1227 35.9032 13.5421 35.9032H28.4689C28.5732 35.9032 28.6765 35.8821 28.7726 35.841C28.8687 35.7998 28.9556 35.7396 29.0281 35.6639C29.1007 35.5881 29.1573 35.4984 29.1948 35.4C29.2322 35.3017 29.2497 35.1967 29.2461 35.0914V34.0632C29.2461 33.8551 29.1642 33.6555 29.0184 33.5083C28.8727 33.3611 28.675 33.2785 28.4689 33.2785H15.0696C15.018 33.2786 14.9669 33.268 14.9195 33.2473C14.8722 33.2266 14.8296 33.1962 14.7943 33.1581C14.7591 33.12 14.7321 33.075 14.7149 33.0259C14.6977 32.9768 14.6907 32.9246 14.6944 32.8726V18.8291C14.6969 18.7108 14.673 18.5935 14.6243 18.4859C14.5756 18.3784 14.5035 18.2833 14.4133 18.2078C14.3231 18.1323 14.2171 18.0784 14.1034 18.0501C13.9897 18.0218 13.871 18.0199 13.7564 18.0444V18.0444Z" fill="#32BEDD"/>
<path d="M27.9346 26.085C29.0742 26.085 29.9981 25.1522 29.9981 24.0015C29.9981 22.8508 29.0742 21.918 27.9346 21.918C26.795 21.918 25.8711 22.8508 25.8711 24.0015C25.8711 25.1522 26.795 26.085 27.9346 26.085Z" fill="#32BEDD"/>
<path d="M32.9439 12.0977H19.0354C18.9311 12.0976 18.8278 12.1188 18.7317 12.1599C18.6356 12.201 18.5487 12.2612 18.4762 12.337C18.4037 12.4127 18.347 12.5025 18.3096 12.6008C18.2721 12.6992 18.2547 12.8041 18.2583 12.9094V13.9377C18.2583 14.1458 18.3402 14.3454 18.4859 14.4925C18.6316 14.6397 18.8293 14.7224 19.0354 14.7224H32.4347C32.5414 14.7224 32.6436 14.7651 32.719 14.8412C32.7944 14.9174 32.8367 15.0206 32.8367 15.1282V29.1718C32.8367 29.3799 32.9186 29.5795 33.0644 29.7266C33.2101 29.8738 33.4078 29.9565 33.6139 29.9565H34.6322C34.8384 29.9565 35.036 29.8738 35.1818 29.7266C35.3275 29.5795 35.4094 29.3799 35.4094 29.1718V13.6941C35.4095 13.2754 35.2466 12.8733 34.9558 12.5747C34.6651 12.2761 34.2698 12.1048 33.8551 12.0977H32.9439Z" fill="#32BEDD"/>
<defs>
<radialGradient id="paint0_radial_1915_132668" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.1287 23.1471) scale(22.6716 22.8918)">
<stop offset="0.67" stop-color="#6BB9F2"/>
<stop offset="0.74" stop-color="#61B4F1"/>
<stop offset="0.85" stop-color="#47A8EF"/>
<stop offset="0.99" stop-color="#1D94EB"/>
<stop offset="1" stop-color="#1B93EB"/>
</radialGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure AI Bot Service</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Design and build enterprise-grade conversational AI bots.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 28.0046V34.8541L23.938 45.6647L42.7952 34.8541V28.0046H5Z" fill="#CC271F"/>
<path d="M23.9375 28.0046V45.6647L42.7946 34.8541V28.0046H23.9375Z" fill="#E63118"/>
<path d="M5 28.0047L23.938 38.8153L42.7952 28.0047L23.938 17.1941L5 28.0047Z" fill="#F65B23"/>
<path d="M5 13.8105V20.66L23.938 31.3881L42.7952 20.66V13.8105H5Z" fill="#CC271F"/>
<path d="M23.9375 13.8105V31.3881L42.7946 20.66V13.8105H23.9375Z" fill="#E63118"/>
<path d="M5 13.8106L23.938 24.6212L42.7952 13.8106L23.938 3L5 13.8106Z" fill="#F65B23"/>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Databricks</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Enable analytics and AI on an open data lake.</p>
         
         <p><u>Explore the product</u></p>
         </div>

 </div>
 </div>




</div>
 
</div>




</CustomTabPanel>

    



      <CustomTabPanel value={value} index={2}>

<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

<div style={{width:"500px",height:"790px", border:"1px solid #000", 
 backgroundColor:"#000",
  borderRadius:"2rem",
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-compute-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fit=constrain")',
backgroundSize: '100% 100%',
backgroundRepeat: 'no-repeat',
  }}>
 

 <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>




 <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
 <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
 <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
   <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
   <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
 </div>
 </div>

 </div>
 
  
  
 
  
</div>



<div className='b2' style={{display:"flex", flexDirection:"column"}}>
 
 <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




 <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3242 46.7041C14.1984 46.707 13.1337 46.1895 12.438 45.3027L1.57532 31.7551C0.855009 30.8672 0.591289 29.691 0.861897 28.578L4.74094 11.6657C4.9899 10.5567 5.73383 9.62637 6.7582 9.14246L22.4623 1.60426C23.4818 1.10652 24.6715 1.10652 25.6899 1.60426L41.3951 9.11085C42.4194 9.59378 43.1634 10.5251 43.4123 11.6331L47.2914 28.5464C47.5472 29.6594 47.2845 30.8277 46.5779 31.7235L35.7152 45.2731C35.0097 46.149 33.9509 46.6626 32.8291 46.6744L15.3242 46.705V46.7041Z" fill="#326DE6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0454 0.54541C23.3802 0.552323 22.7248 0.701448 22.1216 0.980933L6.41652 8.51913C5.18846 9.09785 4.29594 10.2128 3.9968 11.5401L0.117751 28.4534C-0.196155 29.7867 0.125623 31.19 0.986649 32.2526L11.8484 45.8022C12.6858 46.852 13.9542 47.4604 15.2935 47.4545H32.7039C34.0432 47.4604 35.3126 46.853 36.149 45.8032L47.0117 32.2546C47.8757 31.193 48.1974 29.7876 47.8806 28.4544L44.0015 11.5411C43.7024 10.2138 42.8089 9.09884 41.5808 8.52012L25.9387 0.980933C25.3473 0.697497 24.7008 0.54936 24.0454 0.54541ZM24.0454 2.009C24.4853 2.009 24.9192 2.1048 25.3178 2.28948L41.0229 9.79508C41.8367 10.1931 42.4291 10.9357 42.6367 11.8196L46.5147 28.7329C46.7332 29.6296 46.5138 30.5767 45.9253 31.2858L35.0626 44.8364C34.4997 45.5474 33.6417 45.9612 32.7364 45.9573H15.324C14.4187 45.9612 13.5616 45.5474 12.9977 44.8364L2.13403 31.2868C1.57313 30.5639 1.35763 29.6296 1.54459 28.7329L5.42462 11.8196C5.62536 10.9328 6.21972 10.1862 7.03745 9.79508L22.7426 2.25689C23.1588 2.0969 23.5996 2.01197 24.0454 2.00703V2.009Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.2697 29.9797C31.5061 31.1914 30.4896 32.2225 29.2901 33.0007L27.3348 28.2978C27.2334 27.9127 27.4145 27.5097 27.7697 27.332C27.9055 27.2678 28.0541 27.2362 28.2047 27.2381L33.1701 28.0796C32.9782 28.759 32.6741 29.4019 32.2697 29.9797ZM26.2159 34.3092C25.5025 34.4702 24.7743 34.5541 24.0432 34.5591C22.9795 34.5522 21.9216 34.3833 20.9091 34.0584L23.3593 29.6054C23.5994 29.3081 24.0117 29.2182 24.3532 29.3861C24.4988 29.476 24.6248 29.5915 24.7261 29.7298L27.1163 34.0584C26.8369 34.1522 26.5269 34.2144 26.2169 34.3092H26.2159ZM14.8898 28.1102L19.8247 27.2697C20.235 27.2431 20.603 27.5216 20.6936 27.9235C20.731 28.0904 20.7201 28.2642 20.6621 28.4242L18.7688 33.0007C16.9798 31.8383 15.6179 30.1219 14.8898 28.1102ZM15.7272 19.6703L19.4202 22.9708C19.7578 23.2671 19.7991 23.7777 19.5137 24.1233C19.4252 24.2517 19.2913 24.3406 19.1398 24.3742L14.3318 25.7745C14.135 23.6424 14.6241 21.5033 15.7272 19.6703ZM21.8419 15.2469C22.1834 15.1847 22.4934 15.1225 22.8348 15.0603L22.5554 20.0436C22.5317 20.493 22.1657 20.8465 21.717 20.8515C21.5871 20.8544 21.4582 20.8228 21.343 20.7586L17.216 17.7979C18.4844 16.5239 20.0884 15.638 21.84 15.244L21.8419 15.2469ZM30.8419 17.8008L26.7759 20.6974C26.4196 20.9216 25.9522 20.8416 25.6895 20.5107C25.6078 20.413 25.5547 20.2945 25.535 20.1681L25.2565 15.0909C27.3702 15.3348 29.3383 16.2908 30.8419 17.8008ZM33.5125 22.6291C33.7526 23.6591 33.8264 24.7218 33.729 25.7745L28.9801 24.4038C28.551 24.2813 28.2922 23.8448 28.3907 23.4083C28.4202 23.2789 28.4851 23.1604 28.5766 23.0656L32.3317 19.6703C32.8808 20.5868 33.2783 21.5862 33.5115 22.6311L33.5125 22.6291ZM25.41 25.8684L24.0452 26.5231L22.6793 25.8684L22.3379 24.4038L23.2698 23.2207H24.7901L25.721 24.4038L25.41 25.8684ZM39.7798 27.3942H39.7493C39.7178 27.3942 39.6873 27.3942 39.6873 27.3636C39.6253 27.3636 39.5623 27.332 39.5003 27.332C39.3055 27.2974 39.1087 27.2767 38.9109 27.2697C38.8066 27.2737 38.7023 27.2628 38.6009 27.2381H38.5695C38.0027 27.2036 37.4408 27.1098 36.8936 26.9577C36.7372 26.8964 36.6142 26.772 36.5522 26.616C36.5522 26.5844 36.5207 26.5844 36.5207 26.5537L36.1173 26.4283C36.3082 24.9628 36.2344 23.4755 35.8998 22.0366C35.5613 20.5848 34.9738 19.2042 34.162 17.9559L34.4729 17.6764V17.6142C34.467 17.4443 34.5221 17.2784 34.6274 17.1461C35.0624 16.7816 35.5298 16.4587 36.0248 16.1822C36.1182 16.12 36.2107 16.0884 36.3042 16.0261C36.4863 15.9343 36.6624 15.8296 36.8317 15.7151C36.8631 15.6835 36.9242 15.6528 36.9862 15.5896C37.0176 15.558 37.0481 15.558 37.0481 15.5274C37.4752 15.1897 37.5697 14.5784 37.2656 14.126C37.0954 13.9058 36.8307 13.7784 36.5522 13.7834C36.3042 13.7903 36.0641 13.8782 35.8693 14.0342L35.8073 14.0964C35.7453 14.127 35.7148 14.1892 35.6528 14.2208C35.5101 14.3581 35.3753 14.5043 35.2493 14.6564C35.1844 14.7374 35.1116 14.8104 35.0319 14.8756C34.6589 15.2914 34.2427 15.6677 33.79 15.9965C33.7083 16.0548 33.6119 16.0874 33.5115 16.0894C33.4476 16.0943 33.3836 16.0834 33.3256 16.0587H33.2636L32.8896 16.3086C32.4881 15.8889 32.064 15.4929 31.6163 15.1225C29.7466 13.655 27.4942 12.7573 25.1306 12.537L25.0991 12.1321L25.0371 12.0699C24.9062 11.9721 24.8176 11.827 24.7881 11.665C24.7763 11.1031 24.8078 10.5401 24.8816 9.98315V9.95154C24.8865 9.84587 24.9082 9.7402 24.9436 9.64046C24.9741 9.4538 25.0046 9.26518 25.0361 9.0489V8.76842C25.0784 8.24599 24.6897 7.78677 24.1692 7.7443C23.8769 7.7206 23.5906 7.83417 23.3928 8.05045C23.2078 8.24204 23.1064 8.4998 23.1143 8.76744V9.01729C23.1123 9.21876 23.1438 9.41825 23.2078 9.60984C23.2383 9.70267 23.2383 9.79649 23.2698 9.91994V9.95154C23.3583 10.5076 23.3898 11.0715 23.3623 11.6334C23.3327 11.7954 23.2442 11.9405 23.1133 12.0383L23.0513 12.1005L23.0198 12.5064C22.457 12.5588 21.897 12.6417 21.344 12.7563C18.9922 13.2728 16.8519 14.4875 15.1988 16.2444L14.8888 16.0261H14.8278C14.7658 16.0261 14.7028 16.0577 14.6418 16.0577C14.5414 16.0548 14.444 16.0232 14.3623 15.9639C13.9107 15.6232 13.4944 15.2381 13.1215 14.8114C13.0565 14.7314 12.9837 14.6583 12.904 14.5932C12.7771 14.4411 12.6432 14.2949 12.5005 14.1576C12.4691 14.126 12.4071 14.0954 12.3451 14.0322C12.3146 14.0006 12.2831 14.0006 12.2831 13.97C12.0912 13.81 11.8501 13.7221 11.6011 13.7201C11.3227 13.7152 11.058 13.8416 10.8877 14.0628C10.5827 14.5151 10.6781 15.1255 11.1042 15.4642C11.1357 15.4642 11.1357 15.4948 11.1662 15.4948C11.2282 15.5264 11.2587 15.5886 11.3207 15.6203C11.4899 15.7358 11.6671 15.8405 11.8491 15.9323C11.9485 15.9718 12.042 16.0242 12.1276 16.0874C12.6226 16.3649 13.09 16.6888 13.5249 17.0532C13.644 17.1777 13.7001 17.3485 13.6794 17.5204V17.5826L13.9894 17.8621C13.9274 17.9391 13.8752 18.023 13.8349 18.1129C12.2978 20.5581 11.6808 23.4745 12.0971 26.3355L11.6936 26.4609C11.6936 26.4925 11.6621 26.4925 11.6621 26.5231C11.5913 26.6732 11.4703 26.7937 11.3207 26.8658C10.7736 27.0199 10.2117 27.1137 9.64489 27.1463H9.6134C9.50909 27.1404 9.40478 27.1512 9.30343 27.1769C9.10564 27.1838 8.90883 27.2046 8.714 27.2391C8.652 27.2391 8.58902 27.2707 8.52801 27.2707C8.49357 27.2658 8.45913 27.2776 8.43453 27.3023C7.90217 27.409 7.54694 27.9156 7.62763 28.4548C7.74276 28.9022 8.16097 29.2034 8.62051 29.1708C8.70514 29.1758 8.78977 29.1649 8.87046 29.1392C8.90096 29.1392 8.93147 29.1392 8.93147 29.1086C8.99346 29.1086 9.05644 29.077 9.11843 29.077C9.31032 29.0227 9.49728 28.9496 9.67638 28.8578C9.76888 28.8262 9.86236 28.7639 9.95486 28.7323H9.98635C10.5049 28.518 11.0471 28.361 11.6002 28.2652H11.6621C11.8098 28.2721 11.9515 28.3274 12.0656 28.4213C12.0971 28.4213 12.0971 28.4529 12.1276 28.4529L12.5616 28.3906C13.3114 30.7016 14.7264 32.739 16.6276 34.246C17.0527 34.5749 17.4984 34.8761 17.9619 35.1487L17.7759 35.5536C17.7759 35.5852 17.8074 35.5852 17.8074 35.6158C17.895 35.7669 17.9176 35.9476 17.8694 36.1165C17.647 36.629 17.3764 37.1189 17.0615 37.5801V37.6117C17.0005 37.7045 16.9375 37.7667 16.8755 37.8615C16.7515 38.0176 16.6591 38.1726 16.5341 38.3622C16.4967 38.4096 16.4652 38.462 16.4416 38.5173C16.4386 38.541 16.4268 38.5627 16.4101 38.5795C16.1523 39.0585 16.3294 39.656 16.8067 39.9157C16.8086 39.9167 16.8116 39.9177 16.8135 39.9187C16.9297 39.9789 17.0576 40.0115 17.1875 40.0125C17.5801 39.9937 17.9334 39.7685 18.1184 39.4209C18.1223 39.3972 18.1331 39.3755 18.1499 39.3587C18.1735 39.3024 18.205 39.2501 18.2433 39.2027C18.3142 39.019 18.3762 38.8323 18.4293 38.6417L18.5218 38.3622C18.6783 37.8191 18.8977 37.2966 19.1742 36.8048C19.2756 36.6705 19.4163 36.5727 19.5777 36.5244C19.6082 36.5244 19.6082 36.5243 19.6397 36.4927L19.8562 36.0888C21.2427 36.6231 22.7158 36.8977 24.2016 36.8977C25.1109 36.9036 26.0172 36.7989 26.9018 36.5866C27.4489 36.4641 27.9872 36.3081 28.5156 36.1194L28.7016 36.4621C28.7331 36.4621 28.7331 36.4621 28.7636 36.4937C28.9329 36.5224 29.0814 36.6251 29.1671 36.7732C29.4249 37.2729 29.6423 37.7924 29.8175 38.3267V38.3583L29.911 38.6388C29.9592 38.8294 30.0212 39.017 30.097 39.1987C30.1284 39.2609 30.159 39.2925 30.1904 39.3547C30.1934 39.3785 30.2042 39.4002 30.2209 39.417C30.3961 39.7735 30.7553 40.0026 31.1518 40.0085C31.2827 40.0075 31.4106 39.9759 31.5268 39.9157C31.7511 39.7992 31.9184 39.5977 31.9902 39.3547C32.0631 39.096 32.0414 38.8205 31.9292 38.5765C31.9292 38.5449 31.8977 38.5449 31.8977 38.5143C31.8741 38.458 31.8426 38.4057 31.8042 38.3583C31.7088 38.1795 31.5947 38.0126 31.4628 37.8586C31.4008 37.7647 31.3388 37.7025 31.2768 37.6077V37.5771C30.9511 37.1228 30.6795 36.631 30.4699 36.1125C30.4315 35.9466 30.4424 35.7728 30.5014 35.6128C30.5014 35.5812 30.5319 35.5812 30.5319 35.5506L30.3774 35.1753C32.9438 33.6347 34.8626 31.2102 35.7787 28.3541L36.1527 28.4163C36.1842 28.4163 36.1842 28.3847 36.2147 28.3847C36.3318 28.2958 36.4715 28.2425 36.6171 28.2297H36.6791C37.2331 28.3245 37.7744 28.4815 38.2939 28.6958H38.3244C38.4179 28.7274 38.5104 28.7896 38.6039 28.8212C38.782 28.9121 38.97 28.9862 39.1628 29.0395C39.2238 29.0395 39.2868 29.0711 39.3488 29.0711C39.3832 29.0661 39.4167 29.078 39.4423 29.1017C39.522 29.1274 39.6066 29.1382 39.6912 29.1333C40.1409 29.1343 40.5414 28.8459 40.6841 28.4163C40.6271 27.9196 40.2679 27.5097 39.7837 27.3892L39.7798 27.3942Z" fill="white"/>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Kubernetes Service (AKS)</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Build and scale apps with managed Kubernetes.</p>
         
         <p><u>Explore the product</u></p>
         </div>



 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.5675 33.445C36.3445 33.1725 36.2207 32.7019 36.0968 32.1817C35.9729 31.6614 35.8491 31.1165 35.428 30.7449C35.3536 30.6706 35.2545 30.621 35.1802 30.5467C35.0811 30.4972 35.0068 30.4476 34.9077 30.4228C35.5023 28.664 35.2793 26.93 34.66 25.3693C33.9416 23.4371 32.6535 21.7526 31.6874 20.6131C30.5974 19.2258 29.5322 17.9377 29.5569 16.0054C29.5817 13.0575 29.879 7.60767 24.7016 7.60767C24.5034 7.60767 24.2805 7.60767 24.0328 7.63244C18.2608 8.10311 19.7719 14.2218 19.6976 16.2532C19.5985 17.7395 19.2765 18.9285 18.2608 20.3901C17.047 21.8269 15.3377 24.1555 14.545 26.5831C14.1734 27.7227 13.9753 28.887 14.1487 30.0017C14.0991 30.0512 14.0496 30.1008 14 30.1503C13.6532 30.5219 13.3807 30.9926 13.0835 31.2899C12.811 31.5624 12.4146 31.6614 11.9935 31.8101C11.5724 31.9587 11.1017 32.1817 10.8044 32.7266C10.6806 32.9744 10.631 33.2469 10.631 33.5194C10.631 33.7671 10.6806 34.0396 10.7053 34.2873C10.7796 34.8075 10.854 35.2782 10.7549 35.625C10.4081 36.5416 10.3833 37.1856 10.6062 37.6563C10.854 38.127 11.3246 38.3252 11.8944 38.449C13.0091 38.672 14.5202 38.6224 15.6845 39.2417L15.7836 39.0435L15.7093 39.2665C16.9727 39.9353 18.2608 40.1583 19.3013 39.9353C20.0444 39.7619 20.639 39.316 20.961 38.6472C21.7537 38.6472 22.6455 38.3004 24.0575 38.2261C25.0236 38.1517 26.2127 38.5729 27.5752 38.4986C27.5999 38.6472 27.6743 38.7958 27.7238 38.9197C28.244 39.9849 29.2597 40.4803 30.3001 40.3812C31.3653 40.3069 32.4801 39.6629 33.3966 38.5976L33.2232 38.449L33.3966 38.5976C34.2637 37.5572 35.7004 37.1113 36.6418 36.5416C37.1125 36.2443 37.5088 35.8975 37.5336 35.3773C37.5831 34.8323 37.2611 34.2377 36.5675 33.445Z" fill="#202020"/>
<path d="M37.1147 35.3259C37.0899 35.6479 36.8669 35.8956 36.421 36.1433C35.554 36.6636 34.0181 37.1095 33.052 38.2985C32.2098 39.3142 31.1693 39.8592 30.2528 39.9335C29.3362 40.0078 28.5435 39.6362 28.0976 38.6949C27.8003 38.1499 27.9242 37.2829 28.1719 36.3663C28.4196 35.4497 28.7664 34.5332 28.816 33.7652C28.8655 32.7991 28.9151 31.9321 29.0885 31.288C29.2619 30.6192 29.5096 30.198 29.9555 29.9503C29.9803 29.9503 30.005 29.9255 30.0298 29.9255C30.0794 30.7678 30.5005 31.6348 31.2437 31.8082C32.0611 32.0312 33.2007 31.3375 33.6961 30.7678C33.7952 30.7678 33.8943 30.7678 33.9934 30.7678C34.4145 30.7678 34.7861 30.7926 35.1577 31.1146C35.4302 31.3623 35.5788 31.8082 35.7026 32.3284C35.8265 32.8487 35.9008 33.3936 36.2724 33.79C36.9165 34.4836 37.1394 35.0038 37.1147 35.3259Z" fill="#FFD20D"/>
<path d="M20.7132 37.7053C20.6389 38.721 20.0692 39.2908 19.1774 39.4889C18.2856 39.6871 17.0965 39.4889 15.8827 38.8696C14.545 38.176 12.9843 38.2503 11.9687 38.0274C11.4732 37.9283 11.1264 37.7549 10.9778 37.4576C10.8291 37.1604 10.8291 36.6401 11.1512 35.7731C11.2998 35.2777 11.2007 34.7327 11.1264 34.2372C11.0521 33.7418 11.0025 33.2711 11.1759 32.9491C11.3989 32.528 11.7209 32.3793 12.1173 32.2307C12.5136 32.0821 12.9843 31.983 13.3807 31.5866C13.7275 31.215 14 30.7691 14.2972 30.4223C14.545 30.1498 14.8175 29.9517 15.2138 29.9517C15.2881 29.9517 15.3624 29.9517 15.4368 29.9764C15.957 30.0507 16.4029 30.4223 16.824 31.0169L18.0626 33.2959C18.3846 33.9895 19.103 34.7575 19.6976 35.5254C20.3169 36.3181 20.7875 37.1108 20.7132 37.7053Z" fill="#FFD20D"/>
<path d="M26.9588 16.4504C26.8597 16.2522 26.6616 16.054 26.3147 15.9302C25.5964 15.6329 25.2743 15.6081 24.878 15.3356C24.2091 14.9145 23.6641 14.7659 23.2182 14.7659C22.9705 14.7659 22.7723 14.8154 22.5741 14.865C22.0292 15.0631 21.6576 15.4595 21.4346 15.6577C21.3851 15.7072 21.3355 15.732 21.1869 15.8311C21.0383 15.9302 20.8401 16.0788 20.5181 16.3265C20.2456 16.5247 20.1465 16.7972 20.2456 17.0945C20.3447 17.3917 20.6419 17.7633 21.1869 18.0853C21.5337 18.2835 21.7567 18.556 22.0292 18.779C22.153 18.8781 22.3017 18.9771 22.4751 19.0515C22.6485 19.1258 22.8466 19.1753 23.0944 19.1753C23.6641 19.2001 24.11 19.0267 24.4816 18.8285C24.8532 18.6056 25.1752 18.3578 25.5468 18.234C26.29 18.011 26.835 17.5156 27.0084 17.0697C27.0827 16.8467 27.0579 16.6486 26.9588 16.4504Z" fill="#FFD20D"/>
<path d="M25.0487 17.5676C24.4542 17.8896 23.7606 18.2612 23.0174 18.2612C22.2742 18.2612 21.6797 17.9144 21.2586 17.5923C21.0604 17.4189 20.887 17.2703 20.7384 17.1464C20.5154 16.973 20.5402 16.7253 20.6393 16.7253C20.7879 16.7501 20.8127 16.9483 20.9118 17.0473C21.0356 17.1712 21.209 17.3198 21.4072 17.4932C21.8036 17.8153 22.3485 18.1125 22.9926 18.1125C23.6615 18.1125 24.4294 17.7162 24.9001 17.4437C25.1726 17.2951 25.5194 17.0226 25.7919 16.8244C26.0148 16.6758 25.9901 16.4776 26.1635 16.5024C26.3369 16.5271 26.213 16.7005 25.9653 16.9235C25.7423 17.0969 25.3708 17.3942 25.0487 17.5676Z" fill="#202020"/>
<path d="M34.2146 30.3231C34.1403 30.3231 34.0412 30.3231 33.9669 30.3231H33.9421C34.1403 29.679 33.6944 29.1836 32.4805 28.6386C31.2172 28.0936 30.2263 28.1431 30.0529 29.2579C30.0529 29.3074 30.0281 29.3817 30.0281 29.4313C29.929 29.4561 29.8299 29.5056 29.7556 29.5551C29.1611 29.8772 28.839 30.4717 28.6656 31.1901C28.4922 31.9085 28.4427 32.7755 28.3931 33.7416C28.3684 34.2371 28.1702 34.9059 27.9472 35.5996C25.8911 37.0611 23.0423 37.7052 20.6147 36.0455C20.4413 35.7977 20.2679 35.5252 20.0697 35.2775C19.9458 35.1289 19.822 34.9555 19.6981 34.8068C19.9458 34.8068 20.1688 34.7573 20.3174 34.683C20.5404 34.5839 20.689 34.4353 20.7633 34.2371C20.9119 33.8407 20.7633 33.271 20.2926 32.6269C19.822 31.9828 19.0293 31.2644 17.8402 30.546C16.9732 30.001 16.5025 29.357 16.2548 28.6386C16.0318 27.9202 16.0566 27.1522 16.23 26.3843C16.5768 24.9227 17.4191 23.486 17.964 22.5942C18.1127 22.4951 18.0136 22.7923 17.4191 23.9319C16.8741 24.9723 15.8584 27.3504 17.2457 29.2083C17.2952 27.8954 17.5925 26.5329 18.1375 25.2696C18.9054 23.5107 20.5156 20.4885 20.6642 18.0609C20.7385 18.1104 20.9615 18.259 21.0606 18.3086C21.3578 18.482 21.5808 18.7297 21.8781 18.9774C22.1753 19.2004 22.5221 19.3986 23.0671 19.4481C23.1167 19.4481 23.1662 19.4481 23.2157 19.4481C23.7855 19.4481 24.2066 19.2747 24.5782 19.0517C24.9746 18.8288 25.2966 18.5811 25.5939 18.482C26.238 18.2838 26.7334 17.937 27.0307 17.5159C27.5261 19.4729 28.6656 22.2721 29.4088 23.6346C29.8051 24.353 30.5731 25.9136 30.9199 27.7715C31.1428 27.7715 31.3658 27.7963 31.6135 27.8706C32.5053 25.5916 30.8703 23.1144 30.1272 22.4455C29.8299 22.1483 29.8051 22.0244 29.9538 22.0244C30.7713 22.7428 31.8117 24.1796 32.208 25.7898C32.3815 26.5329 32.431 27.3009 32.2328 28.0688C32.3319 28.1184 32.431 28.1431 32.5053 28.1927C33.9421 28.8863 34.4623 29.5056 34.2146 30.3231Z" fill="white"/>
<path d="M27.0307 14.1946C27.0307 14.591 26.9564 14.913 26.8325 15.2351C26.7582 15.4333 26.6591 15.5819 26.5352 15.7305C26.4857 15.7058 26.4609 15.681 26.4114 15.681C26.2627 15.6314 26.1389 15.5571 26.015 15.5323C25.8911 15.4828 25.8168 15.458 25.7177 15.4333C25.7921 15.3589 25.9159 15.2599 25.9655 15.136C26.0398 14.9626 26.0646 14.7644 26.0893 14.5662V14.5415C26.0893 14.3433 26.0646 14.1699 26.015 13.9965C25.9655 13.7983 25.8664 13.6744 25.7673 13.5753C25.6434 13.4763 25.5443 13.4267 25.3957 13.4019C25.3957 13.4019 25.3957 13.4019 25.3709 13.4019C25.2471 13.4019 25.1232 13.4515 25.0241 13.5506C24.9003 13.6497 24.8259 13.7735 24.7269 13.9717C24.6525 14.1451 24.6278 14.3433 24.603 14.5415V14.5662C24.603 14.6901 24.603 14.7892 24.6278 14.8883C24.3553 14.7644 24.0332 14.6653 23.7855 14.6158C23.7607 14.5167 23.7607 14.4176 23.7607 14.2937V14.269C23.7607 13.8726 23.8103 13.5506 23.9589 13.2285C24.1076 12.8817 24.281 12.6588 24.5535 12.4606C24.8012 12.2624 25.0737 12.1633 25.3709 12.1633H25.3957C25.693 12.1633 25.9407 12.2624 26.1884 12.4358C26.4609 12.634 26.6343 12.857 26.7829 13.2038C26.9316 13.5258 27.0059 13.8478 27.0059 14.2194C27.0307 14.1946 27.0307 14.1946 27.0307 14.1946Z" fill="white"/>
<path d="M22.5958 14.5916C22.5462 14.5916 22.5215 14.6163 22.4719 14.6163C22.2737 14.6907 22.1003 14.765 21.9269 14.8641C21.9517 14.765 21.9517 14.6411 21.9269 14.5173C21.9269 14.5173 21.9269 14.5173 21.9269 14.4925C21.9021 14.3191 21.8774 14.1952 21.8278 14.0466C21.7783 13.898 21.704 13.7989 21.6049 13.7245C21.5306 13.6502 21.4315 13.6255 21.3572 13.6255H21.3324C21.2333 13.6255 21.159 13.675 21.0847 13.7741C21.0104 13.8732 20.9608 13.9723 20.9113 14.1457C20.8617 14.2943 20.8617 14.4429 20.8865 14.6163C20.8865 14.6163 20.8865 14.6163 20.8865 14.6411C20.9113 14.8145 20.936 14.9384 20.9856 15.087C21.0351 15.2356 21.1094 15.3347 21.2085 15.4091C21.2333 15.4338 21.2333 15.4338 21.2581 15.4338C21.159 15.5081 21.1094 15.5577 21.0104 15.632C20.9608 15.6815 20.9113 15.7063 20.8369 15.7559C20.6883 15.6072 20.5645 15.4338 20.4654 15.1861C20.3415 14.9136 20.2672 14.6163 20.2672 14.2943C20.2424 13.9723 20.292 13.675 20.3663 13.3777C20.4654 13.0805 20.5892 12.8575 20.7626 12.6841C20.936 12.5107 21.1094 12.4116 21.3324 12.4116C21.3572 12.4116 21.3572 12.4116 21.3819 12.4116C21.5801 12.4116 21.7535 12.4859 21.9269 12.6098C22.1251 12.7584 22.2737 12.9566 22.3976 13.2539C22.5215 13.5264 22.5958 13.8236 22.5958 14.1457C22.5958 14.3191 22.5958 14.4677 22.5958 14.5916Z" fill="white"/>
<path d="M23.5855 15.3837C23.6102 15.458 23.7341 15.458 23.8084 15.4828C23.8827 15.5075 23.9323 15.5818 24.0066 15.5818C24.0809 15.5818 24.18 15.5571 24.2048 15.4828C24.2048 15.3837 24.0809 15.3341 24.0066 15.3094C23.9075 15.2598 23.7589 15.235 23.6598 15.3094C23.5855 15.3341 23.5607 15.3589 23.5855 15.3837Z" fill="#202020"/>
<path d="M22.8175 15.3837C22.7928 15.458 22.6689 15.458 22.5946 15.4828C22.5203 15.5075 22.4707 15.5818 22.3964 15.5818C22.3221 15.5818 22.223 15.5571 22.1982 15.4828C22.1982 15.3837 22.3221 15.3341 22.3964 15.3094C22.4955 15.2598 22.6441 15.235 22.7432 15.3094C22.7928 15.3341 22.8175 15.3589 22.8175 15.3837Z" fill="#202020"/>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Linux virtual machines in Azure</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Provision VMs for Ubuntu, Red Hat, SUSE, and other popular distributions.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>











 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


              
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4796 13.9429C9.53512 13.9429 2.27734 11.3997 2.27734 8.09351V39.1461C2.27734 42.3505 9.40734 44.9446 18.2496 44.9955H18.4796C27.424 44.9955 34.6818 42.4523 34.6818 39.1461V8.09351C34.6818 11.3234 27.424 13.9429 18.4796 13.9429Z" fill="url(#paint0_linear_1915_132715)"/>
<path d="M34.6818 8.09108C34.6818 11.321 27.424 13.9405 18.4796 13.9405C9.53512 13.9405 2.27734 11.321 2.27734 8.09108C2.27734 4.86121 9.53512 2.2417 18.4796 2.2417C27.424 2.2417 34.6818 4.78491 34.6818 8.09108Z" fill="#E8E8E8"/>
<path d="M30.8992 7.61299C30.8992 9.67299 25.3281 11.3261 18.4792 11.3261C11.6304 11.3261 6.11035 9.67299 6.11035 7.61299C6.11035 5.55299 11.6304 3.8999 18.4792 3.8999C25.3281 3.8999 30.8992 5.57842 30.8992 7.61299Z" fill="#50E6FF"/>
<path d="M18.4803 8.47761C15.1546 8.41113 11.8402 8.88356 8.66699 9.87637C11.8371 10.9248 15.1665 11.4153 18.5059 11.326C21.8452 11.4153 25.1747 10.9248 28.3448 9.87637C25.1552 8.87808 21.8231 8.40559 18.4803 8.47761V8.47761Z" fill="#198AB3"/>
<path d="M28.4464 29.2326V20.6365H26.0697V31.1654H32.3564V29.2326H28.4464ZM10.1741 24.9854C9.70106 24.7918 9.2613 24.5258 8.87081 24.197C8.6992 23.9624 8.62589 23.6706 8.66636 23.3832C8.6663 23.2288 8.70338 23.0767 8.77452 22.9395C8.84566 22.8024 8.94878 22.6842 9.07525 22.5948C9.39558 22.3939 9.7704 22.2962 10.1486 22.3151C11.0576 22.2836 11.953 22.542 12.7041 23.0526V20.8654C11.8862 20.5688 11.0187 20.4307 10.1486 20.4585C9.05086 20.367 7.95806 20.6842 7.08192 21.3486C6.74433 21.6261 6.47457 21.9764 6.29305 22.3729C6.11152 22.7695 6.02299 23.2019 6.03414 23.6375C6.03414 24.9346 6.85192 25.9518 8.5897 26.7148C9.14496 26.9555 9.6685 27.2629 10.1486 27.6304C10.2755 27.7251 10.3786 27.848 10.4496 27.9892C10.5205 28.1305 10.5575 28.2863 10.5575 28.4442C10.5575 28.5985 10.5205 28.7507 10.4493 28.8878C10.3782 29.025 10.2751 29.1432 10.1486 29.2326C9.80751 29.4532 9.40475 29.5601 8.99858 29.5378C7.92214 29.5495 6.88448 29.1382 6.11081 28.3933V30.7585C6.96138 31.1706 7.89966 31.3713 8.84525 31.3435C9.91116 31.3921 10.9656 31.1075 11.8608 30.5296C12.2194 30.2562 12.5065 29.9008 12.6978 29.4935C12.8891 29.0862 12.9789 28.639 12.9597 28.1899C12.9845 27.5368 12.7557 26.8993 12.3208 26.4096C11.7138 25.79 10.9823 25.3047 10.1741 24.9854V24.9854ZM23.463 28.9783C24.0402 28.0005 24.3322 26.8821 24.3064 25.7484C24.3279 24.7778 24.1085 23.8169 23.6675 22.9509C23.2685 22.1567 22.6473 21.4943 21.8786 21.0434C21.0996 20.6041 20.2184 20.3761 19.323 20.3822C18.3502 20.3651 17.3898 20.6018 16.5375 21.0689C15.7387 21.5287 15.0907 22.2088 14.6719 23.0272C14.2105 23.9323 13.9822 24.9372 14.0075 25.9518C13.9927 26.8782 14.2031 27.7943 14.6208 28.6222C15.0083 29.408 15.6106 30.0691 16.3586 30.5296C17.1301 30.9957 18.0118 31.2502 18.9141 31.2672L21.0864 33.8104H24.1275L21.0608 30.9874C22.0723 30.6167 22.922 29.9061 23.463 28.9783ZM21.0864 28.317C20.8465 28.6006 20.5472 28.8285 20.2095 28.9849C19.8718 29.1413 19.5038 29.2223 19.1314 29.2223C18.7589 29.2223 18.3909 29.1413 18.0532 28.9849C17.7155 28.8285 17.4162 28.6006 17.1764 28.317C16.6432 27.5801 16.3897 26.6791 16.4608 25.7738C16.3902 24.8647 16.6535 23.961 17.2019 23.2306C17.4315 22.9235 17.7333 22.677 18.0808 22.513C18.4283 22.3489 18.811 22.2722 19.1953 22.2896C19.5677 22.2782 19.9374 22.358 20.2716 22.5221C20.6058 22.6862 20.8944 22.9295 21.1119 23.2306C21.6154 23.9804 21.8578 24.8738 21.8019 25.7738C21.9042 26.7056 21.6486 27.6413 21.0864 28.3933V28.317Z" fill="#F2F2F2"/>
<path d="M38.8454 45.4798L39.4587 43.4707L40.6598 42.784L42.7298 43.6996L44.0587 42.3517V42.1991L43.1132 40.3934L43.6754 39.1218L45.7454 38.3843H45.9754V36.5277H45.7198L43.6754 35.9174L43.0109 34.7475L43.9054 32.6621L42.5509 31.365H42.3976L40.5832 32.2806L39.3309 31.5176L38.5132 29.2542H36.622V29.5339L36.0087 31.543L34.7054 32.1025L32.482 31.0853L31.1787 32.4332L31.3065 32.6875L32.2776 34.5695L31.7665 35.8665L29.3643 36.604V38.486H29.6454L31.6643 39.0964L32.2265 40.3934L31.2298 42.5806L32.5843 43.903L32.8143 43.7759L34.7054 42.8095L36.0087 43.3181L36.8776 45.5816H38.7432L38.8454 45.4798ZM35.7787 39.4779C35.2636 38.9754 34.9702 38.2898 34.963 37.572C34.9558 36.8542 35.2354 36.1629 35.7404 35.6503C36.2453 35.1377 36.9342 34.8457 37.6555 34.8385C38.3768 34.8314 39.0714 35.1097 39.5865 35.6122C39.8415 35.861 40.0449 36.1574 40.1848 36.4844C40.3248 36.8114 40.3987 37.1626 40.4022 37.518C40.4058 37.8735 40.339 38.2261 40.2056 38.5558C40.0722 38.8855 39.8748 39.1859 39.6248 39.4397C39.3748 39.6935 39.077 39.8959 38.7484 40.0351C38.4198 40.1744 38.0668 40.2479 37.7097 40.2515C37.3526 40.255 36.9982 40.1885 36.6669 40.0558C36.3356 39.9231 36.0338 39.7267 35.7787 39.4779V39.4779Z" fill="#B3B3B3"/>
<defs>
<linearGradient id="paint0_linear_1915_132715" x1="2.27734" y1="26.5318" x2="34.6818" y2="26.5318" gradientUnits="userSpaceOnUse">
<stop stop-color="#005BA1"/>
<stop offset="0.07" stop-color="#0060A9"/>
<stop offset="0.36" stop-color="#0071C8"/>
<stop offset="0.52" stop-color="#0078D4"/>
<stop offset="0.64" stop-color="#0074CD"/>
<stop offset="0.82" stop-color="#006ABB"/>
<stop offset="1" stop-color="#005BA1"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>SQL Server on Azure Virtual Machines</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Get industry-leading performance for SQL.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>


 </div>



 



 <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.6883 2.3125H25.4766V22.4973H45.6883V2.3125Z" fill="#7DBD38"/>
<path d="M22.7118 2.3125H2.5V22.4973H22.7118V2.3125Z" fill="#F35013"/>
<path d="M45.6883 25.3125H25.4766V45.4973H45.6883V25.3125Z" fill="#FFB900"/>
<path d="M22.7118 25.3125H2.5V45.4973H22.7118V25.3125Z" fill="#299FDC"/>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Windows Virtual Machines</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Deploy scalable, protected virtualized infrastructure.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4614 26.5302H14.5239C14.3963 26.5175 14.2785 26.4559 14.1951 26.358C14.1116 26.2602 14.069 26.1338 14.076 26.0052C14.0619 25.9392 14.0619 25.8711 14.076 25.8051L23.6309 1.80199C23.6618 1.71413 23.7191 1.63807 23.7949 1.58433C23.8707 1.53058 23.9612 1.5018 24.0539 1.50195H33.4346C33.4967 1.50515 33.5576 1.52063 33.6137 1.54751C33.6699 1.57439 33.7202 1.61214 33.7618 1.65859C33.8034 1.70505 33.8355 1.75929 33.8562 1.81822C33.8769 1.87716 33.8858 1.93961 33.8825 2.00202C33.9081 2.0919 33.9081 2.18718 33.8825 2.27706L22.6356 21.0795H33.5341C33.5962 21.0827 33.6571 21.0982 33.7133 21.1251C33.7694 21.152 33.8197 21.1897 33.8613 21.2362C33.9029 21.2826 33.935 21.3369 33.9557 21.3958C33.9764 21.4547 33.9854 21.5172 33.982 21.5796C33.9785 21.7066 33.9349 21.8291 33.8576 21.9296L15.7432 45.9578C15.569 46.0828 14.3497 47.383 14.9469 45.4327L22.4614 26.5302Z" fill="url(#paint0_radial_1915_132730)"/>
<path d="M15.3254 34.2993L13.8495 35.7865C13.7237 35.9133 13.5529 35.9847 13.3748 35.9849C13.1966 35.9852 13.0256 35.9143 12.8994 35.7878L1.99319 24.8592C1.74085 24.6064 1.59881 24.2631 1.59831 23.905C1.59782 23.547 1.7389 23.2033 1.99053 22.9498L3.46641 21.4626L15.3417 33.3623C15.4602 33.4902 15.5248 33.6593 15.5217 33.8341C15.5187 34.0089 15.4483 34.1756 15.3254 34.2993Z" fill="#50E6FF"/>
<path d="M13.6346 12.1827L15.097 13.6481C15.2232 13.7745 15.2942 13.9461 15.2944 14.1251C15.2947 14.3042 15.2241 14.476 15.0983 14.6028L3.43185 26.3587L1.95184 24.8756C1.69951 24.6228 1.55747 24.2795 1.55697 23.9215C1.55647 23.5634 1.69756 23.2197 1.94919 22.9662L12.6669 12.1663C12.7306 12.102 12.8067 12.0513 12.8904 12.0171C12.9741 11.983 13.0639 11.9662 13.1542 11.9677C13.2445 11.9692 13.3337 11.9891 13.4162 12.026C13.4988 12.0629 13.573 12.1162 13.6346 12.1827Z" fill="#1490DF"/>
<path d="M44.5752 21.6021L46.0511 23.0892C46.3027 23.3428 46.4438 23.6864 46.4433 24.0445C46.4428 24.4026 46.3008 24.7458 46.0484 24.9987L35.1422 35.9273C35.016 36.0537 34.845 36.1246 34.6669 36.1244C34.4887 36.1241 34.3179 36.0528 34.1921 35.926L32.7162 34.4388C32.5904 34.312 32.5198 34.1402 32.5201 33.9611C32.5203 33.7821 32.5914 33.6105 32.7175 33.4841L44.5752 21.6021Z" fill="#50E6FF"/>
<path d="M45.9704 24.8429L44.4904 26.3259L32.8415 14.5878C32.7157 14.461 32.6452 14.2892 32.6454 14.1101C32.6457 13.9311 32.7167 13.7595 32.8429 13.633L34.3229 12.15C34.449 12.0236 34.62 11.9527 34.7982 11.9529C34.9764 11.9532 35.1472 12.0246 35.273 12.1513L45.9907 22.9512C46.2423 23.2047 46.3834 23.5484 46.3829 23.9064C46.3824 24.2645 46.2404 24.6078 45.988 24.8606L45.9704 24.8429Z" fill="#1490DF"/>
<defs>
<radialGradient id="paint0_radial_1915_132730" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0853 23.6859) scale(15.6317 17.7293)">
<stop offset="0.2" stop-color="#FFD70F"/>
<stop offset="0.44" stop-color="#FFCB12"/>
<stop offset="0.87" stop-color="#FEAC19"/>
<stop offset="1" stop-color="#FEA11B"/>
</radialGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Functions</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Trigger apps with serverless computing.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.688 42.9198H5.08V28.3998H8.072C7.71208 27.4749 7.53256 26.4893 7.544 25.4958V25.3198H2V45.9998H22.768V33.6798H19.688V42.9198Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.2804 28.3998H42.9204V43.0078H28.3124V33.7678H25.2324V45.9998H46.0004V25.3198H39.4884C39.9874 26.2077 40.2593 27.2057 40.2804 28.2238V28.3998Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.08 19.6V5.08H19.688V13.528C20.605 12.8486 21.6539 12.369 22.768 12.12V2H2V22.68H7.984C8.4064 21.5554 9.06728 20.5346 9.92 19.688L5.08 19.6Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.3124 11.7682V5.08024H42.9204V19.6882H36.4964C36.7842 20.6598 36.9329 21.6674 36.9364 22.6802V22.7682H46.0004V2.00024H25.2324V11.5922C25.4964 11.5922 25.6724 11.5042 25.9364 11.5042C26.7328 11.5482 27.5257 11.6371 28.3124 11.7682Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.9044 28.1361C37.9088 26.3418 36.4586 24.8845 34.6643 24.8801H34.6484H34.2084C34.4179 24.1348 34.5358 23.3665 34.5604 22.5921C34.5886 17.8093 30.7351 13.9092 25.9523 13.881C22.1815 13.8581 18.8304 16.2781 17.6644 19.8641C17.0396 19.6547 16.3875 19.5359 15.7284 19.5121C12.4231 19.5183 9.74971 22.2023 9.75587 25.5076C9.76291 28.8032 12.4328 31.474 15.7284 31.4801H34.9124C36.6214 31.2989 37.9141 29.8539 37.9044 28.1361Z" fill="#61B3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8963 31.4801C16.5749 29.1279 16.5995 25.3395 18.9518 23.018C19.7385 22.241 20.7241 21.698 21.8003 21.4481C22.433 21.2888 23.0913 21.2589 23.7363 21.3601C24.0118 18.3303 25.8457 15.663 28.5763 14.3201C27.7262 14.0315 26.8348 13.8828 25.9363 13.8801C22.199 13.888 18.8928 16.3054 17.7523 19.8641C17.1266 19.6547 16.4754 19.5359 15.8163 19.5121C12.511 19.5183 9.8376 22.2032 9.84376 25.5076C9.84992 28.8032 12.5198 31.474 15.8163 31.4801H18.8963Z" fill="#80C2DC"/>
</svg>



       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure App Service</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"6.3rem"}}>Expand apps to additional locations.</p>
         
         <p><u>Explore the product</u></p>
         </div>

 </div>
 </div>




</div>
 
</div>




</CustomTabPanel>


<CustomTabPanel value={value} index={3}>

<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

<div style={{width:"500px",height:"790px", border:"1px solid #000", 
 backgroundColor:"#000",
  borderRadius:"2rem",
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-containers-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fit=constrain")',
backgroundSize: '100% 100%',
backgroundRepeat: 'no-repeat',
  }}>
 

 <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>




 <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
 <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
 <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
   <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
   <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
 </div>
 </div>

 </div>
 
  
  
 
  
</div>



<div className='b2' style={{display:"flex", flexDirection:"column"}}>
 
 <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




 <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.688 42.9198H5.08V28.3998H8.072C7.71208 27.4749 7.53256 26.4893 7.544 25.4958V25.3198H2V45.9998H22.768V33.6798H19.688V42.9198Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.2804 28.3998H42.9204V43.0078H28.3124V33.7678H25.2324V45.9998H46.0004V25.3198H39.4884C39.9874 26.2077 40.2593 27.2057 40.2804 28.2238V28.3998Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.08 19.6V5.08H19.688V13.528C20.605 12.8486 21.6539 12.369 22.768 12.12V2H2V22.68H7.984C8.4064 21.5554 9.06728 20.5346 9.92 19.688L5.08 19.6Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.3124 11.7682V5.08024H42.9204V19.6882H36.4964C36.7842 20.6598 36.9329 21.6674 36.9364 22.6802V22.7682H46.0004V2.00024H25.2324V11.5922C25.4964 11.5922 25.6724 11.5042 25.9364 11.5042C26.7328 11.5482 27.5257 11.6371 28.3124 11.7682Z" fill="#9FA0A1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.9044 28.1361C37.9088 26.3418 36.4586 24.8845 34.6643 24.8801H34.6484H34.2084C34.4179 24.1348 34.5358 23.3665 34.5604 22.5921C34.5886 17.8093 30.7351 13.9092 25.9523 13.881C22.1815 13.8581 18.8304 16.2781 17.6644 19.8641C17.0396 19.6547 16.3875 19.5359 15.7284 19.5121C12.4231 19.5183 9.74971 22.2023 9.75587 25.5076C9.76291 28.8032 12.4328 31.474 15.7284 31.4801H34.9124C36.6214 31.2989 37.9141 29.8539 37.9044 28.1361Z" fill="#61B3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8963 31.4801C16.5749 29.1279 16.5995 25.3395 18.9518 23.018C19.7385 22.241 20.7241 21.698 21.8003 21.4481C22.433 21.2888 23.0913 21.2589 23.7363 21.3601C24.0118 18.3303 25.8457 15.663 28.5763 14.3201C27.7262 14.0315 26.8348 13.8828 25.9363 13.8801C22.199 13.888 18.8928 16.3054 17.7523 19.8641C17.1266 19.6547 16.4754 19.5359 15.8163 19.5121C12.511 19.5183 9.8376 22.2032 9.84376 25.5076C9.84992 28.8032 12.5198 31.474 15.8163 31.4801H18.8963Z" fill="#80C2DC"/>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure AI services</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Create intelligent apps with APIs and customizable models.</p>
         
         <p><u>Explore the product</u></p>
         </div>



 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4614 26.5302H14.5239C14.3963 26.5175 14.2785 26.4559 14.1951 26.358C14.1116 26.2602 14.069 26.1338 14.076 26.0052C14.0619 25.9392 14.0619 25.8711 14.076 25.8051L23.6309 1.80199C23.6618 1.71413 23.7191 1.63807 23.7949 1.58433C23.8707 1.53058 23.9612 1.5018 24.0539 1.50195H33.4346C33.4967 1.50515 33.5576 1.52063 33.6137 1.54751C33.6699 1.57439 33.7202 1.61214 33.7618 1.65859C33.8034 1.70505 33.8355 1.75929 33.8562 1.81822C33.8769 1.87716 33.8858 1.93961 33.8825 2.00202C33.9081 2.0919 33.9081 2.18718 33.8825 2.27706L22.6356 21.0795H33.5341C33.5962 21.0827 33.6571 21.0982 33.7133 21.1251C33.7694 21.152 33.8197 21.1897 33.8613 21.2362C33.9029 21.2826 33.935 21.3369 33.9557 21.3958C33.9764 21.4547 33.9854 21.5172 33.982 21.5796C33.9785 21.7066 33.9349 21.8291 33.8576 21.9296L15.7432 45.9578C15.569 46.0828 14.3497 47.383 14.9469 45.4327L22.4614 26.5302Z" fill="url(#paint0_radial_1915_132730)"/>
<path d="M15.3254 34.2993L13.8495 35.7865C13.7237 35.9133 13.5529 35.9847 13.3748 35.9849C13.1966 35.9852 13.0256 35.9143 12.8994 35.7878L1.99319 24.8592C1.74085 24.6064 1.59881 24.2631 1.59831 23.905C1.59782 23.547 1.7389 23.2033 1.99053 22.9498L3.46641 21.4626L15.3417 33.3623C15.4602 33.4902 15.5248 33.6593 15.5217 33.8341C15.5187 34.0089 15.4483 34.1756 15.3254 34.2993Z" fill="#50E6FF"/>
<path d="M13.6346 12.1827L15.097 13.6481C15.2232 13.7745 15.2942 13.9461 15.2944 14.1251C15.2947 14.3042 15.2241 14.476 15.0983 14.6028L3.43185 26.3587L1.95184 24.8756C1.69951 24.6228 1.55747 24.2795 1.55697 23.9215C1.55647 23.5634 1.69756 23.2197 1.94919 22.9662L12.6669 12.1663C12.7306 12.102 12.8067 12.0513 12.8904 12.0171C12.9741 11.983 13.0639 11.9662 13.1542 11.9677C13.2445 11.9692 13.3337 11.9891 13.4162 12.026C13.4988 12.0629 13.573 12.1162 13.6346 12.1827Z" fill="#1490DF"/>
<path d="M44.5752 21.6021L46.0511 23.0892C46.3027 23.3428 46.4438 23.6864 46.4433 24.0445C46.4428 24.4026 46.3008 24.7458 46.0484 24.9987L35.1422 35.9273C35.016 36.0537 34.845 36.1246 34.6669 36.1244C34.4887 36.1241 34.3179 36.0528 34.1921 35.926L32.7162 34.4388C32.5904 34.312 32.5198 34.1402 32.5201 33.9611C32.5203 33.7821 32.5914 33.6105 32.7175 33.4841L44.5752 21.6021Z" fill="#50E6FF"/>
<path d="M45.9704 24.8429L44.4904 26.3259L32.8415 14.5878C32.7157 14.461 32.6452 14.2892 32.6454 14.1101C32.6457 13.9311 32.7167 13.7595 32.8429 13.633L34.3229 12.15C34.449 12.0236 34.62 11.9527 34.7982 11.9529C34.9764 11.9532 35.1472 12.0246 35.273 12.1513L45.9907 22.9512C46.2423 23.2047 46.3834 23.5484 46.3829 23.9064C46.3824 24.2645 46.2404 24.6078 45.988 24.8606L45.9704 24.8429Z" fill="#1490DF"/>
<defs>
<radialGradient id="paint0_radial_1915_132730" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0853 23.6859) scale(15.6317 17.7293)">
<stop offset="0.2" stop-color="#FFD70F"/>
<stop offset="0.44" stop-color="#FFCB12"/>
<stop offset="0.87" stop-color="#FEAC19"/>
<stop offset="1" stop-color="#FEA11B"/>
</radialGradient>
</defs>
</svg>



       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Functions</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Trigger apps with serverless computing.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>











 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


              
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7599 4L8.4834 5.34196V15.2168L15.7599 16.7613L23.0619 13.8495V6.48136L15.7599 4Z" fill="url(#paint0_linear_1915_132746)"/>
<path d="M8.4834 5.34884V15.2237L15.8362 16.7682V4.10815L8.4834 5.34884ZM11.5874 14.4641L9.52653 14.0589V6.46292L11.5874 6.13376V14.4641ZM14.7931 15.0464L12.427 14.6666V5.98184L14.7931 5.57672V15.0464Z" fill="#341A6E"/>
<path d="M31.506 4.12866L24.2295 5.47062V15.3454L31.506 16.89L38.7825 13.9528V6.61002L31.506 4.12866Z" fill="url(#paint1_linear_1915_132746)"/>
<path d="M24.2295 5.46798V15.3428L31.5314 16.8873V4.22729L24.2295 5.46798ZM27.308 14.5832L25.2472 14.1781V6.58206L27.308 6.2529V14.5832ZM30.5138 15.1655L28.1476 14.7857V6.10098L30.5138 5.67054V15.1655Z" fill="#341A6E"/>
<path d="M8.30288 17.6294L1.02637 18.9714V28.8462L8.30288 30.3907L15.6048 27.4789V20.1108L8.30288 17.6294Z" fill="url(#paint2_linear_1915_132746)"/>
<path d="M1 18.9665V28.7654L8.35284 30.3099V17.6499L1 18.9665ZM4.07852 28.1071L2.01769 27.6766V20.0806L4.07852 19.7261V28.1071ZM7.3097 28.7654L4.94356 28.3856V19.5995L7.3097 19.1944V28.7654Z" fill="#341A6E"/>
<path d="M24.0001 17.5212L16.7236 18.8632V28.738L24.0001 30.3079L31.2767 27.3707V20.0026L24.0001 17.5212Z" fill="url(#paint3_linear_1915_132746)"/>
<path d="M16.7236 18.8653V28.7654L24.051 30.3099V17.6499L16.7236 18.8653ZM19.8022 28.0058L17.7413 27.5754V19.9793L19.8022 19.6249V28.0058ZM23.0079 28.5628L20.6418 28.183V19.4983L23.0079 19.0931V28.5628Z" fill="#341A6E"/>
<path d="M39.6984 17.6499L32.4219 18.9919V28.8667L39.6984 30.4112L47.0003 27.4994V20.1313L39.6984 17.6499Z" fill="url(#paint4_linear_1915_132746)"/>
<path d="M32.4219 18.9919V28.7654L39.7747 30.3099V17.6499L32.4219 18.9919ZM35.5258 28.1324L33.465 27.702V20.1059L35.5258 19.7515V28.1324ZM38.7316 28.6894L36.3654 28.3096V19.6249L38.7316 19.2197V28.6894Z" fill="#341A6E"/>
<path d="M15.5812 31.3984L8.30469 32.7151V42.5899L15.5812 44.1597L22.8832 41.2226V33.8798L15.5812 31.3984Z" fill="url(#paint5_linear_1915_132746)"/>
<path d="M8.30469 32.7155V42.5903L15.6575 44.1602V31.2976L8.30469 32.7155ZM11.4087 41.8561L9.34782 41.4256V33.8296L11.4087 33.4751V41.8561ZM14.6144 42.4384L12.2483 42.0586V33.3485L14.6144 32.9434V42.4384Z" fill="#341A6E"/>
<path d="M31.3009 31.4971L24.0244 32.839V42.7138L31.3009 44.2584L38.6029 41.3466V33.9784L31.3009 31.4971Z" fill="url(#paint6_linear_1915_132746)"/>
<path d="M24.0244 32.8459V42.7207L31.3772 44.2652V31.6052L24.0244 32.8459ZM27.1284 41.9864L25.0675 41.556V33.96L27.1284 33.6055V41.9864ZM30.3341 42.5435L27.968 42.1637V33.4789L30.3341 33.0738V42.5435Z" fill="#341A6E"/>
<defs>
<linearGradient id="paint0_linear_1915_132746" x1="8.4834" y1="10.3806" x2="23.0619" y2="10.3806" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint1_linear_1915_132746" x1="157.099" y1="52.494" x2="240.342" y2="52.494" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint2_linear_1915_132746" x1="1.17215" y1="134.012" x2="84.561" y2="134.012" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint3_linear_1915_132746" x1="106.661" y1="133.624" x2="189.905" y2="133.624" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint4_linear_1915_132746" x1="212.466" y1="134.161" x2="296" y2="134.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint5_linear_1915_132746" x1="50.1449" y1="217.203" x2="133.679" y2="217.203" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
<linearGradient id="paint6_linear_1915_132746" x1="155.959" y1="217.812" x2="239.494" y2="217.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#B77AF4"/>
<stop offset="1" stop-color="#773ADC"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Kubernetes Fleet Manager </p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Azure Kubernetes Fleet Manager PREVIEW</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>


 </div>



 



 <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.0923 12.7105C38.7772 7.04203 33.9172 2.7015 28.2373 3.01607C26.7026 3.10104 25.2065 3.52768 23.8586 4.26471C22.5106 5.00174 21.3451 6.03048 20.4473 7.27552C16.8863 4.52433 11.7648 5.17496 9.00799 8.72874C8.24916 9.70696 7.7238 10.845 7.47184 12.0562C7.21988 13.2675 7.24796 14.5202 7.55394 15.719C3.65708 17.4788 1.92735 22.0577 3.69055 25.9469C4.30415 27.3003 5.29557 28.4486 6.54613 29.2543C7.79669 30.0599 9.25341 30.4889 10.7419 30.4898H36.9727C41.9622 30.4859 46.0038 26.4461 46 21.4666C45.9984 19.4455 45.3164 17.4835 44.0635 15.8956C42.8106 14.3077 41.0594 13.186 39.091 12.7105H39.0923Z" fill="white"/>
<path opacity="0.6" d="M39.0923 12.7105C38.7772 7.04203 33.9172 2.7015 28.2373 3.01607C26.7026 3.10104 25.2065 3.52768 23.8586 4.26471C22.5106 5.00174 21.3451 6.03048 20.4473 7.27552C16.8863 4.52433 11.7648 5.17496 9.00799 8.72874C8.24916 9.70696 7.7238 10.845 7.47184 12.0562C7.21988 13.2675 7.24796 14.5202 7.55394 15.719C3.65708 17.4788 1.92735 22.0577 3.69055 25.9469C4.30415 27.3003 5.29557 28.4486 6.54613 29.2543C7.79669 30.0599 9.25341 30.4889 10.7419 30.4898H36.9727C41.9622 30.4859 46.0038 26.4461 46 21.4666C45.9984 19.4455 45.3164 17.4835 44.0635 15.8956C42.8106 14.3077 41.0594 13.186 39.091 12.7105H39.0923Z" fill="#25A8E0"/>
<path d="M14.1408 21.8726C13.9119 21.8727 13.6923 21.9635 13.5304 22.1251C13.3685 22.2867 13.2775 22.5058 13.2773 22.7343V45.1383C13.2775 45.3668 13.3685 45.586 13.5304 45.7475C13.6923 45.9091 13.9119 46 14.1408 46.0001H34.8626C35.0915 46 35.3111 45.9091 35.473 45.7475C35.6349 45.586 35.7259 45.3668 35.726 45.1383V22.7343C35.7259 22.5058 35.6349 22.2867 35.473 22.1251C35.3111 21.9635 35.0915 21.8727 34.8626 21.8726H14.1408Z" fill="#672A7B"/>
<path opacity="0.15" d="M14.1408 21.8726C13.9119 21.8727 13.6923 21.9635 13.5304 22.1251C13.3685 22.2867 13.2775 22.5058 13.2773 22.7343V45.1383C13.2775 45.3668 13.3685 45.586 13.5304 45.7475C13.6923 45.9091 13.9119 46 14.1408 46.0001H16.7313L32.2736 21.8726H14.1408Z" fill="white"/>
<path d="M22.7741 21.8729V15.8409H20.1836L24.5011 9.80859L28.8186 15.8409H26.2281V21.8729H22.7741Z" fill="white"/>
<path opacity="0.3" d="M31.4098 24.4578H15.8672V43.4159H33.1367V24.4578H31.4098ZM21.0481 41.6923H17.5942V26.1813H21.0481V41.6923ZM26.2291 41.6923H22.7751V26.1813H26.2304L26.2291 41.6923ZM31.4101 41.6923H27.9559V26.1813H31.4099L31.4101 41.6923Z" fill="#B92025"/>
<path d="M31.4098 24.4578H15.8672V43.4159H33.1367V24.4578H31.4098ZM21.0481 41.6923H17.5942V26.1813H21.0481V41.6923ZM26.2291 41.6923H22.7751V26.1813H26.2304L26.2291 41.6923ZM31.4101 41.6923H27.9559V26.1813H31.4099L31.4101 41.6923Z" fill="white"/>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Container Instances</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Run containers without managing servers.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.166 37.0321C43.229 36.8191 42.2495 36.6913 41.2699 36.6913C39.5662 36.6913 38.033 36.9895 36.883 37.458C36.7552 37.5006 36.67 37.6709 36.67 37.7987C36.67 37.8413 36.67 37.9265 36.7126 37.9691C36.8404 38.3524 36.6275 38.7783 35.5201 39.0338C33.9016 39.3746 32.8369 41.0782 32.2832 41.6319C31.6017 42.2707 29.6425 42.6967 29.9407 42.3133C30.1536 42.0152 31.048 41.0356 31.6017 40.0134C32.0702 39.0764 32.4961 38.8209 33.0924 37.9265C33.2628 37.6709 33.9442 36.7765 34.1146 36.0525C34.3275 35.371 34.2424 34.4766 34.3275 34.0933C34.4553 33.5822 34.9238 32.4322 34.9664 31.7934C35.009 31.4526 33.4331 32.3045 32.7091 32.3045C31.985 32.3045 31.261 31.8786 30.6221 31.836C29.8129 31.7934 29.3018 32.4748 28.5778 32.3471C28.1519 32.2619 27.8111 31.9211 27.0871 31.8786C26.0649 31.836 24.7872 32.4322 22.4021 32.3896C20.0596 32.3045 17.8874 29.4509 17.6319 28.9824C17.2912 28.4287 16.8653 28.4287 16.3968 28.8546C15.9283 29.2805 15.3746 28.9398 15.2042 28.6416C14.8635 28.1306 14.0543 26.5973 12.7765 26.2566C11.0303 25.7881 10.1359 27.2361 10.2637 28.3435C10.3914 29.4935 11.1155 29.8342 11.4562 30.4305C11.7969 31.0267 11.9673 31.4526 12.6062 31.7082C13.0747 31.9211 13.245 32.1767 13.1172 32.56C12.9895 32.9007 12.521 32.9859 12.2228 32.9859C11.5414 33.0285 11.0729 32.8156 10.7322 32.6026C10.3488 32.3471 10.0081 32.0063 9.66738 31.4101C9.28406 30.7286 8.6452 30.4731 7.87856 30.4731C7.53784 30.4731 7.19711 30.5582 6.89897 30.7286C5.74902 31.3249 4.38611 31.6656 2.89542 31.6656H1.23438C4.4287 41.1634 13.4154 47.9779 23.9779 47.9779C32.4535 47.9779 39.8644 43.6337 44.166 37.0321Z" fill="white"/>
<path d="M44.1668 37.033C43.2298 36.8201 42.2502 36.6923 41.2706 36.6923C39.567 36.6923 38.0337 36.9904 36.8838 37.4589C36.756 37.5015 36.6708 37.6719 36.6708 37.7997C36.6708 37.8422 36.6708 37.9274 36.7134 37.97C36.8412 38.3533 36.6282 38.7792 35.5209 39.0348C33.9024 39.3755 32.8376 41.0792 32.2839 41.6328C31.6025 42.3143 29.6433 42.6976 29.9414 42.3143C30.1544 42.0162 31.0488 41.0366 31.6025 40.0144C32.071 39.0774 32.4969 38.8218 33.0932 37.9274C33.2635 37.6719 33.945 36.7775 34.1154 36.0534C34.3283 35.3294 34.2431 34.4776 34.3283 34.0942C34.4561 33.5832 34.9246 32.4332 34.9672 31.7943C35.0098 31.411 33.4339 32.3054 32.7099 32.3054C31.9858 32.3054 31.2618 31.8795 30.6229 31.8369C29.8137 31.7943 29.3026 32.4758 28.5785 32.348C28.1526 32.2628 27.8119 31.9221 27.0878 31.8795C26.0657 31.8369 24.7879 32.4758 22.4028 32.3906C20.0603 32.3054 17.8882 29.4518 17.6327 28.9833C17.2919 28.4296 16.866 28.4296 16.3975 28.8556C15.929 29.2815 15.3753 28.9407 15.205 28.6426C14.8642 28.1315 14.055 26.5982 12.7773 26.2575C11.0311 25.789 10.1366 27.2371 10.2644 28.3445C10.3922 29.4944 11.1162 29.8351 11.457 30.4314C11.7977 31.0277 11.9681 31.4536 12.6069 31.7092C13.0754 31.8795 13.2458 32.1777 13.118 32.561C12.9902 32.9017 12.5217 32.9869 12.2236 32.9869C11.5421 33.0295 11.0736 32.8165 10.7329 32.6036C10.3496 32.348 10.0089 32.0073 9.66815 31.411C9.28483 30.7721 8.64596 30.474 7.87933 30.474C7.5386 30.474 7.19787 30.5592 6.89973 30.7296C5.74978 31.3258 4.38687 31.7092 2.89618 31.7092H1.23514C0.42591 29.2815 0 26.6834 0 24.0002C0 10.7544 10.7329 0.0214844 24.0213 0.0214844C37.2671 0.0214844 48 10.7544 48 24.0002C48 28.813 46.5945 33.285 44.1668 37.033Z" fill="black"/>
<path d="M29.3068 34.859C29.4346 34.9868 29.6475 35.3701 29.392 35.8812C29.2642 36.1367 29.0938 36.3497 28.7957 36.5626C28.455 36.8182 27.8161 37.1589 26.8791 36.5626C26.4106 36.2645 26.368 36.1367 25.6866 36.2219C25.2181 36.2645 25.0051 35.796 25.1755 35.4127C25.3458 35.0294 26.0699 34.6886 26.9217 35.1997C27.305 35.4127 27.9439 35.9238 28.4976 35.4979C28.7105 35.3275 28.8383 35.1997 29.179 34.859L29.2216 34.8164C29.2642 34.8164 29.2642 34.8164 29.3068 34.859Z" fill="black"/>
<path d="M37.5234 17.6109C37.2679 18.4201 36.9697 19.4423 35.4364 20.209C35.2235 20.3367 35.1383 20.1238 35.2235 19.9534C35.7772 18.9738 35.9049 18.7609 36.0753 18.3776C36.2883 17.8239 36.416 17.0146 35.9475 15.3962C35.0957 12.1593 33.2217 7.815 31.8588 6.4095C30.5385 5.04659 28.1534 4.66327 25.9813 5.21695C25.172 5.42991 23.6388 6.23913 20.7426 5.60027C15.7594 4.4929 14.9928 6.96318 14.6947 8.07054C14.3965 9.17791 13.7151 12.2445 13.7151 12.2445C13.5021 13.5222 13.204 15.6943 20.9555 17.185C24.5758 17.8665 24.7461 18.8035 24.9165 19.4849C25.2146 20.6775 25.6831 21.3589 26.1942 21.7422C26.7053 22.083 26.1942 22.3811 25.6405 22.4237C24.1073 22.5941 18.4001 20.933 15.0354 19.059C12.267 17.3554 12.2244 15.8647 12.8632 14.587C8.64674 14.0759 5.5376 14.8851 4.98392 16.8869C4.00433 20.2516 12.4373 26.0439 22.0203 28.9401C32.0292 31.9641 42.3788 29.8345 43.5287 23.5311C44.0398 20.6775 41.6121 18.5479 37.5234 17.6109ZM25.0443 6.878C25.0017 6.878 24.9591 6.83541 24.9591 6.79282C24.9591 6.75022 24.9591 6.75022 25.0017 6.70763C25.5553 6.4095 26.322 6.19654 27.259 6.11136C27.5145 6.06877 27.8127 6.06877 28.0682 6.06877H28.196C29.7293 6.11136 30.9644 6.70763 30.9644 7.43168C30.9644 8.15573 29.6867 8.70941 28.1534 8.66682C27.6423 8.66682 27.1738 8.58164 26.7905 8.45386C26.7479 8.45386 26.7053 8.41127 26.7053 8.36868C26.7053 8.32609 26.7479 8.2835 26.7905 8.2835C27.7275 8.07054 28.4089 7.68723 28.3663 7.3465C28.3238 6.878 27.046 6.66504 25.5553 6.79282C25.3424 6.83541 25.2146 6.83541 25.0443 6.878ZM22.1481 11.4352C19.3797 11.6482 19.0815 11.9463 18.5704 12.5C17.8464 13.2666 16.8668 11.4778 16.8668 11.4778C16.2705 11.35 15.5891 10.413 15.9724 9.56123C16.3557 8.70941 17.0372 8.96495 17.2501 9.2205C17.5057 9.56123 18.0593 10.0723 18.7834 10.0723C19.5074 10.0723 20.3593 9.90196 21.5092 9.90196C22.7018 9.90196 23.511 10.3279 23.5536 10.7112C23.5962 11.0519 23.4684 11.35 22.1481 11.4352Z" fill="#E93442"/>
</svg>



       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Red Hat OpenShift</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"6rem"}}>Build, deploy, and scale apps on fully managed OpenShift clusters.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="29" height="30" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.585449 0.585449V13.2802H13.2786V0.585449H0.585449ZM11.0448 11.0465H2.8175V2.81919H11.0448V11.0465Z" fill="url(#paint0_linear_241_47516)"/>
<path d="M0.585449 27.4138H13.2786V14.7207H0.585449V27.4138ZM2.8175 16.9544H11.0448V25.1901H2.8175V16.9544Z" fill="url(#paint1_linear_241_47516)"/>
<path d="M14.7241 0.585449V13.2802H27.4189V0.585449H14.7241ZM25.1852 11.0465H16.9494V2.81919H25.1852V11.0465Z" fill="url(#paint2_linear_241_47516)"/>
<path d="M14.7241 27.4138H27.4189V14.7207H14.7241V27.4138ZM16.9579 16.9544H25.1936V25.1901H16.9579V16.9544Z" fill="url(#paint3_linear_241_47516)"/>
<path d="M22.9039 13.2421C22.9039 13.1816 22.9039 13.1194 22.9039 13.0539C22.8686 11.5496 22.3207 9.75957 22.0837 8.76287C21.8467 7.76618 21.2736 6.19471 21.2736 6.19471C21.2736 6.19471 20.9929 6.78295 20.8198 7.05524C20.6719 7.28886 20.4382 7.64856 20.3744 7.74605C18.9215 6.26878 17.0007 5.34192 14.9402 5.12388C12.8797 4.90584 10.8075 5.41013 9.07759 6.5506C7.34771 7.69106 6.0676 9.39687 5.45601 11.3765C4.84443 13.3562 4.93934 15.4868 5.72452 17.4043C6.5097 19.3218 7.93642 20.907 9.76085 21.8892C11.5853 22.8713 13.6942 23.1894 15.7271 22.789C17.76 22.3886 19.5908 21.2946 20.9066 19.694C22.2224 18.0935 22.9414 16.0856 22.9409 14.0136C22.9375 13.7547 22.9258 13.4976 22.9039 13.2421Z" fill="#5FB92D"/>
<path d="M8.62265 20.9919C9.05336 20.9919 9.40252 20.6427 9.40252 20.212C9.40252 19.7813 9.05336 19.4321 8.62265 19.4321C8.19193 19.4321 7.84277 19.7813 7.84277 20.212C7.84277 20.6427 8.19193 20.9919 8.62265 20.9919Z" fill="white"/>
<path d="M9.2242 18.948C9.2242 18.948 11.2075 18.553 12.7975 18.1076C14.3875 17.6622 15.9657 16.9664 17.0666 16.0688C18.1675 15.1713 19.0499 14.22 19.376 13.6905C19.7029 13.1721 20.0025 12.6368 20.2735 12.0871C20.3113 12.007 20.3357 11.9213 20.3458 11.8333C20.1788 12.5097 19.9539 13.1704 19.6735 13.8082L19.292 14.5797C19.292 14.5797 18.3961 16.0201 17.5893 16.6991C16.7826 17.3781 15.722 18.3933 13.1219 19.2539C10.5217 20.1144 10.3503 20.143 10.3503 20.143H15.8968C16.8935 20.143 18.7054 19.9245 19.892 19.2269C21.0786 18.5294 21.9576 17.0167 22.2568 15.6974C22.5363 14.3247 22.5699 12.9134 22.356 11.5291C22.1576 10.5055 21.5778 8.30372 21.4685 7.91379C21.3593 7.52385 21.1509 6.98096 21.1509 6.98096C20.7505 7.65239 20.2665 8.27025 19.7105 8.8197C18.835 9.63816 17.8023 10.27 16.675 10.6769C15.606 11.0669 14.3219 11.1492 13.1874 11.1812C12.0529 11.2131 10.7503 11.4081 9.70826 12.1157C8.66618 12.8233 8.24936 13.5376 7.85942 14.3527C7.46948 15.1679 7.61403 16.8084 7.85942 17.4521C8.04167 17.9331 8.36287 18.3491 8.78215 18.6471C8.92145 18.7587 9.06924 18.8593 9.2242 18.948V18.948Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_241_47516" x1="7.06478" y1="0.341739" x2="6.56055" y2="25.4691" gradientUnits="userSpaceOnUse">
<stop stop-color="#008BF0"/>
<stop offset="0.21" stop-color="#0085EB"/>
<stop offset="0.43" stop-color="#0081E6"/>
<stop offset="0.62" stop-color="#0375D3"/>
<stop offset="0.8" stop-color="#0062C6"/>
<stop offset="1" stop-color="#0050B3"/>
</linearGradient>
<linearGradient id="paint1_linear_241_47516" x1="6.79922" y1="1.00234" x2="6.9673" y2="26.3818" gradientUnits="userSpaceOnUse">
<stop stop-color="#008BF0"/>
<stop offset="0.21" stop-color="#0085EB"/>
<stop offset="0.43" stop-color="#0081E6"/>
<stop offset="0.62" stop-color="#0375D3"/>
<stop offset="0.8" stop-color="#0062C6"/>
<stop offset="1" stop-color="#0050B3"/>
</linearGradient>
<linearGradient id="paint2_linear_241_47516" x1="24.2355" y1="0.424096" x2="16.8066" y2="15.6804" gradientUnits="userSpaceOnUse">
<stop stop-color="#008BF0"/>
<stop offset="0.21" stop-color="#0085EB"/>
<stop offset="0.43" stop-color="#0081E6"/>
<stop offset="0.62" stop-color="#0375D3"/>
<stop offset="0.8" stop-color="#0062C6"/>
<stop offset="1" stop-color="#0050B3"/>
</linearGradient>
<linearGradient id="paint3_linear_241_47516" x1="21.1312" y1="1.59229" x2="21.0471" y2="27.3079" gradientUnits="userSpaceOnUse">
<stop stop-color="#008BF0"/>
<stop offset="0.21" stop-color="#0085EB"/>
<stop offset="0.43" stop-color="#0081E6"/>
<stop offset="0.62" stop-color="#0375D3"/>
<stop offset="0.8" stop-color="#0062C6"/>
<stop offset="1" stop-color="#0050B3"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Spring Apps</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"6rem"}}>Build or migrate Spring applications with a fully managed service.</p>
         
         <p><u>Explore the product</u></p>
         </div>

 </div>
 </div>




</div>
 
</div>




</CustomTabPanel>



<CustomTabPanel value={value} index={4}>

<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

<div style={{width:"500px",height:"790px", border:"1px solid #000", 
 backgroundColor:"#000",
  borderRadius:"2rem",
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-hybrid-multicloud-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fit=constrain")',
backgroundSize: '100% 100%',
backgroundRepeat: 'no-repeat',
  }}>
 

 <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>




 <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
 <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
 <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
   <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
   <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
 </div>
 </div>

 </div>
 
  
  
 
  
</div>



<div className='b2' style={{display:"flex", flexDirection:"column"}}>
 
 <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




 <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0003 14.0106C14.9536 14.0106 7.61914 11.4796 7.61914 8.13867V39.4216C7.61914 42.636 14.8258 45.2429 23.7703 45.2935H24.0003C33.0469 45.2935 40.3814 42.7625 40.3814 39.4216V8.13867C40.3814 11.4036 33.0469 14.0106 24.0003 14.0106Z" fill="url(#paint0_linear_1915_133542)"/>
<path d="M40.3814 8.13799C40.3814 11.403 33.0469 14.0099 24.0003 14.0099C14.9536 14.0099 7.61914 11.4789 7.61914 8.13799C7.61914 4.79709 14.9536 2.26611 24.0003 2.26611C33.0469 2.26611 40.3814 4.79709 40.3814 8.13799Z" fill="#E8E8E8"/>
<path d="M36.5734 7.65682C36.5734 9.73223 30.9256 11.4027 24.0001 11.4027C17.0745 11.4027 11.4268 9.73223 11.4268 7.65682C11.4268 5.58142 17.0745 3.93628 24.0001 3.93628C30.9256 3.93628 36.5734 5.60673 36.5734 7.65682Z" fill="#50E6FF"/>
<path d="M24.0026 8.59632C20.63 8.51101 17.2676 8.99897 14.0615 10.039C17.2707 11.0597 20.6341 11.5221 24.0026 11.4057C27.378 11.5036 30.744 11.0066 33.9437 9.93774C30.7285 8.94583 27.3686 8.49246 24.0026 8.59632V8.59632Z" fill="#198AB3"/>
<path d="M33.9673 29.8559V21.2506H31.6673V31.7035H37.954V29.8559H33.9673ZM15.7207 25.6292C15.2458 25.44 14.8055 25.175 14.4173 24.8446C14.3143 24.7367 14.234 24.6094 14.1814 24.4703C14.1287 24.3312 14.1047 24.1831 14.1107 24.0347C14.1028 23.8861 14.134 23.738 14.2012 23.6049C14.2684 23.4719 14.3693 23.3583 14.494 23.2754C14.8083 23.06 15.1856 22.9532 15.5673 22.9717C16.4775 22.9311 17.3758 23.1891 18.1229 23.7056V21.529C17.3064 21.2281 16.4378 21.0905 15.5673 21.124C14.5647 21.0712 13.5763 21.3765 12.7818 21.9846C12.4355 22.249 12.1576 22.5911 11.971 22.9827C11.7844 23.3744 11.6944 23.8043 11.7085 24.2371C11.7085 25.5279 12.5262 26.5403 14.264 27.2996C14.8284 27.5368 15.3607 27.8429 15.8485 28.2108C15.9679 28.3101 16.0641 28.434 16.1303 28.5739C16.1965 28.7137 16.2312 28.8662 16.2318 29.0207C16.2319 29.1743 16.1948 29.3257 16.1236 29.4622C16.0525 29.5987 15.9494 29.7164 15.8229 29.8053C15.4751 30.007 15.0754 30.1038 14.6729 30.0837C13.645 30.0753 12.6552 29.6976 11.8873 29.0207V31.3745C12.7313 31.8055 13.6728 32.0147 14.6218 31.9819C15.6929 32.0449 16.7545 31.7508 17.6373 31.1467C17.9491 30.8543 18.1877 30.4938 18.3341 30.0939C18.4805 29.6941 18.5307 29.2659 18.4807 28.8435C18.493 28.1956 18.2658 27.5655 17.8418 27.0718C17.2447 26.449 16.522 25.9575 15.7207 25.6292V25.6292ZM29.1118 29.6534C29.692 28.6909 29.9844 27.585 29.9551 26.4644C29.8974 25.5157 29.608 24.5951 29.1118 23.7816C28.7128 22.9912 28.0916 22.332 27.3229 21.8833C26.544 21.4461 25.6627 21.2192 24.7673 21.2253C23.8022 21.2043 22.849 21.4403 22.0073 21.9086C21.2184 22.3447 20.5713 22.9944 20.1418 23.7816C19.6894 24.6765 19.4615 25.6662 19.4773 26.6669C19.4827 27.546 19.6926 28.4121 20.0907 29.1979C20.4807 29.9797 21.0938 30.6309 21.854 31.0708C22.6259 31.537 23.506 31.7985 24.4096 31.8301L26.6073 34.3611H29.6996L26.5562 31.577C27.6147 31.2626 28.5225 30.5793 29.1118 29.6534V29.6534ZM26.5562 29.0207C26.3235 29.3069 26.0271 29.5358 25.6901 29.6894C25.3532 29.8431 24.9848 29.9174 24.614 29.9065C24.2405 29.9185 23.8694 29.8421 23.5316 29.6836C23.1939 29.5252 22.8991 29.2892 22.6718 28.9954C22.1316 28.2645 21.8692 27.3682 21.9307 26.4644C21.8714 25.5609 22.1336 24.6653 22.6718 23.9334C22.9123 23.6398 23.2162 23.4032 23.5612 23.2412C23.9061 23.0791 24.2833 22.9957 24.6651 22.997C25.0383 22.981 25.4095 23.0585 25.7445 23.2222C26.0795 23.3858 26.3675 23.6304 26.5818 23.9334C27.0853 24.6796 27.3277 25.5687 27.2718 26.4644C27.361 27.3749 27.106 28.2857 26.5562 29.0207V29.0207Z" fill="url(#paint1_radial_1915_133542)"/>
<defs>
<linearGradient id="paint0_linear_1915_133542" x1="7.61914" y1="26.7161" x2="40.3814" y2="26.7161" gradientUnits="userSpaceOnUse">
<stop stop-color="#005BA1"/>
<stop offset="0.07" stop-color="#0060A9"/>
<stop offset="0.36" stop-color="#0071C8"/>
<stop offset="0.52" stop-color="#0078D4"/>
<stop offset="0.64" stop-color="#0074CD"/>
<stop offset="0.82" stop-color="#006ABB"/>
<stop offset="1" stop-color="#005BA1"/>
</linearGradient>
<radialGradient id="paint1_radial_1915_133542" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.9207 27.7552) scale(18.0678 17.894)">
<stop stop-color="#F2F2F2"/>
<stop offset="0.58" stop-color="#EEEEEE"/>
<stop offset="1" stop-color="#E6E6E6"/>
</radialGradient>
</defs>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure SQL</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Migrate and modernize your SQL workloads.</p>
         
         <p><u>Explore the product</u></p>
         </div>



 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7996 3H20.8996C20.526 2.99994 20.1673 3.14664 19.9007 3.4085C19.6342 3.67035 19.4812 4.02642 19.4746 4.4V35.6C20.5867 34.6698 21.7741 33.8336 23.0246 33.1H27.1746L29.4746 36.15V40.775L26.5746 42.875L22.5496 42.375L19.4746 39.475V43.7C19.4812 44.0736 19.6342 44.4296 19.9007 44.6915C20.1673 44.9534 20.526 45.1001 20.8996 45.1H42.7996C43.1709 45.1 43.527 44.9525 43.7896 44.6899C44.0521 44.4274 44.1996 44.0713 44.1996 43.7V4.4C44.1996 4.0287 44.0521 3.6726 43.7896 3.41005C43.527 3.1475 43.1709 3 42.7996 3V3Z" fill="url(#paint0_linear_1915_133550)"/>
<path d="M22.7511 7.375H26.7761C26.8689 7.375 26.9579 7.41188 27.0235 7.47751C27.0892 7.54315 27.1261 7.63217 27.1261 7.725V12.925C27.1261 13.0178 27.0892 13.1068 27.0235 13.1725C26.9579 13.2381 26.8689 13.275 26.7761 13.275H22.7511C22.7051 13.275 22.6596 13.2659 22.6171 13.2484C22.5746 13.2308 22.5361 13.205 22.5036 13.1725C22.4711 13.14 22.4453 13.1014 22.4277 13.0589C22.4101 13.0165 22.4011 12.971 22.4011 12.925V7.725C22.4011 7.67904 22.4101 7.63352 22.4277 7.59106C22.4453 7.5486 22.4711 7.51001 22.5036 7.47751C22.5361 7.44501 22.5746 7.41923 22.6171 7.40164C22.6596 7.38405 22.7051 7.375 22.7511 7.375V7.375ZM29.8261 7.375H33.8511C33.9439 7.375 34.0329 7.41188 34.0985 7.47751C34.1642 7.54315 34.2011 7.63217 34.2011 7.725V12.925C34.2011 13.0178 34.1642 13.1068 34.0985 13.1725C34.0329 13.2381 33.9439 13.275 33.8511 13.275H29.8261C29.7332 13.275 29.6442 13.2381 29.5786 13.1725C29.5129 13.1068 29.4761 13.0178 29.4761 12.925V7.725C29.4761 7.63217 29.5129 7.54315 29.5786 7.47751C29.6442 7.41188 29.7332 7.375 29.8261 7.375ZM36.9261 7.375H40.9511C41.0439 7.375 41.1329 7.41188 41.1985 7.47751C41.2642 7.54315 41.3011 7.63217 41.3011 7.725V12.925C41.3011 13.0178 41.2642 13.1068 41.1985 13.1725C41.1329 13.2381 41.0439 13.275 40.9511 13.275H36.9261C36.8332 13.275 36.7442 13.2381 36.6786 13.1725C36.6129 13.1068 36.5761 13.0178 36.5761 12.925V7.725C36.5761 7.63217 36.6129 7.54315 36.6786 7.47751C36.7442 7.41188 36.8332 7.375 36.9261 7.375ZM22.7511 16.775H26.7761C26.8689 16.775 26.9579 16.8119 27.0235 16.8775C27.0892 16.9431 27.1261 17.0322 27.1261 17.125V22.375C27.1261 22.421 27.117 22.4665 27.0994 22.5089C27.0818 22.5514 27.056 22.59 27.0235 22.6225C26.991 22.655 26.9525 22.6808 26.91 22.6984C26.8675 22.7159 26.822 22.725 26.7761 22.725H22.7511C22.7051 22.725 22.6596 22.7159 22.6171 22.6984C22.5746 22.6808 22.5361 22.655 22.5036 22.6225C22.4711 22.59 22.4453 22.5514 22.4277 22.5089C22.4101 22.4665 22.4011 22.421 22.4011 22.375V17.175C22.3938 17.125 22.3975 17.0741 22.4118 17.0257C22.4262 16.9772 22.4508 16.9325 22.4841 16.8945C22.5173 16.8565 22.5584 16.8261 22.6045 16.8055C22.6506 16.7849 22.7006 16.7745 22.7511 16.775V16.775ZM29.8261 16.775H33.8511C33.9439 16.775 34.0329 16.8119 34.0985 16.8775C34.1642 16.9431 34.2011 17.0322 34.2011 17.125V22.375C34.2011 22.421 34.192 22.4665 34.1744 22.5089C34.1568 22.5514 34.131 22.59 34.0985 22.6225C34.066 22.655 34.0275 22.6808 33.985 22.6984C33.9425 22.7159 33.897 22.725 33.8511 22.725H29.8261C29.7801 22.725 29.7346 22.7159 29.6921 22.6984C29.6496 22.6808 29.6111 22.655 29.5786 22.6225C29.5461 22.59 29.5203 22.5514 29.5027 22.5089C29.4851 22.4665 29.4761 22.421 29.4761 22.375V17.175C29.4688 17.125 29.4725 17.0741 29.4868 17.0257C29.5012 16.9772 29.5258 16.9325 29.5591 16.8945C29.5923 16.8565 29.6334 16.8261 29.6795 16.8055C29.7256 16.7849 29.7756 16.7745 29.8261 16.775V16.775ZM36.9261 16.775H40.9511C41.0439 16.775 41.1329 16.8119 41.1985 16.8775C41.2642 16.9431 41.3011 17.0322 41.3011 17.125V22.375C41.3011 22.421 41.292 22.4665 41.2744 22.5089C41.2568 22.5514 41.231 22.59 41.1985 22.6225C41.166 22.655 41.1275 22.6808 41.085 22.6984C41.0425 22.7159 40.997 22.725 40.9511 22.725H36.9261C36.8801 22.725 36.8346 22.7159 36.7921 22.6984C36.7496 22.6808 36.7111 22.655 36.6786 22.6225C36.6461 22.59 36.6203 22.5514 36.6027 22.5089C36.5851 22.4665 36.5761 22.421 36.5761 22.375V17.175C36.5688 17.125 36.5725 17.0741 36.5868 17.0257C36.6012 16.9772 36.6258 16.9325 36.6591 16.8945C36.6923 16.8565 36.7334 16.8261 36.7795 16.8055C36.8256 16.7849 36.8756 16.7745 36.9261 16.775ZM22.7511 26.275H26.7761C26.8689 26.275 26.9579 26.3119 27.0235 26.3775C27.0892 26.4431 27.1261 26.5322 27.1261 26.625V31.775C27.1261 31.8678 27.0892 31.9568 27.0235 32.0225C26.9579 32.0881 26.8689 32.125 26.7761 32.125H22.7511C22.7051 32.125 22.6596 32.1159 22.6171 32.0984C22.5746 32.0808 22.5361 32.055 22.5036 32.0225C22.4711 31.99 22.4453 31.9514 22.4277 31.9089C22.4101 31.8665 22.4011 31.821 22.4011 31.775V26.625C22.4011 26.5322 22.4379 26.4431 22.5036 26.3775C22.5692 26.3119 22.6582 26.275 22.7511 26.275V26.275ZM29.8261 26.275H33.8511C33.9439 26.275 34.0329 26.3119 34.0985 26.3775C34.1642 26.4431 34.2011 26.5322 34.2011 26.625V31.775C34.2011 31.8678 34.1642 31.9568 34.0985 32.0225C34.0329 32.0881 33.9439 32.125 33.8511 32.125H29.8261C29.7332 32.125 29.6442 32.0881 29.5786 32.0225C29.5129 31.9568 29.4761 31.8678 29.4761 31.775V26.625C29.4761 26.5322 29.5129 26.4431 29.5786 26.3775C29.6442 26.3119 29.7332 26.275 29.8261 26.275V26.275ZM29.8261 35.725H33.8511C33.9439 35.725 34.0329 35.7619 34.0985 35.8275C34.1642 35.8931 34.2011 35.9822 34.2011 36.075V43.775C34.2011 43.8678 34.1642 43.9568 34.0985 44.0225C34.0329 44.0881 33.9439 44.125 33.8511 44.125H29.8261C29.7332 44.125 29.6442 44.0881 29.5786 44.0225C29.5129 43.9568 29.4761 43.8678 29.4761 43.775V36.075C29.4761 35.9822 29.5129 35.8931 29.5786 35.8275C29.6442 35.7619 29.7332 35.725 29.8261 35.725ZM36.9261 26.275H40.9511C41.0439 26.275 41.1329 26.3119 41.1985 26.3775C41.2642 26.4431 41.3011 26.5322 41.3011 26.625V31.775C41.3011 31.8678 41.2642 31.9568 41.1985 32.0225C41.1329 32.0881 41.0439 32.125 40.9511 32.125H36.9261C36.8332 32.125 36.7442 32.0881 36.6786 32.0225C36.6129 31.9568 36.5761 31.8678 36.5761 31.775V26.625C36.5761 26.5322 36.6129 26.4431 36.6786 26.3775C36.7442 26.3119 36.8332 26.275 36.9261 26.275V26.275Z" fill="#F2F2F2"/>
<path d="M24.8498 34.2754C24.129 34.2892 23.4332 34.5424 22.872 34.9949C22.3108 35.4475 21.916 36.0739 21.7498 36.7754H10.4998C10.3703 37.3075 10.3031 37.8528 10.2998 38.4004V38.5504H21.7498C21.942 39.1084 22.2837 39.603 22.7376 39.9802C23.1915 40.3574 23.7402 40.6029 24.324 40.6898C24.9077 40.7767 25.5041 40.7018 26.0482 40.4732C26.5924 40.2446 27.0633 39.871 27.4098 39.3932C27.7562 38.9154 27.9649 38.3517 28.0132 37.7635C28.0614 37.1753 27.9473 36.5851 27.6832 36.0573C27.4192 35.5294 27.0154 35.0841 26.5158 34.77C26.0162 34.4558 25.4399 34.2847 24.8498 34.2754V34.2754Z" fill="#50E6FF"/>
<path d="M33.6006 32.9255C33.5033 30.7677 32.5534 28.7368 30.9596 27.2789C29.3658 25.8211 27.2585 25.0555 25.1006 25.1505C23.3662 25.1153 21.6639 25.6212 20.2303 26.5979C18.7966 27.5746 17.7027 28.9736 17.1006 30.6005C15.6918 30.7901 14.3596 31.3539 13.2428 32.2333C12.126 33.1127 11.2654 34.2755 10.7506 35.6005H21.1006C21.4379 34.905 21.9565 34.3133 22.6018 33.8877C23.247 33.4621 23.995 33.2182 24.7671 33.1819C25.5393 33.1455 26.3069 33.3179 26.9893 33.681C27.6717 34.0441 28.2436 34.5844 28.6448 35.2451C29.046 35.9058 29.2618 36.6624 29.2693 37.4354C29.2768 38.2083 29.0758 38.969 28.6875 39.6373C28.2991 40.3057 27.7378 40.857 27.0626 41.2333C26.3874 41.6095 25.6233 41.7968 24.8506 41.7755C24.0432 41.7574 23.257 41.5137 22.581 41.0719C21.905 40.63 21.3662 40.0077 21.0256 39.2755H10.4756C10.9176 41.0363 11.9454 42.5945 13.3901 43.6939C14.8349 44.7934 16.6106 45.3687 18.4256 45.3255H32.2756H32.6256C34.2692 45.312 35.8481 44.6834 37.0512 43.5635C38.2543 42.4437 38.9944 40.9139 39.1256 39.2755C39.1074 37.7337 38.5418 36.2486 37.5297 35.0854C36.5176 33.9222 35.125 33.1566 33.6006 32.9255V32.9255Z" fill="url(#paint1_linear_1915_133550)"/>
<path d="M24.85 34.2743C24.1292 34.2881 23.4334 34.5412 22.8722 34.9938C22.311 35.4464 21.9162 36.0727 21.75 36.7743H10.5C10.1041 36.7663 9.71019 36.716 9.325 36.6243C8.06598 36.3471 6.93518 35.6584 6.11122 34.6669C5.28726 33.6755 4.81709 32.4377 4.775 31.1493C4.79053 29.7279 5.32525 28.3613 6.27842 27.3068C7.23159 26.2524 8.53744 25.5828 9.95 25.4243H10.5L10.675 24.9243C11.1212 23.656 11.9554 22.5605 13.0593 21.7932C14.1633 21.0258 15.4808 20.6256 16.825 20.6493C17.9688 20.6392 19.0955 20.9266 20.0948 21.4832C21.094 22.0398 21.9315 22.8465 22.525 23.8243C23.1384 23.6726 23.7681 23.597 24.4 23.5993C23.7242 22.1834 22.661 20.988 21.3336 20.1517C20.0062 19.3154 18.4689 18.8725 16.9 18.8743C15.2741 18.829 13.6714 19.2684 12.2958 20.1365C10.9202 21.0046 9.83393 22.2621 9.175 23.7493C7.45714 24.0575 5.90056 24.9552 4.77341 26.2877C3.64626 27.6202 3.01911 29.3041 3 31.0493C3.03389 32.6808 3.59902 34.2568 4.60964 35.5381C5.62026 36.8195 7.02123 37.7362 8.6 38.1493V38.1493C9.18438 38.3619 9.8033 38.4636 10.425 38.4493H21.75C21.9256 39.0189 22.2556 39.5287 22.7034 39.9221C23.1512 40.3155 23.6993 40.5771 24.2868 40.6778C24.8743 40.7786 25.4782 40.7145 26.0315 40.4928C26.5848 40.2711 27.0658 39.9004 27.4212 39.4218C27.7765 38.9432 27.9923 38.3755 28.0445 37.7818C28.0967 37.188 27.9834 36.5914 27.717 36.0581C27.4506 35.5249 27.0417 35.0759 26.5356 34.761C26.0295 34.4461 25.4461 34.2776 24.85 34.2743V34.2743Z" fill="#50E6FF"/>
<defs>
<linearGradient id="paint0_linear_1915_133550" x1="31.8496" y1="3" x2="31.8496" y2="45.1" gradientUnits="userSpaceOnUse">
<stop stop-color="#5EA0EF"/>
<stop offset="0.18" stop-color="#559CEC"/>
<stop offset="0.47" stop-color="#3C91E5"/>
<stop offset="0.84" stop-color="#1380DA"/>
<stop offset="1" stop-color="#0078D4"/>
</linearGradient>
<linearGradient id="paint1_linear_1915_133550" x1="24.8006" y1="45.5505" x2="24.8006" y2="25.1505" gradientUnits="userSpaceOnUse">
<stop stop-color="#198AB3"/>
<stop offset="0.14" stop-color="#22A5CB"/>
<stop offset="0.3" stop-color="#29BADE"/>
<stop offset="0.47" stop-color="#2EC9EB"/>
<stop offset="0.68" stop-color="#31D1F3"/>
<stop offset="1" stop-color="#32D4F5"/>
</linearGradient>
</defs>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Stack</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Build apps across on-premises, cloud, and the edge.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>











 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


              
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3345 27.6306C14.1598 27.7418 13.9374 27.7259 13.7786 27.6306C13.016 27.154 10.8079 25.7085 8.37745 23.5957C5.35919 20.9745 3.92948 18.7029 3.27817 17.4638C2.62686 16.2248 2.00732 14.8109 2.00732 12.7935V4.1517C2.00732 3.96108 2.16618 3.80222 2.35681 3.80222C2.84926 3.80222 3.78651 3.78633 4.53313 3.67514C5.59747 3.51628 7.47197 3.02383 8.28214 2.51549C9.0923 2.00715 10.1884 1.05401 11.3322 0.640987C12.0311 0.386817 12.9525 0.323275 13.572 0.30739C13.9692 0.291504 14.0168 0.291504 14.3822 0.291504C15.0017 0.30739 15.9549 0.370932 16.6697 0.625101C17.8135 1.03813 19.0049 1.91183 19.8151 2.42017C20.6252 2.92851 22.4044 3.50039 23.4688 3.65925C24.1995 3.77045 25.105 3.78634 25.6133 3.78634C25.8198 3.78634 25.9946 3.96108 25.9946 4.16759V12.7776C25.9946 14.8109 25.518 16.2089 24.8667 17.4479C24.2154 18.687 22.6586 21.1175 19.6403 23.7228C17.2257 25.8355 15.0812 27.1858 14.3345 27.6306Z" fill="#0078D4"/>
<path d="M16.5271 1.30892C15.844 1.07064 14.9386 1.0071 14.3508 0.991211C14.0013 0.991211 13.9536 0.991211 13.5883 0.991211C13.0005 1.0071 12.1268 1.07064 11.4596 1.30892C10.3794 1.69018 9.33094 2.61154 8.56843 3.08811C7.80592 3.56468 6.01085 4.04125 5.01005 4.2001C4.00926 4.35896 2.61133 4.32719 2.61133 4.32719C2.61133 4.32719 2.61133 10.9356 2.61133 12.8578C2.61133 14.7799 3.18321 16.1143 3.80275 17.2898C4.42229 18.4654 5.78845 20.6258 8.64786 23.104C9.31505 23.6758 9.95047 24.2001 10.5541 24.6608L18.4016 2.29383C17.8138 1.92846 17.1625 1.54721 16.5271 1.30892Z" fill="#2687CE"/>
<path d="M14.0497 18.0359C15.936 18.0359 17.4651 16.5068 17.4651 14.6205C17.4651 12.7342 15.936 11.2051 14.0497 11.2051C12.1634 11.2051 10.6343 12.7342 10.6343 14.6205C10.6343 16.5068 12.1634 18.0359 14.0497 18.0359Z" fill="white"/>
<path d="M14.0488 8.36218C17.3372 8.36218 20.0377 10.9039 20.2919 14.1286H23.2466C22.9924 9.26765 18.9734 5.42334 14.0488 5.42334C9.1243 5.42334 5.10524 9.28354 4.85107 14.1286H7.8058C8.05996 10.9039 10.7605 8.36218 14.0488 8.36218Z" fill="white"/>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Microsoft Sentinel </p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4.9rem"}}>Simplify security operations with intelligent security analytics.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>


 </div>



 



 <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.15" filter="url(#filter0_d_1915_133566)">
<path d="M43.0936 8.70265C40.8786 8.68413 38.6863 8.25482 36.6279 7.43649C34.0596 6.53849 31.7698 4.17672 30.1893 3.30567C28.6973 2.38335 26.9678 1.91821 25.2144 1.96766C23.3758 1.91672 21.5596 2.38011 19.9701 3.30567C18.3896 4.20366 15.9471 6.3499 13.3788 7.25688C11.3168 8.07203 9.12149 8.49825 6.9042 8.51405C6.3654 8.51405 5.91639 8.51405 5.54821 8.51405C5.22824 8.51404 4.92127 8.64057 4.69417 8.86598C4.46708 9.09139 4.33831 9.39743 4.33594 9.71739V20.6281C4.35225 22.1579 4.61921 23.6747 5.12618 25.1181C5.62088 26.9567 6.40927 28.7033 7.46095 30.2905C8.56156 32.2147 9.9013 33.9919 11.4481 35.5797C13.5552 37.8223 15.8505 39.8803 18.3088 41.7311C19.8534 42.8805 25.2593 46.1582 25.2144 46.0324C25.2144 46.1582 30.3869 42.8805 31.9314 41.7311C34.3136 39.9414 36.5314 37.9429 38.5586 35.7593C40.1068 34.1727 41.4467 32.3953 42.5458 30.4701C43.5926 28.8846 44.3779 27.1413 44.8716 25.3066C45.3779 23.863 45.6449 22.3464 45.6618 20.8166V9.87003C45.663 9.71168 45.6328 9.55469 45.5727 9.40815C45.5127 9.26162 45.424 9.12846 45.312 9.01648C45.2001 8.90451 45.0669 8.81591 44.9204 8.75587C44.7738 8.69582 44.6169 8.66555 44.4586 8.66675C44.0904 8.66675 43.6324 8.67571 43.0936 8.70265Z" fill="#1F1D20"/>
</g>
<path d="M46.0568 24.1314C46.3878 23.0148 46.5505 21.8551 46.5396 20.6906V9.27982C46.5396 9.11424 46.5068 8.9503 46.4431 8.79744C46.3795 8.64458 46.2863 8.50582 46.1688 8.38915C46.0513 8.27248 45.9119 8.1802 45.7586 8.11764C45.6053 8.05508 45.4411 8.02348 45.2755 8.02464C44.8893 8.02464 44.3978 8.02464 43.8624 8.02464C41.5501 8.00936 39.261 7.56284 37.1125 6.70801C34.4354 5.76882 32.0567 3.31109 30.4065 2.40701C28.8494 1.44733 27.0475 0.959539 25.2189 1.00263L20.1807 27.1332L46.0568 24.1314Z" fill="#0883D9"/>
<path d="M12.8778 6.59398C10.7298 7.44019 8.44511 7.8864 6.13659 7.91061C5.57483 7.91061 5.10085 7.91061 4.71464 7.91061C4.38174 7.91061 4.06242 8.04284 3.82703 8.27823C3.59164 8.51363 3.45941 8.83289 3.45941 9.16579V20.5766C3.44906 21.8082 3.62966 23.0341 3.99482 24.2105H25.2189V1.07289C23.3023 1.03468 21.4116 1.52029 19.7505 2.47733C18.0916 3.38141 15.5549 5.64601 12.8778 6.59398Z" fill="#33BFF0"/>
<path d="M25.2188 46.9968C25.2188 47.1196 30.6169 43.7052 32.2408 42.5115C34.7252 40.6417 37.0398 38.5563 39.1574 36.2795C40.7688 34.6249 42.1639 32.7727 43.3092 30.7671C44.4081 29.1152 45.2294 27.2947 45.7406 25.3777C45.8722 24.9038 45.9864 24.5 46.0829 24.1313H25.2451L25.2188 46.9968Z" fill="#0F5094"/>
<path d="M3.99512 24.1313C4.07411 24.4473 4.17074 24.7897 4.28484 25.1847C4.79731 27.0997 5.61536 28.9196 6.70745 30.5741C7.85503 32.5831 9.25305 34.4383 10.868 36.0951C13.0645 38.4347 15.4579 40.5813 18.0217 42.5115C19.628 43.7052 25.2631 47.1196 25.2192 46.9968V24.1752L3.99512 24.1313Z" fill="#0370C8"/>
<defs>
<filter id="filter0_d_1915_133566" x="0.335938" y="1.96387" width="49.3262" height="52.072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1915_133566"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1915_133566" result="shape"/>
</filter>
</defs>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Microsoft Defender for Cloud</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Protect multicloud and hybrid environments.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2305 33.9776H37.2703V30.873H11.2305V33.9776Z" fill="#68217A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.14062 29.771L20.733 17.5244L22.9901 19.7196L10.3977 31.9662L8.14062 29.771Z" fill="#68217A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.343 17.5437L39.9345 29.7911L37.6775 31.9863L25.0859 19.7389L27.343 17.5437Z" fill="#68217A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 18.0457C23.1599 18.0457 22.4879 17.3921 22.4879 16.5751C22.4879 15.7581 23.1599 15.1045 23.9999 15.1045C24.8399 15.1045 25.5119 15.7581 25.5119 16.5751C25.5119 17.3921 24.8399 18.0457 23.9999 18.0457ZM23.9999 12C21.3959 12 19.2959 14.0425 19.2959 16.5751C19.2959 19.1077 21.3959 21.1502 23.9999 21.1502C26.6039 21.1502 28.7038 19.1077 28.7038 16.5751C28.7038 14.0425 26.6039 12 23.9999 12Z" fill="#7FBA00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70397 33.8955C6.86398 33.8955 6.19198 33.2419 6.19198 32.425C6.19198 31.608 6.86398 30.9544 7.70397 30.9544C8.54397 30.9544 9.21596 31.608 9.21596 32.425C9.21596 33.2419 8.54397 33.8955 7.70397 33.8955ZM7.70397 27.8499C5.09999 27.8499 3 29.8923 3 32.425C3 34.9576 5.09999 37.0001 7.70397 37.0001C10.308 37.0001 12.4079 34.9576 12.4079 32.425C12.4079 29.8923 10.308 27.8499 7.70397 27.8499Z" fill="#7FBA00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.2977 33.8953C39.4577 33.8953 38.7857 33.2417 38.7857 32.4247C38.7857 31.6077 39.4577 30.9541 40.2977 30.9541C41.1377 30.9541 41.8097 31.6077 41.8097 32.4247C41.8097 33.2417 41.1377 33.8953 40.2977 33.8953ZM40.2977 27.8496C37.6937 27.8496 35.5938 29.8921 35.5938 32.4247C35.5938 34.9574 37.6937 36.9998 40.2977 36.9998C42.9017 36.9998 45.0017 34.9574 45.0017 32.4247C45.0017 29.8921 42.9017 27.8496 40.2977 27.8496Z" fill="#7FBA00"/>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure ExpressRoute</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"7.6rem"}}>Create secure, private clouds.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.8889 10.8529V36.3528L34.4167 44.94L18.1847 39.0232V44.8877L8.99535 32.8708L35.7781 34.9652V12.0049L44.8889 10.8529ZM35.9613 12.1358L20.9337 2.99878V8.99413L7.13653 13.0521L3 18.3668V30.436L8.91681 33.0541V17.5814L35.9613 12.1358Z" fill="url(#paint0_linear_1915_129678)"/>
<defs>
<linearGradient id="paint0_linear_1915_129678" x1="23.9444" y1="44.8091" x2="23.9444" y2="3.07732" gradientUnits="userSpaceOnUse">
<stop stop-color="#0078D4"/>
<stop offset="0.16" stop-color="#1380DA"/>
<stop offset="0.53" stop-color="#3C91E5"/>
<stop offset="0.82" stop-color="#559CEC"/>
<stop offset="1" stop-color="#5EA0EF"/>
</linearGradient>
</defs>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure DevOps</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"6rem"}}>Share code, track work, and ship software with modern dev services.
</p>
         
         <p><u>Explore the product</u></p>
         </div>

 </div>
 </div>




</div>
 
</div>




</CustomTabPanel>





<CustomTabPanel value={value} index={5}>

<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:12}}>

<div style={{width:"500px",height:"790px", border:"1px solid #000", 
 backgroundColor:"#000",
  borderRadius:"2rem",
  backgroundImage: 'url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/products-services-iot-noshade-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fmt=png-alpha&fit=constrain")',
backgroundSize: '100% 100%',
backgroundRepeat: 'no-repeat',
  }}>
 

 <div style={{ width:"100%", height:"100%",  borderRadius:"2rem", backgroundColor:"#000", opacity: 0.7 }}>




 <div style={{ width: "100%", height: "100%", borderRadius: "2rem",  backgroundColor: "rgba(0, 0, 0, 0.7)",  display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent: "flex-end" }}>
 <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"start", marginLeft:"2rem"}}>
 <p style={{ color: "#fff", margin:"0rem", fontSize:"2.3rem" }}>Azure OpenAI Service</p>
   <p style={{ color: "#fff", margin:'0rem', padding:"1rem 0rem" ,  fontSize:"1rem" }}>Apply advanced coding and language models to a variety  <br></br> of use cases.</p>
   <button style={{  margin:"0rem", padding:"0rem",   background: "#0078D4", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "0.5rem", marginBottom:"2.5rem" }}>Explore the Product</button>
 </div>
 </div>

 </div>
 
  
  
 
  
</div>



<div className='b2' style={{display:"flex", flexDirection:"column"}}>
 
 <div className='box1' style={{display:"flex",gap:17, margin:"0.5rem" }}>

 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>




 <div style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4989 33.625L32.4275 29.0155V18.9871L24.4945 14.375L16.5703 18.9626V28.984L24.4989 33.625Z" fill="#0072C6"/>
<path d="M24.5 3L6 13.4571V20.5656L14.8095 25.5654V21.5342L9.52381 18.5339V15.4924L24.4965 7.0285L39.4762 15.5309V32.4691L24.5 40.9689L6 30.4689V34.5L24.5 45L43 34.5V13.5L24.5 3Z" fill="#0072C6"/>
</svg>


       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure IoT Central</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Build IoT solutions on a hosted platform.</p>
         
         <p><u>Explore the product</u></p>
         </div>



 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 23.9058C46.8985 21.527 45.964 19.2596 44.3599 17.5002C42.7558 15.7407 40.5843 14.6012 38.225 14.2808C38.1011 10.9164 36.6516 7.73755 34.1927 5.4379C31.7338 3.13826 28.4651 1.90448 25.1 2.00578C22.3898 1.95573 19.7311 2.74925 17.4916 4.27654C15.2522 5.80383 13.5428 7.98938 12.6 10.5308C9.7376 10.8764 7.09401 12.2369 5.1491 14.3653C3.20419 16.4937 2.08688 19.2489 2 22.1308C2.12372 25.3715 3.52749 28.431 5.90352 30.6383C8.27955 32.8456 11.4339 34.0207 14.675 33.9058H15.775H36.3C36.4824 33.9318 36.6676 33.9318 36.85 33.9058C39.5103 33.8869 42.0585 32.8319 43.9536 30.9648C45.8487 29.0977 46.9415 26.5655 47 23.9058V23.9058Z" fill="url(#paint0_linear_1915_133869)"/>
<path d="M25.4002 22.9307H23.4502V38.4057H25.4002V22.9307Z" fill="#B3B3B3"/>
<path d="M24.4236 23.4557C27.2955 23.4557 29.6236 21.1275 29.6236 18.2557C29.6236 15.3838 27.2955 13.0557 24.4236 13.0557C21.5518 13.0557 19.2236 15.3838 19.2236 18.2557C19.2236 21.1275 21.5518 23.4557 24.4236 23.4557Z" fill="#F2F2F2"/>
<defs>
<linearGradient id="paint0_linear_1915_133869" x1="24.5" y1="33.9058" x2="24.5" y2="2.00578" gradientUnits="userSpaceOnUse">
<stop stop-color="#198AB3"/>
<stop offset="0.44" stop-color="#28B7DB"/>
<stop offset="0.78" stop-color="#32D4F5"/>
</linearGradient>
</defs>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure IoT Edge</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"5rem"}}>Deploy cloud intelligence on local edge devices.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>











 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>


              
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.15" filter="url(#filter0_d_1915_133566)">
<path d="M43.0936 8.70265C40.8786 8.68413 38.6863 8.25482 36.6279 7.43649C34.0596 6.53849 31.7698 4.17672 30.1893 3.30567C28.6973 2.38335 26.9678 1.91821 25.2144 1.96766C23.3758 1.91672 21.5596 2.38011 19.9701 3.30567C18.3896 4.20366 15.9471 6.3499 13.3788 7.25688C11.3168 8.07203 9.12149 8.49825 6.9042 8.51405C6.3654 8.51405 5.91639 8.51405 5.54821 8.51405C5.22824 8.51404 4.92127 8.64057 4.69417 8.86598C4.46708 9.09139 4.33831 9.39743 4.33594 9.71739V20.6281C4.35225 22.1579 4.61921 23.6747 5.12618 25.1181C5.62088 26.9567 6.40927 28.7033 7.46095 30.2905C8.56156 32.2147 9.9013 33.9919 11.4481 35.5797C13.5552 37.8223 15.8505 39.8803 18.3088 41.7311C19.8534 42.8805 25.2593 46.1582 25.2144 46.0324C25.2144 46.1582 30.3869 42.8805 31.9314 41.7311C34.3136 39.9414 36.5314 37.9429 38.5586 35.7593C40.1068 34.1727 41.4467 32.3953 42.5458 30.4701C43.5926 28.8846 44.3779 27.1413 44.8716 25.3066C45.3779 23.863 45.6449 22.3464 45.6618 20.8166V9.87003C45.663 9.71168 45.6328 9.55469 45.5727 9.40815C45.5127 9.26162 45.424 9.12846 45.312 9.01648C45.2001 8.90451 45.0669 8.81591 44.9204 8.75587C44.7738 8.69582 44.6169 8.66555 44.4586 8.66675C44.0904 8.66675 43.6324 8.67571 43.0936 8.70265Z" fill="#1F1D20"/>
</g>
<path d="M46.0568 24.1314C46.3878 23.0148 46.5505 21.8551 46.5396 20.6906V9.27982C46.5396 9.11424 46.5068 8.9503 46.4431 8.79744C46.3795 8.64458 46.2863 8.50582 46.1688 8.38915C46.0513 8.27248 45.9119 8.1802 45.7586 8.11764C45.6053 8.05508 45.4411 8.02348 45.2755 8.02464C44.8893 8.02464 44.3978 8.02464 43.8624 8.02464C41.5501 8.00936 39.261 7.56284 37.1125 6.70801C34.4354 5.76882 32.0567 3.31109 30.4065 2.40701C28.8494 1.44733 27.0475 0.959539 25.2189 1.00263L20.1807 27.1332L46.0568 24.1314Z" fill="#0883D9"/>
<path d="M12.8778 6.59398C10.7298 7.44019 8.44511 7.8864 6.13659 7.91061C5.57483 7.91061 5.10085 7.91061 4.71464 7.91061C4.38174 7.91061 4.06242 8.04284 3.82703 8.27823C3.59164 8.51363 3.45941 8.83289 3.45941 9.16579V20.5766C3.44906 21.8082 3.62966 23.0341 3.99482 24.2105H25.2189V1.07289C23.3023 1.03468 21.4116 1.52029 19.7505 2.47733C18.0916 3.38141 15.5549 5.64601 12.8778 6.59398Z" fill="#33BFF0"/>
<path d="M25.2188 46.9968C25.2188 47.1196 30.6169 43.7052 32.2408 42.5115C34.7252 40.6417 37.0398 38.5563 39.1574 36.2795C40.7688 34.6249 42.1639 32.7727 43.3092 30.7671C44.4081 29.1152 45.2294 27.2947 45.7406 25.3777C45.8722 24.9038 45.9864 24.5 46.0829 24.1313H25.2451L25.2188 46.9968Z" fill="#0F5094"/>
<path d="M3.99512 24.1313C4.07411 24.4473 4.17074 24.7897 4.28484 25.1847C4.79731 27.0997 5.61536 28.9196 6.70745 30.5741C7.85503 32.5831 9.25305 34.4383 10.868 36.0951C13.0645 38.4347 15.4579 40.5813 18.0217 42.5115C19.628 43.7052 25.2631 47.1196 25.2192 46.9968V24.1752L3.99512 24.1313Z" fill="#0370C8"/>
<defs>
<filter id="filter0_d_1915_133566" x="0.335938" y="1.96387" width="49.3262" height="52.072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1915_133566"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1915_133566" result="shape"/>
</filter>
</defs>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Microsoft Defender for IoT </p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Protect IoT and OT devices from threats.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>


 </div>



 



 <div className='box2' style={{display:"flex", gap:20 , margin:"0.5rem"}}>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>


 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1915_133876)">
<path d="M38.4749 8.93324L24.6216 0.93324C23.5585 0.320086 22.3528 -0.00268555 21.1256 -0.00268555C19.8984 -0.00268555 18.6927 0.320086 17.6296 0.93324L3.77627 8.93324C2.71379 9.5476 1.83151 10.4305 1.21791 11.4934C0.604305 12.5564 0.280951 13.7619 0.280273 14.9892V30.9892C0.280484 32.217 0.603616 33.4231 1.21724 34.4866C1.83087 35.55 2.7134 36.4333 3.77627 37.0479L17.6429 45.0479C18.706 45.6611 19.9117 45.9838 21.1389 45.9838C22.3662 45.9838 23.5718 45.6611 24.6349 45.0479L38.5016 37.0479C39.5645 36.4333 40.447 35.55 41.0606 34.4866C41.6743 33.4231 41.9974 32.217 41.9976 30.9892V14.9892C41.9942 13.7593 41.6668 12.552 41.0484 11.4888C40.43 10.4257 39.5424 9.54422 38.4749 8.93324V8.93324Z" fill="url(#paint0_linear_1915_133876)"/>
<path d="M44.9116 20.6479L35.1702 15.0239C34.3159 14.5313 33.3471 14.272 32.3609 14.272C31.3747 14.272 30.4059 14.5313 29.5516 15.0239L19.8129 20.6479C18.958 21.1396 18.2481 21.8483 17.755 22.7024C17.262 23.5565 17.0032 24.5257 17.0049 25.5119V36.7599C17.0048 37.7458 17.2643 38.7143 17.7572 39.5681C18.2501 40.422 18.9591 41.131 19.8129 41.6239L29.5516 47.2479C30.4059 47.7405 31.3747 47.9998 32.3609 47.9998C33.3471 47.9998 34.3159 47.7405 35.1702 47.2479L44.9116 41.6239C45.7675 41.1322 46.4788 40.4239 46.9741 39.57C47.4694 38.7162 47.7311 37.747 47.7329 36.7599V25.5119C47.7313 24.5248 47.4698 23.5555 46.9745 22.7016C46.4792 21.8477 45.7677 21.1394 44.9116 20.6479V20.6479Z" fill="url(#paint1_linear_1915_133876)"/>
<path d="M20.2076 7.90137L23.0129 6.34937L35.0396 31.2747L34.0636 32.3414H7.55957L7.85824 29.1494H30.2076L20.2076 7.90137Z" fill="url(#paint2_linear_1915_133876)"/>
<path d="M7.28516 34.8933C9.4943 34.8933 11.2852 33.1025 11.2852 30.8933C11.2852 28.6842 9.4943 26.8933 7.28516 26.8933C5.07602 26.8933 3.28516 28.6842 3.28516 30.8933C3.28516 33.1025 5.07602 34.8933 7.28516 34.8933Z" fill="white"/>
<path d="M32.363 37.3866C35.8151 37.3866 38.6136 34.5881 38.6136 31.1359C38.6136 27.6838 35.8151 24.8853 32.363 24.8853C28.9108 24.8853 26.1123 27.6838 26.1123 31.1359C26.1123 34.5881 28.9108 37.3866 32.363 37.3866Z" fill="white"/>
<path d="M21.4424 10.8213C23.6515 10.8213 25.4424 9.03043 25.4424 6.82129C25.4424 4.61215 23.6515 2.82129 21.4424 2.82129C19.2332 2.82129 17.4424 4.61215 17.4424 6.82129C17.4424 9.03043 19.2332 10.8213 21.4424 10.8213Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_1915_133876" x1="24.6963" y1="-0.970759" x2="16.5816" y2="53.4719" gradientUnits="userSpaceOnUse">
<stop stop-color="#32BEDD"/>
<stop offset="1" stop-color="#198AB3"/>
</linearGradient>
<linearGradient id="paint1_linear_1915_133876" x1="28.7942" y1="19.7012" x2="38.5089" y2="50.8426" gradientUnits="userSpaceOnUse">
<stop stop-color="#50E6FF"/>
<stop offset="0.997" stop-color="#32BEDD"/>
</linearGradient>
<linearGradient id="paint2_linear_1915_133876" x1="-0.448429" y1="10.9707" x2="33.5249" y2="29.0534" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#9CEBFF"/>
</linearGradient>
<clipPath id="clip0_1915_133876">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Digital Twins</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Create models of physical environments.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>












 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>
 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1915_133897)">
<path d="M24 46.0007C35.598 46.0007 45 36.5137 45 24.8109C45 13.1081 35.598 3.62109 24 3.62109C12.402 3.62109 3 13.1081 3 24.8109C3 36.5137 12.402 46.0007 24 46.0007Z" fill="url(#paint0_linear_1915_133897)"/>
<path d="M23.5313 39.1182C21.1348 37.6225 13.2783 32.2627 13.2783 26.0055V18.0281L14.1183 17.9783C16.1936 17.9783 18.2195 17.3301 19.9242 16.1335C21.0854 15.2361 22.543 14.8123 24.0007 14.912C25.4583 14.8123 26.8913 15.261 28.0771 16.1335C29.7818 17.3551 31.8077 18.0032 33.883 17.9783L34.723 18.0281V26.0304C34.723 32.2876 26.8666 37.6474 24.4701 39.1432L24.0007 39.4174L23.5313 39.1182Z" fill="url(#paint1_linear_1915_133897)"/>
<path d="M23.9999 38.0728C19.3305 35.156 14.4141 30.4943 14.4141 26.032V19.1017C16.6129 19.0518 18.7623 18.3538 20.5658 17.0824C21.5294 16.3345 22.7647 15.9606 23.9999 16.0603C25.2352 15.9606 26.4458 16.3345 27.4341 17.0824C29.2376 18.3538 31.387 19.0767 33.5858 19.1017V26.032C33.5858 30.4943 28.6694 35.156 23.9999 38.0728Z" fill="#50E6FF"/>
<path d="M39.6874 39.9176C41.4612 39.9176 42.8991 38.4667 42.8991 36.6768C42.8991 34.887 41.4612 33.436 39.6874 33.436C37.9135 33.436 36.4756 34.887 36.4756 36.6768C36.4756 38.4667 37.9135 39.9176 39.6874 39.9176Z" fill="white"/>
<path d="M39.6878 33.4353C41.4666 33.4353 42.8995 34.8812 42.8995 36.6761C42.8995 38.471 41.4666 39.9169 39.6878 39.9169C37.9089 39.9169 36.476 38.471 36.476 36.6761C36.476 34.8812 37.9089 33.4353 39.6878 33.4353ZM39.6878 31.8149C37.0195 31.8149 34.8701 34.0087 34.8701 36.6761C34.8701 39.3685 37.0442 41.5373 39.6878 41.5373C42.356 41.5373 44.5054 39.3436 44.5054 36.6761C44.5054 33.9838 42.3313 31.8149 39.6878 31.8149Z" fill="#B3B3B3"/>
<path d="M8.31137 39.9176C10.0852 39.9176 11.5231 38.4667 11.5231 36.6768C11.5231 34.887 10.0852 33.436 8.31137 33.436C6.53757 33.436 5.09961 34.887 5.09961 36.6768C5.09961 38.4667 6.53757 39.9176 8.31137 39.9176Z" fill="white"/>
<path d="M8.31179 33.4353C10.0906 33.4353 11.5236 34.8812 11.5236 36.6761C11.5236 38.471 10.0906 39.9169 8.31179 39.9169C6.53296 39.9169 5.10002 38.471 5.10002 36.6761C5.10002 34.8812 6.55767 33.4353 8.31179 33.4353ZM8.31179 31.8149C5.64355 31.8149 3.49414 33.9838 3.49414 36.6761C3.49414 39.3685 5.64355 41.5373 8.31179 41.5373C10.98 41.5373 13.1294 39.3685 13.1294 36.6761C13.1541 33.9838 10.98 31.8149 8.31179 31.8149Z" fill="#B3B3B3"/>
<path d="M23.9989 10.1024C25.7727 10.1024 27.2106 8.65148 27.2106 6.86164C27.2106 5.0718 25.7727 3.62085 23.9989 3.62085C22.2251 3.62085 20.7871 5.0718 20.7871 6.86164C20.7871 8.65148 22.2251 10.1024 23.9989 10.1024Z" fill="white"/>
<path d="M23.9993 3.62015C25.7781 3.62015 27.2111 5.06604 27.2111 6.86095C27.2111 8.65585 25.7781 10.1017 23.9993 10.1017C22.2205 10.1017 20.7875 8.65585 20.7875 6.86095C20.7875 5.06604 22.2205 3.62015 23.9993 3.62015ZM23.9993 1.99976C21.3311 1.99976 19.1816 4.16859 19.1816 6.86095C19.1816 9.5533 21.3311 11.7221 23.9993 11.7221C26.6675 11.7221 28.8169 9.5533 28.8169 6.86095C28.8169 4.19352 26.6675 1.99976 23.9993 1.99976Z" fill="#B3B3B3"/>
</g>
<defs>
<linearGradient id="paint0_linear_1915_133897" x1="24" y1="46.0057" x2="24" y2="3.62608" gradientUnits="userSpaceOnUse">
<stop stop-color="#198AB3"/>
<stop offset="0.442" stop-color="#28B7DB"/>
<stop offset="0.775" stop-color="#32D4F5"/>
</linearGradient>
<linearGradient id="paint1_linear_1915_133897" x1="3795.2" y1="-3062.91" x2="3811.5" y2="-3076.02" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_1915_133897">
<rect width="42" height="44" fill="white" transform="translate(3 2)"/>
</clipPath>
</defs>
</svg>



       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Sphere</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"4rem"}}>Secure your IoT hardware and software.</p>
         
         <p><u>Explore the product</u></p>
         </div>
 </div>














 <div className='box' style={{width:"280px" , height:"100%", backgroundColor:"#fff" , borderRadius:"1.6rem",padding:"1.4rem"}}>
 <div   style={{border:"2px solid #BDC5D2", backgroundColor:"#FEFEFE", padding:"1rem", borderRadius:"0.3rem", width:"34px", height:"34px"}}>

 <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.784 18.9835C43.6282 14.3022 40.924 10.1502 37.1112 7.2031C33.2985 4.25597 28.6017 2.68716 23.785 2.75193C18.9683 2.81669 14.3153 4.51123 10.583 7.5598C6.85073 10.6084 4.25885 14.8316 3.22912 19.5422L3.04297 20.3798H7.28997L7.4223 19.8624C8.34591 16.2008 10.4497 12.946 13.4078 10.6021C16.366 8.25824 20.0135 6.95594 23.7857 6.89686C27.558 6.83778 31.2444 8.02522 34.2744 10.2753C37.3043 12.5254 39.5087 15.7127 40.5463 19.3437L40.692 19.8398H44.9988L44.784 18.9835Z" fill="#00B294"/>
<path d="M40.4031 29.502L40.2388 29.9558C39.075 33.2562 36.9302 36.1211 34.0924 38.1656C31.2546 40.2101 27.8597 41.3364 24.3639 41.3932C20.868 41.4499 17.4384 40.4344 14.5359 38.4831C11.6334 36.5317 9.39689 33.738 8.12681 30.4771L7.95454 30.0406H3.54688L3.85147 30.9516C5.28671 35.247 8.04879 38.9745 11.7387 41.5957C15.4287 44.2169 19.8554 45.5961 24.3796 45.534C28.9038 45.472 33.2912 43.972 36.908 41.2506C40.5248 38.5292 43.1839 34.7274 44.5011 30.3943L44.7728 29.502H40.4031Z" fill="#00B294"/>
<path d="M26.0906 36.4392L21.4515 21.9357L18.5331 26.9357H4.70147C4.24821 26.9298 3.8155 26.7455 3.49703 26.4226C3.17857 26.0997 3 25.6642 3 25.2104C3 24.7567 3.17857 24.3212 3.49703 23.9983C3.8155 23.6754 4.24821 23.491 4.70147 23.4852H16.5562L22.3777 13.5098L26.6026 26.7187L28.2641 22.9463H43.2909C43.7441 22.9521 44.1769 23.1365 44.4953 23.4594C44.8138 23.7823 44.9923 24.2178 44.9923 24.6715C44.9923 25.1253 44.8138 25.5608 44.4953 25.8837C44.1769 26.2066 43.7441 26.3909 43.2909 26.3968H30.5099L26.0906 36.4392Z" fill="#00B294"/>
</svg>

       </div>
       
         <div style={{width:"100%", display:"flex", alignItems:"flex-start", textAlign:"start", flexDirection:"column", height:"auto"}}>
         <p style={{fontSize:"24px",color:"#17253D"}}>Azure Time Series Insights</p>
         <p style={{fontSize:"1rem", margin:"0rem", paddingBottom:"3rem"}}>Visualize IoT data in real time.</p>
         
         <p><u>Explore the product</u></p>
         </div>

 </div>
 </div>




</div>
 
</div>




</CustomTabPanel>












    </Box>
    </div>
  );
}
