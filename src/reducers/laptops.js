import {constants} from "../actions/laptops"

const initialState = {
    loading: false,
    arr: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case constants.GET_LAPTOPS:
            return {...state, loading: true}
        case constants.GET_LAPTOPS_PASS:
            return {...state, loading: false, arr: action.payload}
        default: 
            return state
    }
}