import database from "../db/database.json"
import {selector} from "../services/filter" 

const fields = {
    processor_score: {
        direction: true,
        preference: 10,
        min: 7000,
        max: null
    },
    // graphics_adapter: {
    //     preference: 0,
    //     min: 0,
    //     max: 0
    // },
    memory_mb: {
        preference: 8,
        direction: true,
        min: 8192,
        max: 16384
    },
    screen_size: {
        preference: 8,
        direction: true,
        min: 13,
        max: 15.6
    },
    screen_resolution_w: {
        preference: 0,
        direction: true,
        min: null,
        max: null
    },
    screen_resolution_h: {
        preference: 0,
        direction: true,
        min: null,
        max: null
    },
    screen_density_ppi: {
        preference: 0,
        direction: true,
        min: null,
        max: null
    },
    weight_kg: {
        preference: 10,
        direction: false,
        min: 0,
        max: 2
    },
    storage_gb: {
        preference: 10,
        direction: true,
        min: 250,
        max: 1000
    }
}


export const constants = {
    GET_LAPTOPS: "GET_LAPTOPS",
    GET_LAPTOPS_PASS: "GET_LAPTOPS_PASS",
    GET_LAPTOPS_FAIL: "GET_LAPTOPS_FAIL",
}

export function getLaptops() {
    return dispatch => {
        dispatch({type: constants.GET_LAPTOPS})
        dispatch({type: constants.GET_LAPTOPS_PASS, payload: selector(database, fields)})
    }
}  