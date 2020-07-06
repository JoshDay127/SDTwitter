
import {INITIAL_LOAD_FAILURE, INITIAL_LOAD_SUCCESS} from '../actionTypes'

export default function loadReducer(state = [], action){
    switch(action.type){
        case INITIAL_LOAD_SUCCESS:
            console.log(action.payload);
            return [...state, action.payload];
        case INITIAL_LOAD_FAILURE:
            return state;
        default:
            return state;
    }
}