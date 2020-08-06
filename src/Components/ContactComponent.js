import React from 'react';
import {Breadcrumb ,BreadcrumbItem, Button,  Label,  Col,Row} from "reactstrap"
import {Link} from "react-router-dom"
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends React.Component {
    constructor(props) {
        super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
        };
       
      
        
    

        handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }

    render(){
     
    return(

        <div className="container">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"  href="tel:+85212345678"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>FeedBack</h3>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                     
                        <Row className="form-group">
                            <Label htmlfor="firstname" md={2}> First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" className="dorm-control"
                                 id="firstname" name="firstname"
                                placeholder="First Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                            <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="lastname" md={2}> Last Name</Label>
                            <Col md={10}>
                            <Control.text model=".lastname" className="dorm-control"
                             id="lastname" name="lastname"
                                placeholder="Last Name"   validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="telnum" md={2}> Tel No</Label>
                            <Col md={10}>
                            <Control.text model=".telnum" className="dorm-control" id="telenum" name="telnum"
                                placeholder="Tel No"     validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                             />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="email" md={2}> Email</Label>
                            <Col md={10}>
                            <Control.text model=".email" className="dorm-control" id="email" name="email"
                                placeholder="Email" validators={{
                                    required, validEmail
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                             />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                            
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="feedback" md={2}> Your FeedBack</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" className="form-control" id="feedback" name="message"
                                
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
    );
}
}

export default Contact;