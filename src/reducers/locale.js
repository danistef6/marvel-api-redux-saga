import Immutbale from 'seamless-immutable'
import { LOCALE_SET } from '../types/types'

const localeState = Immutbale({
  lang: 'en',
})

export default function locale(state = localeState, action = {}) {
  switch (action.type) {
    case LOCALE_SET:
      return state.merge({
        lang: action.payload,
      })
    default:
      return state
  }
}