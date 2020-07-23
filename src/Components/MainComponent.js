import React from 'react';

import '../App.css';
import Menu from './MenuComponent';
import Home from "./HomeComponent"
import { Dishes } from "../shared/dishes" 
import  DishDetail from "./DishDetail" 
import Header from "./HeaderComponent"
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class  Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes:Dishes,
        selectedDish: null
    };
}

onDishSelect(dish) {
    this.setState({ selectedDish: dish});
}
render(){
    console.log(this.state.dishes)
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route path="/home" component={Home} />
       <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
              <Redirect to="/home" />
     </Switch>
     
     <Footer />
    </div>
  );
}
}

export default Main;
