/**
 * Created by mateos on 27/05/2017.
 */
const REQUEST_USER = 'REQUEST_USER';
const RECEIVE_USER = 'RECEIVE_USER';
const SEND_USER = 'SEND_USER';

const receiveUser = (user) => ({type: RECEIVE_USER, payload: user});
const requestUser = () => ({type: REQUEST_USER});
const sendUser = (items) => ({type: SEND_USER, payload:items});

export function fetchLogin(url) {
    return (dispatch) => {
        dispatch(requestUser());
        fetch(url)
            .then((response) => response.json())
            .then((user) => dispatch(receiveUser(user)));
    };
}

export function fetchSignIn(url, user, pass, email) {
    console.log('ACTION = ' + url + " " + user + " " + pass + " " + email);
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: user,
                pass: pass,
                email: email,
            })
        })
            .then((response) => response.json())
            .then((items) => dispatch(sendUser(items)));
    };
}