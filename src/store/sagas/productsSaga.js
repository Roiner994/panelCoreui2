import {takeLatest} from 'redux-saga/effects';
import Types from '../types';
// import {getAsync} from '../../services/amplifyServices';

function* callFetchProducts({payload}) {
  // try {
  //   const {urlPath, urlFilter} = payload;
  //   const products = yield getAsync(urlPath + urlFilter);
  //   yield put({type: Types.FETCH_PRODUCTS_SUCCESS, payload: products});
  // } catch (error) {
  //   console.log(error);
  // }
}

export default function* fetchProducts() {
  yield takeLatest(Types.FETCH_PRODUCTS, callFetchProducts);
}
