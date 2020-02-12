import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SignupContainer from './Sign_up_form/sign_up_form_container';
import LoginFormContainer from './Sign_in_form/sign_in_form_container';
import UserProfileContainer from './user_portfolio/user_portfolio_container';
import NavBar  from './splash/nav';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
<div>
    <header>
        <Link to="/">

        </Link>


        {/* <Link to="/">
            <h1>Welcome to SmartInvest!</h1>
        </Link> */}
        {/* <Route path="/"/> */}

        {/* <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupContainer}/> */}
    </header>
    <Route exact path = "/" component={NavBar}/>
        <Route exact path = "/" component={Splash}/>
    <Switch>

        <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupContainer}/>
        <Route exact path="/profile" component={UserProfileContainer}/>
    </Switch>
</div>
)

export default App;