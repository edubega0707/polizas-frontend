import React from 'react'
import './Toolbar.css'
import { DrawerToogleButton } from '../SideDrawer/DrawerToggleButtton';

export const Toolbar =(props)=>{
    return(
    
            <header className="toolbar">
                <nav className="toolbar__navigation"> 
                    <div className="toolbar__toggle-button">
                        <DrawerToogleButton click={props.drawerToggleClickHandler}/>
                    </div>
                    <div className="toolbar__logo "><a href="">LOGO</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><a href="/">Productos</a></li>
                            <li><a href="/">Desarrolladores</a></li>
                            <li><a href="/">¿Beneficios?</a></li>
                            <li><a href="/">Contacto</a></li>
                            <li><a href="/">Iniciar Sesión</a></li>
                        </ul>

                    </div>
                </nav>
            </header>
       
    )
}