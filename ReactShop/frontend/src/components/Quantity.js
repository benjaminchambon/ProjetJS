/**
 * Created by Benjamin on 11/06/2017.
 */
import React from 'react';
import s from '../style.css';
import style from './cartPage.css';

const TrashCart = React.createClass({
    getCartRawData()
    {
        var cart_content = JSON.parse(localStorage.getItem("cart"));
        return  cart_content;
    },
    deleteProduct(del_id)
    {
        var cart_content = this.getCartRawData();
        var cart_session = [];
        for (var i = 0; i < cart_content.length; i++) {
            if(i != del_id)
            {
                cart_session.push(cart_content[i]);
            }
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart_session));
        console.log("del_id  : " + del_id);
        window.location.reload("/");
    },
    render(){
        return(
            <input onChange={this.updateQuantity.bind(this)} type="number"  min="0" max="99" />
        );
    }
});