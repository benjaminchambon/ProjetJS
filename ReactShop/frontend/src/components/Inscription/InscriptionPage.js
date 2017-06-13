/**
 * Created by Benjamin on 10/06/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../../actions/accountAction';
import App from './../App';
import Header from './../Header/Header';
import Inscription from './Inscription'


const InscriptionPage = React.createClass({
    render(){
        return (
            <div>
                <Header/>
                <App>
                    <Inscription/>
                </App>
            </div>
        );
    }
});
export default InscriptionPage;