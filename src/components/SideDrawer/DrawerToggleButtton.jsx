import React from 'react'
import './DrawerToggleButton.css'
export const DrawerToogleButton=(props)=>{
    return(
        <button className="toogle-button" onClick={props.click}>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
        </button>
    )
}