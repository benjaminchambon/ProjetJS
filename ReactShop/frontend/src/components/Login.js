/**
 * Created by mateos on 27/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../actions/articleAction';
import {browserHistory} from 'react-router';
import s from './login.css';

const Login = React.createClass({
    sendLogin(e){
        console.log('toto');
        e.preventDefault();
        //donnée du formulaire
        const user = this.refs.user.value;
        const pass = this.refs.pass.value;
        console.log(user);
        console.log(pass);
        this.props.fetchLogin('http://localhost:4246/user?pseudo='+user+'&password='+pass);
        //redirection vers la page d'acceuil
    },
    getInfoFlash()
    {
        console.log('test');
        if (this.props.flash_info.text != 'vide') {
            return (<p>{this.props.flash_info.text}</p>)
        }
    },
    render(){
        if (this.props.user.fetched) {
            if (this.props.user.user[0] !=undefined) {
                var cart_session = [];
                localStorage.setItem("cart", JSON.stringify(cart_session));
                localStorage.setItem("session", JSON.stringify(this.props.user.user));
                var user_content = JSON.parse(localStorage.getItem("session"));
                console.log("user_content" + user_content);
                browserHistory.push("/");
                if (this.props.flash_info.type != 1) {
                    this.props.infoFlash({type: 1, text: 'vide'});
                }
                console.log("lolo");
            }
            else
            {
                console.log("bla");
                if (this.props.flash_info.type != 1) {
                    this.props.infoFlash({type: 1, text: 'Mot de passe incorrect'});
                }
            }
        }
        return (
            <div className={s.container}>
                <img src={require('../images/person.png')}/>
                <form ref="loginForm" onSubmit={(e) => this.sendLogin(e)}>
                    <div className={s.formInput}>
                        <input type="text" ref="user" placeholder="Entrer votre pseudo"/>
                    </div>
                    <div className={s.formInput}>
                        <input type="password" ref="pass" placeholder="Entrer votre mot de passe"/>
                    </div>
                    <input className={s.btnValider} type="submit" value="Connexion"/>
                </form>
                <p>{this.getInfoFlash()}</p>
            </div>
        );
    }
});
export default Login;