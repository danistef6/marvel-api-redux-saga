import {Types} from "../types";

export const addDetailRequest = payload => ({
    type: Types.ADD_REQUEST_D,
    payload,
  })

  export const addDetailSuccess = payload => ({
    type: Types.ADD_SUCCESS_D,
    payload,
  })

  export const addDetailFailure = payload => ({
    type: Types.ADD_FAILURE_D,
    payload,
  })

  export const showNewTab = payload => ({
    type: Types.SHOW,
    payload,
  })