/**
 * Created by mateos on 27/05/2017.
 */
const initialState = {
    fetching:false,
    fetched: false,
    user:[],
    error: null,
};

function userReducer(state=initialState,action)
{
    switch (action.type){
        case "REQUEST_USER": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching:false,error:action.payload}
            break;
        }
        case "RECEIVE_USER":console.log('receive_user');{

            return{
                ...state,
                fetching:false,
                fetched: true,
                user: action.payload,
            }
            break;
        }
        case "SEND_USER":console.log('receive_user');{
          return action.payload;
            break;
        }
    }
    return state;
}

export default userReducer;