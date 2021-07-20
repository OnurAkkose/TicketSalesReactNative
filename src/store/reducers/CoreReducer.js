import { CORE_NOTIFY_ACTION, UPDATE_NOTIFY_ACTION } from "../actions/CoreActions";

const CORE_INIT_STATE = {
    notification: {
        message: "",
        type: "",
    },
};
const CoreReducer = (state = CORE_INIT_STATE, action) => {
    switch (action.type) {
        case CORE_NOTIFY_ACTION:    
          
            return  {
              notification : action.payload
            }
        case UPDATE_NOTIFY_ACTION:
            return{
                notification: undefined
            }
        default:
            return state;
    }
};

export default CoreReducer;
