import { SET_SELECTED_VIDEO } from "../actions";

export default function(state = null, action) {
    switch(action.type) {
        case SET_SELECTED_VIDEO:
            if (!action.payload) {
                return state;
            }
            return action.payload;
        
        default:
            return state;
    }
}