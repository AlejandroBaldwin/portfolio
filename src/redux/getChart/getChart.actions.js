import getChartTypes from './getChart.types';

const {
    GET_CHART_FAILED,
    GET_CHART_PENDING,
    GET_CHART_SUCCESS
} = getChartTypes;

export const getChart = (symbol) => (dispatch) => {
    dispatch({ type: GET_CHART_PENDING });
    fetch(`https://us-central1-westockedup.cloudfunctions.net/app/getChart/${symbol}/1m`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_CHART_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: GET_CHART_FAILED, payload: error}))
}