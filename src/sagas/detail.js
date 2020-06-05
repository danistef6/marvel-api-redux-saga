import { call, put } from 'redux-saga/effects';
import api from '../api';
import { addDetailFailure,addDetailSuccess } from '../actions/actionsDetail';


export function* addDetail({payload}) {
    try {
        console.log('ingreso Detail *******',payload);
      const resultOffers = yield call(api.apiMarvel.fetchCharacter, payload)
      console.log("resultOffers detail")
      console.log(resultOffers)
      yield put(addDetailSuccess(resultOffers))
  
    } catch (err) {
      const error = err.response
      yield put(addDetailFailure(error))
   
    }
  }