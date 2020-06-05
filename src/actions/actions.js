import {Types} from "../types";

export const addComicsRequest = payload => ({
    type: Types.ADD_REQUEST,
    payload,
  })

  export const addComicsSuccess = payload => ({
    type: Types.ADD_SUCCESS,
    payload,
  })

  export const addComicsFailure = payload => ({
    type: Types.ADD_FAILURE,
    payload,
  })

  export const showNewTab = payload => ({
    type: Types.SHOW,
    payload,
  })