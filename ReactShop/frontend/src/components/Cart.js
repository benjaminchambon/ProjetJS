/**
 * Created by Benjamin on 29/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchCart} from '../actions/cartAction';
import {browserHistory} from 'react-router';
import style from './cartPage.css';
import cartProduct from './cartProduct';
import TrashCart from './TrashCart';



const Cart = React.createClass({
    getInitialState: function () {
        return {
            quantity: 1
        };
    },
    componentWillMount(){
        this.props.infoFlash({type:0,text: 'vide'});
    },
    getCartRawData()
    {
        var cart_content = JSON.parse(localStorage.getItem("cart"));
        return  cart_content;
    },
    buyProduct(e)
    {
        e.preventDefault();
        console.log('achat');
        var cart_content = this.getCartRawData();
        var user = JSON.parse(localStorage.getItem("session"));
        if (cart_content.length > 0) {
            for (var i = 0; i < cart_content.length; i++) {
                console.log(user[0].id + "&product=" + cart_content[i].id);
                this.props.fetchCart("http://localhost:4246/insertProduct?user=" + user[0].id + "&product=" + cart_content[i].id);
            }
            var cart_session = [];
            localStorage.setItem("cart", JSON.stringify(cart_session));
            this.props.infoFlash({type: cart_content.length, text: 'Vous avez acheter'});
        }
        else
        {
            this.props.infoFlash({type: cart_content.length, text: 'Vous avez acheter'});
        }
        //window.location.reload();
       // browserHistory.push("/cart/");
    },
    deleteProduct(i)
    {
        console.log("delete_porduct " + i);
    },
    updateQuantity(event)
    {
        this.setState({quantity: event.target.value});
    },
    getArticleList()
    {
        var rows = [];
        var final_price = 0;
        var cart_cont = this.getCartRawData();
        for (var i=0; i < cart_cont.length; i++) {
            var id = i;
            console.log(id);
            rows.push(<TrashCart idTrash={id} product={cart_cont[i]}/>);
            final_price += cart_cont[i].price ;
        }
        rows.push(
            <tr>
                <td>TVA</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span>€ {Number(final_price/10).toFixed(2)}</span></td>
            </tr>
        );
        rows.push(
            <tr>
                <td>Total:</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span>€ {Number(parseFloat(final_price) + parseFloat(final_price/10)).toFixed(2)}</span></td>
            </tr>
        );
        rows.push(
            <tr>
                <td>
                    <button onClick={(e)=> this.buyProduct(e)} >Acheter</button>
                </td>
            </tr>
        );
        return <tbody>{rows}</tbody>;
    },

    getArticleFlash()
    {
        console.log('test');
        if (this.props.flash_info.text != 'vide') {
            return (<p>{this.props.flash_info.text + " " +this.props.flash_info.type +" produits"}</p>)
        }
    },
    render(){

                    return (
                    <div className={style.divTable} id="page" >
                    <table id="cart" className={style.cart}>
                    <thead>
                    <tr className={style.productitm}>
                    <th className={style.photo}>Photo</th>
                    <th className={style.quantity}>Quantité</th>
                    <th className={style.produit}>Produits</th>
                    <th className={style.total}>Total</th>
                    <th className={style.remove}>&nbsp;</th>
                    </tr>
                    </thead>
                    {this.getArticleList()}
                    </table>
                        <p>
                            {this.getArticleFlash()}
                        </p>

                    </div>
                    );

    }
});
export default Cart;
