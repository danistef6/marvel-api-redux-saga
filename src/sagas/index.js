import { takeLatest } from 'redux-saga/effects'
import { BOOKS_REQUEST,Types } from '../types'
import { addCommic } from './comics';
import { addDetail } from './detail';

import {
  fetchBooks
} from './bookSagas'

export default function* rootSaga() {
  yield takeLatest(Types.ADD_REQUEST, addCommic);
  yield takeLatest(BOOKS_REQUEST, fetchBooks)
  yield takeLatest(Types.ADD_REQUEST_D, addDetail);
}
