import React from 'react'
import {withOktaAuth, LoginCallback, SecureRoute} from "@okta/okta-react";
import Login from "./Login";
import Profile from "./Profile";
import "../Stylesheets/Home.css"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"


export default withOktaAuth(class Home extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    async login() {
        this.props.oktaAuth.login('/profile');
    }


    render() {
        return(
            <div>


                    <Route exact path="/">
                        {this.props.authState.isAuthenticated ? <Redirect to="/profile" /> : <Login />}
                    </Route>
                    <Route path="/login" render={() =>
                        <Login baseUrl={"https://dev-49794790.okta.com"} />}
                    />
                    <Route path="/login/callback" exact={true} component={LoginCallback}/>
                    <SecureRoute path='/profile' render={() => <Profile />}/>
                    <SecureRoute path='/profile'
                                 render={() => <Profile />}/>

            </div>
        )
    }
})

