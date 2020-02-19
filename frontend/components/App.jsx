import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SignupContainer from './Sign_up_form/sign_up_form_container';
import LoginFormContainer from './Sign_in_form/sign_in_form_container';
import Userhomepagecontainer from './home_page/home_page_container';
import StockShowContainer from './stocks/stock_show_container';
import NavBar  from './splash/nav';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './splash/footer';



const App = () => (
<div>
    <header>
    </header>
        <Route exact path = "/" component={NavBar}/>
        <Route exact path = "/" component={Splash}/>
    <Switch>

        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <ProtectedRoute exact path="/profile" component={Userhomepagecontainer}/>
        <Route exact path="/stock/:stockSymbol" component={StockShowContainer}/>
        <Route path = "/" component={Footer}/>
    </Switch>
</div>
)

export default App;