import React, {useState, useEffect} from 'react';

import "./style.css";


import Slideritem from './slideritem';


const Sliderboxcard = () => {

   const items = [
    {
      title: "Baseball",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel suscipit arcu. In hac habitasse platea dictumst. Nulla facilisi. Quisque condimentum nisl vitae metus luctus, ac bibendum nunc tristique. Praesent id odio ut libero scelerisque hendrerit",
      Image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-DataCard-Background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=11600&hei=560&qlt=85&fit=constrain",

    },
    

    {
      title: "walking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel suscipit arcu. In hac habitasse platea dictumst. Nulla facilisi. Quisque condimentum nisl vitae metus luctus, ac bibendum nunc tristique. Praesent id odio ut libero scelerisque hendrerit",
      Image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-DataCard-Background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=11600&hei=560&qlt=85&fit=constrain",

    },


    {
      title: "height",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel suscipit arcu. In hac habitasse platea dictumst. Nulla facilisi. Quisque condimentum nisl vitae metus luctus, ac bibendum nunc tristique. Praesent id odio ut libero scelerisque hendrerit",
      Image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-DataCard-Background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=11600&hei=560&qlt=85&fit=constrain",

    },







   ];

  return (

    <div className='sliderbox1'>

   <div className='inner'>

   {items.map((items)=>{
    return <Slideritem/>
   })}



    
   
   </div>












   
    </div>


  )
}

export default Sliderboxcard