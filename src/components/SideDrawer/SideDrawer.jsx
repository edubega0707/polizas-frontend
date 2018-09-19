import React from 'react'
import '../SideDrawer/SideDrawer.css'
export const SideDrawer =(props)=>{
    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Productos</a></li>
            </ul>
        </nav>
    )
}