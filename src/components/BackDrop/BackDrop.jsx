import React from 'react'
import './BackDrop.css'

export const Backdrop=(props)=>{
    return(
        <div className="backdrop" onClick={props.click}/>
    )
}