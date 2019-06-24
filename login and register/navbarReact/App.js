import React,{Component} from 'react';
import ToolBar from './components/toolbar/toolbar';
import SideDrawer from './components/sideDrawer/sidedrawer';
import BackDrop from './components/backdrop/backdrop';

class App extends Component{
  state = {
    sideDrawerVisible: false
  }

  drawerHandler =()=>{
    this.setState((prevState) =>{
      return{sideDrawerVisible:!prevState.sideDrawerVisible}
    } );
  }

  backDropHandler = () =>{
    this.setState({sideDrawerVisible:false});
  }
  render(){
    let sidedrawer;
    let backdrop;
    if(this.state.sideDrawerVisible){
      sidedrawer = <SideDrawer/>
      backdrop = <BackDrop clickbackDropHandler = {this.backDropHandler}/>
    }
   
  return (
    <div className="App">
      <ToolBar clickdrawerHandler = {this.drawerHandler}/>
      {sidedrawer}
      {backdrop}
      <main style={{marginTop:"70px"}}>
        <p>hello this is a page</p>
      </main>
     
    </div>
  );
}
}

export default App;
