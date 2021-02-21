import React from 'react';
import { withOktaAuth } from "@okta/okta-react";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default withOktaAuth(class SignInWidget extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login = async () => {
        await this.props.oktaAuth.signInWithRedirect();
    }

    // async logout() {
    //     this.props.oktaAuth.signOut('/');
    // }

    render() {
        return (
            <div className="auth-action-container">
                <h3>You have reached the Patient Portal for BenCo medical services.</h3>
                <button onClick={this.login}>Login</button>
            </div>
            )
    }
});