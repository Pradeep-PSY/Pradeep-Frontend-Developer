import { GET_DATA_SUCCESS } from "../Actions/Action.Types"

const initialState = {
    data: []
}

export const DataReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_DATA_SUCCESS:{
            return {
                ...state,
                data: payload
            }
        }
        default: return state
    }
}