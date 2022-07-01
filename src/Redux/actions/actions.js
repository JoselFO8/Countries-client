import axios from 'axios';

import {GET_COUNTRIES, FILTER_COUNTRIES, ORDER_COUNTRIES, GET_COUNTRY_DETAIL, ADD_TOURIST_ACTIVITIES, GET_TOURIST_ACTIVITIES} from '../action-types/actionsTypes.js'

export const getCountries = () => {
    return (dispatch) => {
        fetch(`https://countries-2022.herokuapp.com/countries`)
            .then(response => response.json())
            .then((recurso) => {
                dispatch(
                    {
                        type: GET_COUNTRIES,
                        payload: recurso
                    }
                )        
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const filterCountries = (argument) => {
    return (dispatch) => {
        fetch(`https://countries-2022.herokuapp.com/countries`)
            .then(response => response.json())
            .then((recurso) => {
                dispatch(
                    {
                        type: FILTER_COUNTRIES,
                        payload: recurso,
                        argument,
                    }
                )        
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function orderCountries(type) {
    return {
        type: ORDER_COUNTRIES,
        payload: type
    };
}   

export function getCountryDetail(id) {
    return (dispatch) => {
        axios.get(`https://countries-2022.herokuapp.com/countries/${id}`)
            .then(response => response.data)
            .then((recurso) => {
                dispatch(
                    {
                        type: GET_COUNTRY_DETAIL,
                        payload: recurso
                    }
                )        
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const addTouristActivities = (object) => {
    return (dispatch) => {
        axios.post(`https://countries-2022.herokuapp.com/activities`, object)
            .then(response => response.data)
            .then((recurso) => {
                dispatch(
                    {
                        type: ADD_TOURIST_ACTIVITIES,
                        payload: recurso
                    }
                )        
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function getTouristActivities() {
    return (dispatch) => {
        axios.get(`https://countries-2022.herokuapp.com/activities`)
            .then(response => response.data)
            .then((recurso) => {
                dispatch(
                    {
                        type: GET_TOURIST_ACTIVITIES,
                        payload: recurso
                    }
                )        
            })
            .catch((error) => {
                console.log(error)
            })
    }
}