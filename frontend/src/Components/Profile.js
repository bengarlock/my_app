import React from 'react';
import { withOktaAuth } from "@okta/okta-react";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import "../Stylesheets/Profile.css"

export default withOktaAuth(class Profile extends React.Component {

    onClickHandler = () => {
        this.props.oktaAuth.tokenManager.clear()
        this.props.oktaAuth.signOut('/')
    }

    render() {
        return (
            <div className="profile-container">
                <div className="container-item" id="profile-navbar">
                    <h3>Welcome Patient</h3>
                </div>
                <div className="container-item" id="patient-content">
                    patient content here

                </div>
                <div className="container-item" id="logout">
                    <button onClick={this.onClickHandler}>Logout</button>
                </div>

            </div>
        )
    }
});