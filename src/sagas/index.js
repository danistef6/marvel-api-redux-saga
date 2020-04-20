import { takeLatest } from 'redux-saga/effects'
import { BOOKS_REQUEST } from '../types'

import {
  fetchBooks
} from './bookSagas'

export default function* rootSaga() {
  yield takeLatest(BOOKS_REQUEST, fetchBooks)
}
