import getChartTypes from './getChart.types';

const {
    GET_CHART_FAILED,
    GET_CHART_PENDING,
    GET_CHART_SUCCESS
} = getChartTypes;

const initialState = {
    timeline: [],
    isTimelinePending: false
}

const getChartReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_CHART_PENDING:
            return {
                ...state,
                isTimelinePending: true
            };
        case GET_CHART_SUCCESS:
            return {...state,
                isTimelinePending: false,
                timeline: action.payload
            };
        case GET_CHART_FAILED:
            return {
                ...state,
                isTimelinePending: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default getChartReducer;