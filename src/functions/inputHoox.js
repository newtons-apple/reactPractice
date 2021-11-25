import {useState} from 'react'

export default function InputHoox(initialValue) {
    const[value,setValue] =useState(initialValue)
    return [{value,onChange:e=>setValue(e.target.value)},
    ()=>setValue(initialValue)
    ]
}
