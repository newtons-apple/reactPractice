import React, { useState } from 'react';
import colordata from './color-data.json'
import ColorList from './component/ColorList'
function App() {
  const [color,setColor] = useState(colordata)
  return (
    <div className="App" >
    <ColorList colors={color}
    remove = {(id)=>setColor(color.filter(i=>{
      return(i.id!==id)}))}
    changeRating ={(id,rating)=>setColor(color.map((c,i)=>id===c.id?{...c,rating}:{...c}))}
    />
    </div>
  );
}

export default App;
