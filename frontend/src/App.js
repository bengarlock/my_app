import './App.css';
import {Security, LoginCallback, withOktaAuth} from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import React from 'react'
import Home from "./Components/Home"
import { BrowserRouter as Router} from "react-router-dom"



const config = {
    issuer: 'https://dev-49794790.okta.com/oauth2/default',
    clientId: '0oa7xaqilV2hsYV9n5d6',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
};

const backendUrl = "http://127.0.0.1:3000"
const oktaAuth = new OktaAuth(config);

class App extends React.Component {


  render() {
    return (
        <div className="App">
            <Router>
                <Security oktaAuth={oktaAuth}>
                    <Home />
                </Security>
            </Router>
        </div>
    );
  }
}

export default App;
