import windowWidthTypes from './windowWidth.types';

const {
    GET_MAIN_WIDTH
} = windowWidthTypes;

const initialWidthState = {
    mainWidth: 0
}

const windowWidthReducer = (state=initialWidthState, action={}) => {
    switch(action.type) {
        case GET_MAIN_WIDTH:
            return {
                ...state,
                mainWidth: action.payload
            }
        default:
            return state
    }
}

export default windowWidthReducer;