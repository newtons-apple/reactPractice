import React from 'react';
import RatingStar from'./RatingStars'
import {FaTrashAlt} from'react-icons/fa'
import { useColor } from '../hooks/color-hooks';
const Color = ({id,title,color,rating}) => {
  const {removeColor,changeRating} = useColor()

  return (     
    <section>
      <h1>{title}</h1>
      <FaTrashAlt onClick={()=>removeColor(id)}/>
      <div style={{background:color,height:50}}></div>
      <RatingStar selected={rating} onClickHandler={(rating)=>changeRating(id,rating)}/>
    </section>
   );
}
 
export default Color;