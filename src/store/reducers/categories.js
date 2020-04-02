import Types from '../types';

const INITIAL_STATE = [];

function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_CATEGORIES_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default app;
