import React from 'react';
import s from '../style.css';

const Product = React.createClass({
    sendProductToCart(e){
        e.preventDefault();
        if (localStorage.getItem("cart") != undefined) {
            var cart = JSON.parse(localStorage.getItem("cart"));
            cart.push({
                "id": this.props.idproduct,
                "price": this.props.price,
                "desc": this.props.desc,
                "path": this.props.path,
                "title": this.props.title,
                "quantity": 1
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log('sess' + cart);
        }
        else
        {
            console.log('Vous devez vous connectez pour acheter un produit');
            this.props.infoFlash({type: 0, text: 'Vous avez acheter'});
        }
    },
    buttonAddToCart()
    {
        if (localStorage.getItem("session") != undefined) {
          return  <button onClick={(e) => this.sendProductToCart(e)}>Ajouter</button>;
        }
    }
    ,
    render(){
        return(
            <div className={s.productItem} style={{display: 'inline-block'}}>
                <img height="200" width="200" src={this.props.path}/>
                <p>{this.props.title}</p>
                <div className={s.priceAddBtn}>
                    <p className={s.priceProduct}>{this.props.price} €</p>
                    {this.buttonAddToCart()}

                </div>
            </div>
        );
    }
});
export default Product;