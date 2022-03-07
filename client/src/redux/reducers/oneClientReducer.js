import { GET_CLIENT } from "../types/clienType";
import { initState } from "../initState";





export const oneClientReducer = (state = initState, action) => {
    const {type,payload} = action

    switch (type) {
   
    case GET_CLIENT:
        return payload
    
        default:
            return state;
        

    }
}
    