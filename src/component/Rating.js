import React from 'react';
const Rating = ({rating,totalRating}) => {
  return ( <div>
    {rating} of {totalRating}
  </div> );
}
 
export default Rating;