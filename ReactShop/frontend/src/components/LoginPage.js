/**
 * Created by mateos on 27/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../actions/articleAction';
import App from './App';
import Header from './Header/Header';
import Login from './Login'


const LoginPage = React.createClass({
    render(){
        return (
            <div>

                <Header/>
                <App>
                    <Login/>
                </App>
            </div>
        );
    }
});
export default LoginPage;