import React from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle , Breadcrumb, BreadcrumbItem} from 'reactstrap';
    import {Link} from "react-router-dom"
    import { Loading } from './LoadingComponent';
    import CommentForm from "./CommentForm"

//DishDetail
    function RenderDish({dish,errMess,isLoading}) {
   
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else
    {
        return(
          
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
               
        );
    }
  
      }
 function RenderComments({comments, addComment, dishId}) {
      
      
         const commentss= comments.map((commen)=>{
             console.log(comments)
            return (
            <div key={commen.id} className="d-flex"> 
            <ul  className="list-unstyled text-left">
            <li>Rating : {commen.rating}</li>
                <li >{commen.comment}</li>
                <li >{'-- '+commen.author +" , " + commen.date}</li>
            
            </ul>
            </div>
            )
          }
         )
          return (
              <div>
              {commentss}
            <CommentForm dishId={dishId} addComment={addComment}/>
              </div>
          )
        
}
const  DishDetail = (props) => {
    console.log(props)
if(props.dishesLoading){
    return(
        <Loading/>
    )
}else{
    
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish}    isLoading={props.dish.isLoading}
        errMess={props.dish.errMess} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comment} addComment={props.addComment}
        dishId={props.dish.id} />
            </div>
        </div>
        </div>
    );
}
  }


 export default DishDetail;