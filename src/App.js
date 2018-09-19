import React, { Component } from 'react';
import './App.css';
import fondo from './back-template.svg'
import imagen2 from './images/Salesforce-Ipad.svg'
import { Toolbar } from './components/Toolbar/Toolbar';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Backdrop } from './components/BackDrop/BackDrop';


class App extends Component {
  state={
    sideDrawerOpen:false
  }

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
     return{ sideDrawerOpen: !this.state.sideDrawerOpen} 
    })
  }
  backdropClickHandler=()=>{
    this.setState({sideDrawerOpen:false}) 
  }

  render() {
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100vh'}}>

          <div className="container">
            <Toolbar drawerToggleClickHandler ={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}  
            <div >
             <img src={fondo} alt="imagenfondo" className="back_template"/>
             <img src={imagen2} alt="imagendos" className="Salesforce-Ipad"/>
            </div>
           
            
            
          </div>

          <main style={{marginTop: '64px'}}>
            <p>sasdadadds</p>
          </main>
      </div>
    );
  }
}

export default App;
