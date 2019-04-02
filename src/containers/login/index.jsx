import React, { Component } from 'react';
import './index.css';
import {Row,Container,Col,Card,Form,Button} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
    }
    onChangeHandler = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    handlingButtonEnable = () =>{
        if(this.state.username !== "" && this.state.password !== ""){
            return false;
        }else{
            return true;
        }
    }
    render() {
        const {username,password} = this.state;
        return (
            <Container fluid={true} className="login-form">
                <Row className="justify-content-center">
                    <Col xl={4} lg={6} md={6}>
                        <Card className="o-hidden border-0 shadow-lg">
                            <Card.Body className="p-0">
                                <Row>
                                    <Col lg={12}>
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome !</h1>
                                            </div>
                                            <Form className="user">
                                                <Form.Group>
                                                    {/* <Form.Label>UserName</Form.Label> */}
                                                    <Form.Control type="text" placeholder="Username" onChange={this.onChangeHandler} id="username"/>
                                                </Form.Group>
                                                <Form.Group>
                                                    {/* <Form.Label>Password</Form.Label> */}
                                                    <Form.Control type="password" placeholder="Password" onChange={this.onChangeHandler} id="password"/>
                                                </Form.Group>
                                                <Button variant="primary" type="submit" disabled={this.handlingButtonEnable()} onClick={(e)=>{this.props.validateAuthorization(e,username,password)}} block>Login</Button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;

