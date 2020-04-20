import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAIL } from '../types'

export const bookRequest = payload => ({
  type: BOOKS_REQUEST,
  payload,
})

export const bookSuccess = payload => ({
  type: BOOKS_SUCCESS,
  payload,
})

export const bookFail = payload => ({
  type: BOOKS_FAIL,
  payload,
})
