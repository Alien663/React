import { GET_SAMPLE, SET_SAMPLE } from '../Action'

const initialState = {
    data: [],
    req: {},
    counter: 0,
}

const SampleReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SAMPLE:
            return {
                ...state,
                req: action.req,
            }
        case SET_SAMPLE:
            return {
                ...state,
                data: action.data,
            }
        default:
            return {...state}
    }
}

export default SampleReducer