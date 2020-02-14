import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                buying_power: 1000,
            };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state).then( () => this.props.history.push("/profile"));
    }

    update(field) {
        return (e) => {
            // debugger
            this.setState({ [field]: e.target.value })
        }
    }

    render () {
        return (
        <div className="signUpContainer">
            <h1 className="sign-up-header1">Make Your Money Move</h1>
            <h2 className="sign-up-header2">SmartInvest lets you invest in companies you love, commission-free.</h2>
            <form className="SignUpForm">
                <div className="name-input">
                <input type="text" className="signup-field" placeholder="First name" onChange={this.update('first_name')}/>
                <input type="text" className="signup-field" placeholder="Last name" onChange={this.update('last_name')}/>
                </div>
                <input type="text" className="signup-field" placeholder="Email address" onChange={this.update('email')}/>
                <input type="password" className="signup-field" placeholder="Password (min. 10 characters)" onChange={this.update('password')}/>
                    <button className="green-button-sign-up" onClick={this.handleSubmit}>Sign Up!</button>
                    <br/>
                    <div className="sign-in-div-on-sign-up-page">
                    Already have an account? <Link className="sign-in-text-on-sign-up-page" to="/login">Log In</Link>
                    </div>
            </form>
        </div>
        )
    }
}

export default SignUpForm;