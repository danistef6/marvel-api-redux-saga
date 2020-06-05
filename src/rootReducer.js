import { combineReducers } from 'redux'
import locale from './reducers/locale'
import books from './reducers/books'
import generalSpinner from './reducers/generalSpinner'
import comics from './reducers/reducers'
import details from './reducers/reducersDetail'

export default combineReducers({
  locale,
  books,
  generalSpinner,
  comics,
  details
})
