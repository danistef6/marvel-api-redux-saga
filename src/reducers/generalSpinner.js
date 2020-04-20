import Immutable from 'seamless-immutable'
import { SPINNER_ACTIVE } from '../types/types'

const defaultState = Immutable({
  fetching: false,
})

export default function generalSpinner(state = defaultState, action = {}) {
  switch (action.type) {
    case SPINNER_ACTIVE:
      return state.merge({
        fetching: action.payload,
      })
    default:
      return state
  }
}
