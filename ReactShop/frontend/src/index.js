
import React from "react";
import ReactDOM from "react-dom";
import store,{history} from "./store/store";
import {Provider} from "react-redux";
import Header from './components/Header/Header';
import MainPage from "./components/MainPage";
import main from "./components/main"
import {Router,Route,IndexRoute, browserHistory} from 'react-router';
import App from "./components/App";
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage'
import MyAccountPage from './components/MyAccount/MyAccountPage'
import InscriptionPage from './components/Inscription/InscriptionPage'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
                <Route path="/login/" component={LoginPage}/>
                <Route path="/cart/" component={CartPage}/>
                <Route path="/myAccount/" component={MyAccountPage}/>
                <Route path="/inscription/" component={InscriptionPage}/>
            </Route>
        </Router>

    </Provider>
    ,
    document.getElementById('root')
);