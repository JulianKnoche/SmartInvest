import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SignupContainer from './Sign_up_form/sign_up_form_container';
import LoginFormContainer from './Sign_in_form/sign_in_form_container';
import Userhomepagecontainer from './home_page/home_page_container';
import StockShowContainer from './stocks/stock_show_container';
import StockIndexContainer from './stocks/stock_index_container';
import NavBar  from './splash/nav';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './splash/footer';




const App = () => (
<div>
    <header>
    </header>
        <AuthRoute exact path = "/" component={NavBar}/>
        <AuthRoute exact path = "/" component={Splash}/>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <ProtectedRoute exact path="/profile" component={Userhomepagecontainer}/>
        <ProtectedRoute exact path="/stock/:stockSymbol" component={StockShowContainer}/>
        <ProtectedRoute exact path = "/stocks" component={StockIndexContainer}/>
    </Switch>
        <Route exact path = "/" component={Footer}/>
</div>
)

export default App;