import React, { Component } from 'react';
import Header from '../Header/Header'
import {Home} from '../Modulos/Home'
import {ReclutamientoPage} from '../Modulos/ReclutamientoPage'
import {CapacitacionPage} from '../Modulos/CapacitacionPage'
class Homepage extends Component {


    render() {

        console.log(this.props.match.params)
        var url=this.props.match.params
        var modulo 
        if(url.modulo_name!=null)
        {
            if(url.modulo_name==='reclutamiento')
            {
                modulo=<ReclutamientoPage/>
            }
            if(url.modulo_name==='capacitacion')
            {
                modulo=<CapacitacionPage/>
            }
        }
        else
        {
            modulo=<Home/>
        }
        
        return (
            <div className="container">
                <Header {...this.props}/>

                {modulo}
            </div>
        );
    }
}

export default Homepage;