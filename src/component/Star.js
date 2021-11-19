import React from 'react';
import {FaStar,FaRegStar} from "react-icons/fa"
const Star = ({selected=false, onClick=f=>f, color='green', ...props}) => {

  return ( 
    selected?<FaStar color={color} {...props} onClick={onClick}/>:<FaRegStar color={color} {...props} onClick={onClick}/>
   );
}
 
export default Star;