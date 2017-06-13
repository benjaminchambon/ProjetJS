/**
 * Created by Benjamin on 29/05/2017.
 */

import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../../actions/articleAction';
import {browserHistory} from 'react-router';
import style from './styleMyAccount.css'
import s from './../cartPage.css';


const MyAccount = React.createClass({
    componentWillMount(){
        var user_id = this.getUserRawData();
        this.props.fetchHisto("http://localhost:4246/gethistory?user=" + user_id[0].id);
    },
    getUserRawData()
    {
        var user_content = JSON.parse(localStorage.getItem("session"));
        console.log("user_content" + user_content[0].id);
        return user_content;
    },
    getUserArticle()
    {
        var rows = [];
        var art_cont = this.props.histo_article.histo_article;
        for (var i = 0; i < art_cont.length; i++) {
            rows.push(<tr>
                <td><img width="50" height="50" src={art_cont[i].imagePath}/></td>
                <td>{art_cont[i].title}</td>
                <td>{art_cont[i].price} €</td>
            </tr>);
        }
        console.log("histo_article: " + this.props.histo_article);
        return <tbody>{rows}</tbody>;

    },
    render(){
        if (this.props.histo_article.fetched) {
            return (
                <div>
                    <h1>BIENVENUE {this.getUserRawData()[0].pseudo}</h1>
                    <div className={style.div1}>
                        <table id="cart" className={style.informations}>
                            <thead>
                            <h2>Mes informations</h2>
                            <tr>
                                <th>Login :</th>
                                <td>{this.getUserRawData()[0].pseudo}</td>
                            </tr>
                            <td>&nbsp;</td>
                            <tr>
                                <th> Adresse de livraison :</th>
                                <td> {this.getUserRawData()[0].address}</td>
                            </tr>
                            <td>&nbsp;</td>
                            <tr>
                                <th> Email :</th>
                                <td> {this.getUserRawData()[0].email}</td>
                            </tr>
                            </thead>
                        </table>
                    </div>


                    <div className={style.div2}>
                        <table id="cart" className={style.historique}>
                            <thead>
                            <h2> Historique des commandes</h2>
                            <tr className={s.productitm}>
                                <th className={s.photo}>Photo</th>
                                <th className={s.quantity}>Produit</th>
                                <th className={s.prix}>Prix</th>
                            </tr>
                            </thead>
                            {this.getUserArticle()}
                        </table>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }
});
export default MyAccount;