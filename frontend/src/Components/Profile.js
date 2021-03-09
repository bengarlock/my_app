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
        console.log(this.props.oktaAuth)
        return (
            <div className="profile-container">
                <div className="container-item" id="profile-navbar">
                    <h3>Welcome {this.props.oktaAuth.authStateManager._authState.idToken.claims.name}</h3>
                </div>
                <div className="container-item" id="patient-content">
                    {this.props.oktaAuth.authStateManager._authState.idToken.claims.memberId ?
                        <>
                            Your Patient ID number is: {this.props.oktaAuth.authStateManager._authState.idToken.claims.memberId}
                        </>
                        :
                        <>
                            You do not appear to have a Patient Id number.  Please contact support.
                        </>
                    }



                </div>
                <div className="container-item" id="logout">
                    <button onClick={this.onClickHandler}>Logout</button>
                </div>

            </div>
        )
    }
});