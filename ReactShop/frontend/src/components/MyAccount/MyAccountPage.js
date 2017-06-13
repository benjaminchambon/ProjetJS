/**
 * Created by Benjamin on 29/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from './../../actions/articleAction';
import App from './../App';
import Header from './../Header/Header';
import MyAccount from './MyAccount'


const MyAccountPage = React.createClass({
    render(){
        return (
            <div>
                <Header/>
                <App>
                    <MyAccount/>
                </App>
            </div>
        );
    }
});
export default MyAccountPage;