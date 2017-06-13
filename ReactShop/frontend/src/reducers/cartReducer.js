/**
 * Created by mateos on 31/05/2017.
 */
const initialState = {
    fetching:false,
    fetched: false,
    db_error:[],
    error: null,
};

function cartReducer(state=initialState,action)
{
    switch (action.type){
        case "REQUEST_BUY": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching:false,error:action.payload}
            break;
        }
        case "RECEIVE_BUY":{
            return{
                ...state,
                fetching:false,
                fetched: true,
                db_error: action.payload,
            }
            break;
        }
    }
    return state;
}

export default cartReducer;