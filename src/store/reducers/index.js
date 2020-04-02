/*
  Index reducer, combine all app reducer.
 */

import {combineReducers} from 'redux';
import products from './products';

export default combineReducers({
  products,
});
