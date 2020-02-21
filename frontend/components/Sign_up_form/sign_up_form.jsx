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
                buying_power: 50000,
            };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demologin = this.demologin.bind(this);
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

    renderErrors() {

        return(
          <ul className="ulerrors">

            {this.props.errors.map((error, i) => (

              <li className= "errors" key={`error-${i}`}>
                  <img className="bang" src={bang}/>
                <div>{error}</div>
              </li>
            ))}
          </ul>
        );
      }

      componentDidUpdate () {
            if (this.state.password.length < 10) {
                const inputs = document.getElementsByClassName("password-signup-field");
                // input.classList.add("signup-error")

                for(let i=0; i < inputs.length; i++) {
                    inputs[i].classList.add("signup-error")
                }
            } else {
                const inputs = document.getElementsByClassName("password-signup-field");
                // input.classList.add("signup-error")

                for(let i=0; i < inputs.length; i++) {
                    inputs[i].classList.remove("signup-error")
                }
            }
      }

      demologin () {
          this.props.login({email: "tommy@gmail.com", password: "hunter1234"}).then( () => this.props.history.push("/profile"));
      }

    render () {
        return (
        <div className="signUpContainer">
            <h1 className="sign-up-header1">Make Your Money Move</h1>
            <h2 className="sign-up-header2">SmartInvest lets you invest in companies you love, commission-free.</h2>
            <form className="SignUpForm">
                <div className="name-input">
                    <input type="text" className="signup-field left-input" placeholder="First name" onChange={this.update('first_name')}/>
                    <input type="text" className="signup-field right-input" placeholder="Last name" onChange={this.update('last_name')}/>
                </div>
                <input type="email" className="signup-field" placeholder="Email address" onChange={this.update('email')}/>
                <input type="password" className="signup-field password-signup-field" placeholder="Password (min. 10 characters)" onChange={this.update('password')}/>
                    <button className="green-button-sign-up" onClick={this.handleSubmit}>Sign Up!</button>
                    <div className="signup-errors">{this.renderErrors()}</div>
                    <br/>
                    <div className="sign-in-div-on-sign-up-page">
                    Already have an account? <Link className="sign-in-text-on-sign-up-page" to="/login">Log In</Link>
                    </div>
            </form>
            <div>
                <button className="demo-login-button" onClick={this.demologin}>Demo User Login</button>
            </div>
        </div>
        )
    }
}

export default SignUpForm;