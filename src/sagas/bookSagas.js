import { call, put } from 'redux-saga/effects'
import api from '../api'
import { bookSuccess, bookFail } from '../actions/books'

export function* fetchBooks() {
  try {
    const resultOffers = yield call(api.books.all)
    yield put(bookSuccess(resultOffers))
  } catch (err) {
    const error = err.response
    yield put(bookFail(error))
  }
}
