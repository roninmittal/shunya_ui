import React, { Component } from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Login from './containers/login'
import Dashboard from './containers/dashboard'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      loggedIn: false
    }
  };
  
  validateAuthorization=(event,username,password)=>{
    event.preventDefault();
    axios({
      method: 'post',
      url: "http://try.predictt.ai/automl_webapi/authenticate_user/",
      data: {"username":username,"password":password}
    }).then(res => {
      if(res.data.status === 200){
        this.setState({
          loggedIn:true
        })
      }
    });

 }


  render() {
    return (
      <React.Fragment>
        {!this.state.loggedIn && <Login validateAuthorization={this.validateAuthorization}/>}
        {this.state.loggedIn && <Dashboard/>}
      </React.Fragment>
    );
  }
}

export default App;
