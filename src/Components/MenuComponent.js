import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import  DishDetail from "./DishDetail" 

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
               <DishDetail dish={dish} />
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dish.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                
                  <Card onClick={()=>this.onDishSelect(dish)}>
                     
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        <p>{dish.description}</p>
                    </CardImgOverlay>
                
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
            <div className="row">
                {menu}
            </div>
            
                {this.renderDish(this.state.selectedDish)}
              </div>
           
        );
    }
}

export default Menu;