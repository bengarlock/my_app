import React from 'react';
import { withOktaAuth } from "@okta/okta-react";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import "../Stylesheets/Profile.css"

export default withOktaAuth(class Profile extends React.Component {

    state = {
        prescriptions: [],
    }

    onClickHandler = () => {
        this.props.oktaAuth.tokenManager.clear()
        this.props.oktaAuth.signOut('/')
    }

    renderPrescriptions = () => {
        return this.state.prescriptions.map(prescription => <li key={prescription.id}>{prescription.name}</li>)
    }

    componentDidMount = async () => {
        const request = await fetch("https://www.bengarlock.com:8080/patients/" +
            this.props.oktaAuth.authStateManager._authState.idToken.claims.patientId + "/")
        const data = await request.json()
        this.setState({prescriptions: data.prescriptions})
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
                            Your Member ID number is: {this.props.oktaAuth.authStateManager._authState.idToken.claims.memberId}
                        </>
                        :
                        <>
                            You do not appear to have a Member Id number.  Please contact support.
                        </>
                    }
                </div>
                    <div id="prescriptions">
                        <h3>Prescriptions</h3>
                        <ul>
                            {this.state.prescriptions[0] ?
                                this.renderPrescriptions()
                                :
                                <div>None</div>
                            }
                        </ul>

                    </div>

                <div className="container-item" id="logout">
                    <button onClick={this.onClickHandler}>Logout</button>
                </div>

            </div>
        )
    }
});