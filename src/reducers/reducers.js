import {Types} from "../types";
import immutable from "seamless-immutable";

const INITIAL_STATE = immutable({
    data: [],
    limit: 50,
    offset: 0,
    name: "",
    fetching: true,
    loading: false,
    error: "",
});

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
          return state.merge({
            error: '',
            fetching: false,
            loading: true,
            })

        case Types.ADD_SUCCESS:
            console.log("redux1111 ", action);
            return state.merge({
                error: '',
                loading: false,
                data: action.payload.result
              })
        case Types.ADD_FAILURE:
            console.log("ADD_FAILURE!!!", action);
            return state.merge({
                error: 'error',
              })
        default:
            return state;
    }
}