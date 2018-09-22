import React, { Component } from 'react';
import './Header.css'
import fondo from '../../images/back-template.svg'
import fondo_reclutamiento from '../../images/reclutamiento/fondo_reclutamiento.svg'
import imagen3 from '../../images/imagen_home_tres.png'
import imagen_reclutamiento from '../../images/reclutamiento/imagen_modulo_reclutamiento.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    render() {
        var url=this.props.match.params
        var imagen_fondo
        var titulo
        var imagen_modulo
        var descripcion
        var botones

        if(url.modulo_name!=null)
        {
            if(url.modulo_name==='reclutamiento')
            {
                imagen_fondo=(<img src={fondo_reclutamiento} alt="imagenfondo" className="back_template" />) 
                titulo=(<h1 className="titulo_header">MODULO DE RECLUTAMIENTO</h1>)                
                descripcion = (<div className="parrafo_descripcion"><p>Este es el modulo de capacitacion</p>
                </div>)
                imagen_modulo=(<div className="container_fondo">
                <img src={imagen_reclutamiento} alt="imagendos"  />
                <img src={imagen_reclutamiento} alt="imagendos" />
                <img src={imagen_reclutamiento} alt="imagendos" />
                <img src={imagen_reclutamiento} alt="imagendos" />
               </div>)
               botones=( <div className="header_botones">
                        <a className="boton2">REGISTRATE</a>
                </div>)
                
            }
            if(url.modulo_name==='capacitacion')
            {

            }
        }
        else
        {
            imagen_fondo=(<img src={fondo} alt="imagenfondo" className="back_template" />) 
            titulo=(<h1 className="titulo_header">SISTEMA DE ADMINISTRACIÓN DE POLIZAS</h1>)
            descripcion = (<div className="parrafo_descripcion"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>)
            imagen_modulo=(<div className="container_fondo">
            <img src={imagen3} alt="imagendos"  />
            <img src={imagen3} alt="imagendos" />
            <img src={imagen3} alt="imagendos" />
            <img src={imagen3} alt="imagendos" />
           </div>)
           botones=( <div className="header_botones">
           <a className="boton1">COMPRAR</a>
           <a className="boton2">REGISTRATE</a>
   </div>)
            
        }


        
        return (
            <div>
               
                {imagen_fondo}

                {imagen_modulo}
               
                {titulo}
                {descripcion}

               
                {botones}

            
            </div>
        );
    }
}

export default Header;