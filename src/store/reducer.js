import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import caregoryReducer from './categories/categoryReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  categories: caregoryReducer,
});

export default reducer;
