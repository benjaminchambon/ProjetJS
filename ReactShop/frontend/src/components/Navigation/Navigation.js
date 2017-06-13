import React from 'react';
import {connect} from 'react-redux';
import s from './Navigation.css';
import {browserHistory} from 'react-router';

class Navigation extends React.Component {
   redirectToCart(e) {
      e.preventDefault();
      console.log('redirection');
      browserHistory.push("/cart/");
    }
    redirectToLanding(e) {
        e.preventDefault();
        console.log('redirection');
        browserHistory.push("/");
    }
    redirectToLogin(e) {
    e.preventDefault();
    console.log('redirection');
    browserHistory.push("/login/");
}
    redirectToLogOff(e) {
        e.preventDefault();
        localStorage.clear();
        browserHistory.push("/");
        window.location.reload("/");
    }
    redirectToAccount(e) {
        e.preventDefault();
        browserHistory.push("/myAccount/");
    }
    redirectToSign(e) {
        e.preventDefault();
        browserHistory.push("/inscription/");
    }

    render() {
        if (localStorage.getItem("session") != undefined) {
            return (
                <div >
                    <ul>
                        <li><img height="56" width="56" src={require('../../images/caddie.png')}/></li>
                        <li><button className={s.buttonWelcome}>REACTSHOP</button></li>
                        <li>  <button className={s.buttonGenre} onClick={(e)=> this.redirectToLanding(e)}>Nos produits</button></li>
                            <li> <button className={s.buttonGenre} onClick={(e)=> this.redirectToCart(e)} >Panier</button></li>

                                    <li><button className={s.buttonGenre} onClick={(e)=> this.redirectToAccount(e)}>Mon compte</button></li>
                        <li> <button className={s.buttonGenre} onClick={(e)=> this.redirectToLogOff(e)}>Deconnexion</button></li>
                </ul>
                </div>
            );
        }
        else {
            return (
                <div >
                    <ul>
                        <li><img className={s.buttonWelcome} height="56" width="56" src={require('../../images/caddie.png')}/></li>
                        <li><button className={s.buttonWelcome}>REACTSHOP</button></li>
                        <li><button className={s.buttonGenre} onClick={(e)=> this.redirectToLanding(e)}>Nos produits</button></li>
                        <li><button className={s.buttonGenre}   onClick={(e)=> this.redirectToLogin(e)}>Connexion</button></li>
                        <li><button className={s.buttonGenre}   onClick={(e)=> this.redirectToSign(e)}>Inscription</button></li>
                    </ul>
                </div>
            );
        }

    }
}

export default connect()(Navigation);