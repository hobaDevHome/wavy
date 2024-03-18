import {configureStore, Tuple} from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';
import thunkMiddleware from 'redux-thunk';

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
