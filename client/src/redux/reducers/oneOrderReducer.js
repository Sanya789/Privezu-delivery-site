import { initState } from '../initState';
import {GET_ONE_ORDER} from '../types/orderTypes';
// import {DELETE_TASK,CHANGE_STATUS} from '../types/taskTypes';

export const oneOrderReducer = (state = initState,action ) => {
    const {type,payload} = action
switch (type) {
   

    case GET_ONE_ORDER:
        return payload
    
        default:
            return state;
        

    }
}
    