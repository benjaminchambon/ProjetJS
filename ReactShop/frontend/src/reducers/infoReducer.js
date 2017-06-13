/**
 * Created by mateos on 08/06/2017.
 */
const initialState = {
    type : 'vide',
    text : 'vide'
};

export default (state = initialState, action = {}) =>{
    switch(action.type){
        case 'INFO_USER': {
            console.log("flash_reducer");
            state =
                {...state,
                    type: action.message.type,
                    text: action.message.text
                };
            break;
        }
    }
    return state;
}
