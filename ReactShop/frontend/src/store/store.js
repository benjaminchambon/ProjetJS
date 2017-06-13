/**
 * Created by mateos on 23/05/2017.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from 'react-router-redux';
import ArticleReducer from '../reducers/ArticleReducer';
import cartReducer from '../reducers/cartReducer';
import accountReducer from '../reducers/accountReducer';
import userReducer from '../reducers/userReducer';
import { routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import infoReducer from '../reducers/infoReducer';


const rootReducer = combineReducers({
    cartReducer,
    ArticleReducer,
    userReducer,
    accountReducer,
    infoReducer,
    routing: routerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;