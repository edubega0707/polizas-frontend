import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/Home/Homepage'
import ModuloPage from './components/Modulos/ReclutamientoPage'
class Routes extends React.Component{
    render(){
        return(
            <Switch>
                 <Route exact path="/" render={props =>(<HomePage {...props}/>)}/>
                 <Route path="/modulos/:modulo_name" render={props =>(<HomePage {...props}/>)}/>
  
               
            </Switch>
        )
    }
}

export default Routes;