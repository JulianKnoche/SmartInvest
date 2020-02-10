import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => (
<div> This is the App!!
    <header>
    <Switch>
        <Route exact path="/login" component={LoginFormContainer}/>
        {/* <Route exact path="/signup" component={SignupContainer}/> */}
    </Switch>
        {/* <Link to="/">
            <h1>Welcome to SmartInvest!</h1>
        </Link> */}
        {/* <Route path="/"/> */}

        {/* <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupContainer}/> */}
    </header>
</div>
)

export default App;