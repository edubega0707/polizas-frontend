import React, { Component } from 'react';
import './App.css';
import './components/Footer/Footer.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Backdrop } from './components/BackDrop/BackDrop';
import Routes from './Routes';
import { Footer } from './components/Footer/Footer';


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
      <div style={{ height: 'auto' }}>

          <div className="navbar">
            <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
          <main >
             <Routes/>
             <Footer/>
          </main>
    
    </div>
    );
  }
}

export default App;
