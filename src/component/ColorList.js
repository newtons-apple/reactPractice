import React from 'react';
import Color from'./Color'

const ColorList = ({colors=[],remove, changeRating}) => {
  if(colors.length===0) return <div>색이 없습니다.</div>
  return ( 
    colors.map((e,i)=><Color key={e.id} {...e} remove={remove} changeRating={changeRating}/>)
   );
}
 
export default ColorList;