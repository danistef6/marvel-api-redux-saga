import {Types} from "../types";
import immutable from "seamless-immutable";

const INITIAL_STATE = immutable({
    data: [],
    limit: 50,
    offset: 0,
    name: "",
    loading: false,
    error: "",
});

export default function reducersDetail(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST_D:
        return state.merge({
        error: '',
        fetching: true,
      })

        case Types.ADD_SUCCESS_D:
            console.log("redux7777 ",action); 
            let result = action.payload.result[0]
            let details = {}
            details.id = result.id
            details.name = result.name
            details.description = result.description
            details.thumbnail = result.thumbnail.path 
            details.extension = result.thumbnail.extension

            return state.merge({
                error: '',
                fetching: false,
                data: details
              })
        case Types.ADD_FAILURE_D:
            return state.merge({
                error: 'error',
                fetching: false
              })
        default:
            return state;
    }
}