import { call, put } from 'redux-saga/effects';
import api from '../api';
import { addComicsFailure,addComicsSuccess } from '../actions/actions';


export function* addCommic({payload}) {
    try {
        console.log('ingreso *******',payload);
      const resultOffers = yield call(api.apiMarvel.fetchAll, payload)
      console.log("resultOffers")
      console.log(resultOffers)
      yield put(addComicsSuccess(resultOffers))
  
    } catch (err) {
      console.log("Error!!!!!")
      console.log(err)
      const error = err.response
      yield put(addComicsFailure(error))
   
    }
  }