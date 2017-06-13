/**
 * Created by mateos on 29/05/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {fetchPicture} from '../actions/articleAction';
import Product from './Product';
import s from './sidebar.css';

const ProductGrid = React.createClass({
    getInitialState: function () {
        return {
            search: '',
            genre: '',
            annee: '',
            currentImg: 0,
            time: null,
            listSize : 0
        };
    },

    componentWillMount(){
        this.props.fetchPicture(this.props.ressourceURL);
        console.log('get_sess' + this.props.user.user)
        if (localStorage.getItem("session") != undefined) {
            console.log('session active');
        }
        else {
            console.log('pas de session');
            //window.location.reload();
        }
        this.startTimer(100);
    },

    handleClick(curGenre){
        if (!isNaN(parseInt(curGenre)) && isFinite(curGenre)) {
            this.setState({annee: curGenre});
            this.setState({genre: ''});
        }
        else {
            this.setState({genre: curGenre});
            this.setState({annee: ''});
        }
        if (curGenre == 'tous') {
            this.setState({genre: ''});
            this.setState({annee: ''});
        }
    },

    getImagebyNb(index, list){
        if (list.length != 0 && list[index] != undefined) {
            return (<img className={s.imgChange} height="200" width="200" src={list[index].imagePath}/>);
        }
    },

    changeRecentImg(sens)
    {
        if (this.state.currentImg < 7 && this.state.currentImg >= 0) {
            if (sens == 'prev' && this.state.currentImg != 0)
                this.setState({currentImg: this.state.currentImg - 1});
            if (sens == 'next')
                this.setState({currentImg: this.state.currentImg + 1});
        }
        else
            this.setState({currentImg: 0});
    },

    updateSearch(event)
    {
        this.setState({search: event.target.value.substr(0, 20)});
    },

    startTimer(time) {
        //clearInterval(this.state.int);
        var _this = this;
        var int = setInterval(function () {
            var tl = _this.state.time - 1;
            if (tl == 0) clearInterval(int);
            _this.setState({ time: tl });
            _this.changeRecentImg('next');
        }, 3000);

        return this.setState({ time: time });
    },

    render()
    {
        let filteredProduct = this.props.item.article.filter(
            (Product) => {
                return Product.title.toLowerCase().indexOf(this.state.search) !== -1 && Product.genre.toLowerCase().indexOf(this.state.genre) !== -1 && Product.year.toLowerCase().indexOf(this.state.annee) !== -1;
            }
        );

        return (
            <div className={s.mainContainer}>
                <div className={s.onglet}>
                    <input className={s.recherche}
                           type="text"
                           value={this.state.search}
                           onChange={this.updateSearch.bind(this)}
                           placeholder="Rechercher"
                           style={{verticalAlign: 'top', padding: '30', width: '200px', margin: '10px'}}
                    />

                    <ul className={s.menuButton}>
                        <li>
                            <li>
                                <button  onClick={(e) => this.handleClick('tous')}className={s.buttonTous} >
                                     Tous
                                </button>
                            </li>
                        </li>

                        <li>
                            <a href="#"> Genre </a>
                            <ul className={s.list_ul} >
                                <li>
                                    <button onClick={(e) => this.handleClick('action')} className={s.buttonGenre}>
                                        Action
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('fantastique')} className={s.buttonGenre}>
                                        Fantastique
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('drame')} className={s.buttonGenre}>
                                        Drame
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('aventure')} className={s.buttonGenre}>
                                        Aventure
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('scienfiction')} className={s.buttonGenre}>
                                        Science fiction
                                    </button>
                                </li>
                            </ul>
                        </li>


                        <li >
                            <a href="#"> Année </a>
                            <ul className={s.list_ul}>
                                <li>
                                    <button onClick={(e) => this.handleClick('2017')} className={s.buttonGenre}>
                                        2017
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2016')} className={s.buttonGenre}>
                                        2016
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2014')} className={s.buttonGenre}>
                                        2014
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2013')} className={s.buttonGenre}>
                                        2013
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2012')} className={s.buttonGenre}>
                                        2012
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2011')} className={s.buttonGenre}>
                                        2011
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2010')} className={s.buttonGenre}>
                                        2010
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('2009')} className={s.buttonGenre}>
                                        2009
                                    </button>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleClick('1972')} className={s.buttonGenre}>
                                        1972
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={s.resultats}>
                    <div className={s.baniere}>
                        <button className={s.btnPrev} onClick={(e) => this.changeRecentImg('prev')} style={{float: 'left'}}> prev</button>
                        <div style={{width : '100px'}}></div>
                        <img className={s.flecheG} src={require('../images/flecheDroite.png')}/>
                        {this.getImagebyNb(this.state.currentImg, this.props.item.article)}
                        <img className={s.flecheD} style={{ }} src={require('../images/flecheGauche.png')}/>
                        <div style={{width : '100px'}}></div>
                        <button className={s.btnNext} onClick={(e) => this.changeRecentImg('next')} style={{float: 'right'}}> next
                        </button>
                    </div>
                    <div>
                        {
                            filteredProduct.map(c => <Product idproduct={c.id} path={c.imagePath}
                                                              desc={c.description}
                                                              price={c.price} title={c.title}/>)
                        }
                    </div>
                </div>

            </div>
        );
    }
});
export default ProductGrid;
