/**
 * Created by Benjamin on 10/06/2017.
 */

import React from 'react';
import s from './inscription.css';


const Inscription = React.createClass({


    sendLogin(e)
    {
       e.preventDefault();
        const user = this.refs.user.value;
        const pass = this.refs.pass.value;
        const repass = this.refs.repass.value;
        const email = this.refs.email.value;

        if (pass !== repass || pass === ''){
            this.refs.loginForm.reset();
        }
        else {
            this.props.fetchSignIn(
                'http://localhost:4246/userInsert',
                user,
                pass,
                email,
            );
        }
    },
    render(){
        if (this.props.user.Message === 'Success'){
            window.location = 'http://localhost:8080/login/';
        }

        return (
            <div className={s.container}>
                <img src={require('../../images/person.png')}/>
                <form ref="loginForm" onSubmit={(e) => this.sendLogin(e)}>
                    <div className={s.formInput}>
                        <input type="text" ref="user" placeholder="Entrer votre pseudo"/>
                    </div>
                    <div className={s.formInput}>
                        <input type="password" ref="pass" placeholder="Entrer votre mot de passe"/>
                    </div>
                    <div className={s.formInput}>
                        <input type="password" ref="repass" placeholder="Repéter votre mot de passe"/>
                    </div>
                    <div className={s.formInput}>
                        <input type="text" ref="email" placeholder="Entrer votre adresse email"/>
                    </div>
                    <input className={s.btnValider} type="submit" value="S'inscrire"/>
                </form>
            </div>
        )
    }
});




export default Inscription;
