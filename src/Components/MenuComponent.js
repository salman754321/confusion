import React from 'react';
import {baseUrl} from "../redux/baseUrl"
import { Card, CardImg, CardImgOverlay,
    CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from "react-router-dom"   
import { Loading } from './LoadingComponent';
function RenderMenuItem ({dish, onClick,errMess,isLoading}) {
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
                    <div className="col-12">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
    }
}

const Menu = (props) => {

    const menu = props.dish.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            {menu}
        </div>
    </div>
    );
}

export default Menu;