/**
 * Created by mateos on 25/05/2017.
 */
import {connect} from "react-redux";
import main from "./main";
import {fetchPicture} from '../actions/articleAction';
import {fetchLogin} from '../actions/userAction';
import {fetchCart} from '../actions/cartAction';
import {fetchHisto} from '../actions/accountAction';
import {fetchSignIn} from '../actions/userAction'
import {addFlashMessage} from '../actions/infoAction';

function mapStateToProps(state){
    return {
        item: state.ArticleReducer,
        user : state.userReducer,
        histo_article : state.accountReducer,
        flash_info :state.infoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPicture: (url) => {
            dispatch(fetchPicture(url));
        },
        fetchLogin:(url) =>{
            dispatch(fetchLogin(url));
        },
        fetchCart: (url) => {
            dispatch(fetchCart(url));
        },
        fetchHisto: (url) => {
            dispatch(fetchHisto(url));
        },
        infoFlash: (message) => {
            dispatch(addFlashMessage(message));
        },
        fetchSignIn:(url, user, pass, email) => {
            dispatch(fetchSignIn(url, user, pass, email));
        }
    }
}
const App = connect(mapStateToProps, mapDispatchToProps)(main);
export default App;