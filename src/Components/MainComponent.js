import React from 'react';

import '../App.css';
import Menu from './MenuComponent';
import Home from "./HomeComponent"
import About from "./AboutComponent"
import { Dishes } from "../shared/dishes" 
import {LEADERS} from "../shared/leaders"
import {PROMOTIONS} from "../shared/promotions"
import  DishDetail from "./DishDetail" 
import Header from "./HeaderComponent"
import Footer from './FooterComponent';
import Contact from "./ContactComponent"
import {COMMENTS} from "../shared/comments"
import { Switch, Route, Redirect } from 'react-router-dom';




class  Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes:Dishes,
        leaders:LEADERS,
        promotions:PROMOTIONS,
        comments:COMMENTS
    };
}


render(){
  const DishWithId = ({match}) => {
    
    return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishid,10))[0]} 
          comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid,10))} />
    );
  };
  console.log(this.props);
    console.log(this.state.dishes)
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route path="/home" component={()=><Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
      promo={this.state.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
   } />
       <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
        
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={()=><About leaders={this.state.leaders} />} />
      
      <Route exact path="/menu/:dishid" component={DishWithId} />
      <Redirect to="/home" />
     </Switch>
     
     <Footer />
    </div>
  );
}
}

export default Main;
