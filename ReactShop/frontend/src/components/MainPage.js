/**
 * Created by mateos on 25/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../actions/articleAction';
import ProductGrid from './ProductGrid'
import App from './App';
import Header from './Header/Header';
import Login from './Login'


const MainPage = React.createClass({
    render(){
        return (
            <div>

                <Header/>
                <App>
                    <ProductGrid ressourceURL="http://localhost:4246/allproduct/"/>
                </App>
            </div>
        );
    }
});
export default MainPage;