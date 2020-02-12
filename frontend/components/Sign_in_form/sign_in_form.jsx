import React from 'react';

class SignInForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push("/profile");
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render () {

        return (
        <div className="SignInPage">
            <img className="signInPageImage" src={window.signIn_picture}></img>
            <form className="signInForm">
                <h2 className="h2title"> Welcome to SmartInvest </h2>

                <label>
                    <div className="InputTitle">Email or username</div>

                    <input type="text" className="signInInput" onChange={this.update('email')}/>
                </label>

                <label>
                    <div className="InputTitle">Password</div>

                    <input type="password" className="signInInput" onChange={this.update('password')}/>
                </label>
                    <br/>
                    <button className="green-button-sign-in" onClick={this.handleSubmit}>Sign In</button>
            </form>
        </div>
        )
    }
}

export default SignInForm;