import Types from '../types';

const CategoriesActionsCreator = {
  fetchCategories: payload => ({
    type: Types.FETCH_CATEGORIES,
    payload,
  }),
};

export default CategoriesActionsCreator;
