/**
 * Created by mateos on 23/05/2017.
 */
const REQUEST_PICTURE = 'REQUEST_PICTURE';
const RECEIVE_PICTURE = 'RECEIVE_PICTURE';

const receivePicture = (article) =>({type: RECEIVE_PICTURE, payload : article});
const requestPicture = () => ({type:REQUEST_PICTURE});

export function fetchPicture(url)
{
    return (dispatch)=>{
        dispatch(requestPicture());
        fetch(url)
            .then((response) => response.json())
            .then((article) =>dispatch(receivePicture(article)));
    };
}