import Immutable from 'seamless-immutable'
import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAIL } from '../types'

const defaultState = Immutable({
  title:'I am from redux state',
  error: '',
  fetching: false,
})

export default function chapter(state = defaultState, action = {}) {
  switch (action.type) {
    case BOOKS_REQUEST:
      return state.merge({
        error: '',
        fetching: true,
      })
    case BOOKS_SUCCESS:
      return state.merge({
        error: '',
        fetching: false,
      })
    case BOOKS_FAIL:
      return state.merge({
        fetching: false,
        error: 'error',
      })
    default:
      return state
  }
}
