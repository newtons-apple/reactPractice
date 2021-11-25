import React  from 'react'
import { useColor } from '../hooks/color-hooks';
import inputHoox from '../functions/inputHoox';

function AddColor() {
    const [color,resetColor] = inputHoox('#000000')
    const [title,resetTitle] = inputHoox('')
    const {addColor} = useColor()

    const submit = (e) => {
        e.preventDefault();
        addColor(color.value,title.value)
        resetColor()
        resetTitle()
    }
    
    
    return (
        <form onSubmit={submit}> 
            <input type="text" {...title}/>
            <input type="color" {...color} />
            <button>add</button>
        </form>
            
    )
}

export default AddColor
