import React from 'react';

import '../App.css';
import Menu from './MenuComponent';
import Home from "./HomeComponent"
import About from "./AboutComponent"
import { actions } from 'react-redux-form';
import  DishDetail from "./DishDetail" 
import Header from "./HeaderComponent"
import Footer from './FooterComponent';
import Contact from "./ContactComponent"

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos} from "../redux/ActionCreators"


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchtoProps=(dispatch)=>({
  postComment:(dishid,rating,author,comment)=> dispatch(postComment(dishid,rating,author,comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments:()=>dispatch(fetchComments()),
  fetchPromos:()=>dispatch(fetchPromos())
})


class  Main extends React.Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    
  }
  


render(){
  

  const DishWithId = ({match}) => {
    console.log(match.params)
    return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishid,10))[0]
        
        }
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess} 
          comment={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid,10))}
          commentsErrMess={this.props.comments.errMess} postComment={this.props.postComment} />
    );
  };
  console.log(this.props);

  return (
    <div className="App">
     <Header />
     <Switch>
       <Route path="/home" component={()=><Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
      promo={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.props.leaders.filter((leader)=>leader.featured)[0]} />
   } />
       <Route exact path='/menu' component={() => <Menu dish={this.props.dishes.dishes} />} />
        
      <Route exact path="/contact" component={() =><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
      <Route exact path="/about" component={()=><About leaders={this.props.leaders} />}/>
      
      <Route exact path="/menu/:dishid" component={DishWithId} />
      <Redirect to="/home" />
     </Switch>
     
     <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps,mapDispatchtoProps)(Main));

