import { combineReducers } from 'redux'
import locale from './reducers/locale'
import books from './reducers/books'
import generalSpinner from './reducers/generalSpinner'

export default combineReducers({
  locale,
  books,
  generalSpinner
})
