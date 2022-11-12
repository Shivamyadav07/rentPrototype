import { GET_PROPERTY_FAILURE, GET_PROPERTY_REQUEST, GET_PROPERTY_SUCCESS } from "./actionType"
import axios from 'axios'
export const getdata = () => (dispatch) => {
    dispatch({
        type: GET_PROPERTY_REQUEST,
        payload: true
    })
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/property")
        .then((res) => {
            console.log(res)
            dispatch({
                type: GET_PROPERTY_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({
                type: GET_PROPERTY_FAILURE,
                payload: true
            })
        })
}