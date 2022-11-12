import { GET_PROPERTY_FAILURE, GET_PROPERTY_REQUEST, GET_PROPERTY_SUCCESS } from "./actionType"

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROPERTY_REQUEST:
            return {
                ...state,
                isLoading: action.payload
            }
        case GET_PROPERTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return {
                ...state
            }
    }
}