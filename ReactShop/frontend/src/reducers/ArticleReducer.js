/**
 * Created by mateos on 23/05/2017.
 */
const initialState = {
    fetching:false,
    fetched: false,
    article:[],
    error: null,
};

function ArticleReducer(state=initialState,action)
{
    switch (action.type){
        case "REQUEST_PICTURE": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching:false,error:action.payload}
            break;
        }
        case "RECEIVE_PICTURE":{
            return{
                ...state,
                fetching:false,
                fetched: true,
                article: action.payload,
            }
            break;
         }
        }
        return state;
    }

export default ArticleReducer;

