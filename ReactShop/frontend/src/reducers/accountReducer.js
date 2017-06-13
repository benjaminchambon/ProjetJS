/**
 * Created by mateos on 31/05/2017.
 */
const initialState = {
    fetching:false,
    fetched: false,
    histo_article:[],
    error: null,
};

function accountReducer(state=initialState,action)
{
    switch (action.type){
        case "REQUEST_HISTO": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching:false,error:action.payload}
            break;
        }
        case "RECEIVE_HISTO":{
            console.log("histo_reducer");
            return{
                ...state,
                fetching:false,
                fetched: true,
                histo_article: action.payload,
            }
            break;
        }
    }
    return state;
}

export default accountReducer;