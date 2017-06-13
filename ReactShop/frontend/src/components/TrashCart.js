/**
 * Created by mateos on 10/06/2017.
 */
import React from 'react';
import s from './trashcart.css';
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
    updateSession(updateId)
    {
        var cart_content = this.getCartRawData();
        var cart_session = [];
        for (var i = 0; i < cart_content.length; i++) {
            if(i != updateId)
            {
                cart_session.push(cart_content[i]);
            }
            else
            {
                var tmp = cart_content[i];
                tmp.quantity =this.state.quantity;
                cart_session.push(tmp);
            }
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart_session));

    },
    render(){
        return(
        <tr className={style.productitm}>
            <td><img width="50" height="50"  src = {this.props.product.path} className={style.thumb}/></td>
            <td>1</td>
            <td>{this.props.product.title}</td>
            <td>€ {Number(this.props.product.price).toFixed(2)}</td>
            <td><span><button className={s.btnSupp} onClick={()=> this.deleteProduct(this.props.idTrash)}>
                <img height="20px" width="20px" src={require('./../images/poubelle.png')}/>
            </button></span></td>
        </tr>

        );
    }
});
export default TrashCart;