import Types from '../types';

const INITIAL_STATE = {
  page: 0,
  pageSize: 10,
  pages: 0,
  data: [],
  loading: false,
};

function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CLEAR_PRODUCTS: {
      return INITIAL_STATE;
    }
    case Types.FETCH_PRODUCTS: {
      const {settingsFilter} = action.payload;
      if (state.page === 0 || settingsFilter.page === 0) {
        return {...state, data: [], loading: true};
      }
      return state;
    }
    case Types.FETCH_PRODUCTS_SUCCESS: {
      const {page, pageSize, pages, data} = action.payload;
      const result = {
        page,
        pageSize,
        pages,
        data: [...state.data, ...data],
        loading: false,
      };
      return result;
    }
    default:
      return state;
  }
}

export default app;
