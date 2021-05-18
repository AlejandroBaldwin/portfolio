import windowWidthTypes from './windowWidth.types';

const {
    GET_MAIN_WIDTH
} = windowWidthTypes;

export const getContainerWidth = (text) => ({
    type: GET_MAIN_WIDTH,
    payload: text
})