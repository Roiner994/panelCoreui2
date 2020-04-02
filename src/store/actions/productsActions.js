import Types from '../types';

const ProductsActionsCreator = {
  clearProducts: () => ({
    type: Types.CLEAR_PRODUCTS,
  }),
  fetchProducts: payload => ({
    type: Types.FETCH_PRODUCTS,
    payload,
  }),
};

export default ProductsActionsCreator;
