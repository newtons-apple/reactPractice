import React ,{createContext, useState,useContext}from 'react'
import colorData from '../color-data.json'
import {v4} from 'uuid'
const Context = createContext()
export function ColorProvider({children}) {
    const [colors,setColor] = useState(colorData)


    const addColor = (color,title)=>setColor([...colors,{
        id:v4(),
        color,
        title,
        rating:0
        }])
    const removeColor = (id) => {
        setColor(colors.filter(i=>{
            return(i.id!==id)}))
    }
    const changeRating = (id,rating)=>setColor(colors.map((c,i)=>id===c.id?{...c,rating}:{...c}))
    
    


    return (
        <Context.Provider value={{colors,addColor,removeColor,changeRating}}>
            {children}
        </Context.Provider>
    )
}

export const useColor = () => useContext(Context)
   