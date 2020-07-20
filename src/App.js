import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/MenuComponent';
import {Navbar,NavbarBrand} from "reactstrap"
import { Dishes } from "./shared/dishes" 

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes:Dishes
    };
}
render(){
  return (
    <div className="App">
     <Navbar dark color="primary">
           <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
     </Navbar>
     <Menu dish={this.state.dishes}/>
    </div>
  );
}
}

export default App;
