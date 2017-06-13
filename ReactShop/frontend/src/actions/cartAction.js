/**
 * Created by mateos on 31/05/2017.
 */
const REQUEST_BUY = 'REQUEST_BUY';
const RECEIVE_BUY = 'RECEIVE_BUY';

const receivedb = (article) =>({type: RECEIVE_BUY, payload : article});
const requestdb = () => ({type:REQUEST_BUY});

export function fetchCart(url)
{
    return (dispatch)=>{
        dispatch(requestdb());
        fetch(url)
            .then((response) => response.json())
            .then((article) =>dispatch(receivedb(article)));
    };
}