import React from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';

 function DishDetail(props){
    
 
    
            const dish=props.dish; 
            
            if(dish!=null){ 
                   const Comment=dish.comments.map((comm)=>{
                       console.table(comm)
                    console.log(comm);
                       return (
                          <div key={comm.id} className="d-flex"> 
                    <ul  className="list-unstyled text-left">
                        <li >{comm.comment}</li>
                        <li >{'-- '+comm.author +" , " + new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comm.date)))}</li>
                    </ul>
                    </div>
                       )
                   })
                return(
                    <div className="container">
                    <div className="row">
                         <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                       
                   
                         <div className="col-12 col-md-5 m-1">
                             <h4>Comments</h4>
                          {Comment}
                        </div>
                    </div>
                    </div>
                );
            }else{
                return(<div></div>)
            }
           
}


 export default DishDetail;