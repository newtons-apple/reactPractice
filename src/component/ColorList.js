import React from 'react';
import Color from'./Color'
import { useColor } from '../hooks/color-hooks';

const ColorList = () => {
  const {colors} = useColor()
  if(colors.length===0) return <div>색이 없습니다.</div>
  return ( 
    colors.map((e,i)=><Color key={e.id} {...e} />)
   );
}
 
export default ColorList;