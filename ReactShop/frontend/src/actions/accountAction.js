/**
 * Created by mateos on 31/05/2017.
 */
const REQUEST_HISTO = 'REQUEST_HISTO';
const RECEIVE_HISTO = 'RECEIVE_HISTO';

const receivedb = (article) =>({type: RECEIVE_HISTO, payload : article});
const requestdb = () => ({type:REQUEST_HISTO});

export function fetchHisto(url)
{
    return (dispatch)=>{
        dispatch(requestdb());
        fetch(url)
            .then((response) => response.json())
            .then((article) =>dispatch(receivedb(article)));
    };
}