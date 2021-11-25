import React from 'react';
import Star from './Star'
import Rating from './Rating'
const RatingStars = ({totalRating = 5,selected=3,onClickHandler}) => {


  return ( <div>
    {[...new Array(totalRating)].map((e,i)=>{
      return selected>i?<Star key={i} selected={true} onClick={()=>onClickHandler(i+1)} />:<Star key={i} selected={false} onClick={()=>onClickHandler(i+1)} />
    })
    }
    <Rating rating={selected} totalRating={totalRating}/>
  </div> );
}
 
export default RatingStars;