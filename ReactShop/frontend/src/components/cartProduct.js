/**
 * Created by mateos on 30/05/2017.
 */
import React from 'react';
import s from '../style.css';
import style from './cartPage.css';

const cartProduct = React.createClass({
    render(){
        return(
            <tr className={style.productitm}>
                <td><img width="50" height="50"  src = {this.props.path} className={style.thumb}/></td>
                <td><input type="number" value="1" min="0" max="99" className={style.qtyinput}/></td>
                <td>Design Bundle Package</td>
                <td>{this.props.price}</td>
                <td>{this.props.title}</td>
                <td>{this.props.desc}</td>
            </tr>
        );
    }
});
export default cartProduct;