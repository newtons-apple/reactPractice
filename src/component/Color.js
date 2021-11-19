import React from 'react';
import RatingStar from'./RatingStars'
import {FaTrashAlt} from'react-icons/fa'
const Color = ({id,title,color,rating,remove,changeRating}) => {
  return (     
    <section>
      <h1>{title}</h1>
      <FaTrashAlt onClick={()=>remove(id)}/>
      <div style={{background:color,height:50}}></div>
      <RatingStar selected={rating} onClickHandler={(rating)=>changeRating(id,rating)}/>
    </section>
   );
}
 
export default Color;