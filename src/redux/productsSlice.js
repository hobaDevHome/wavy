import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {db} from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',

  async () => {
    const response = await getDocs(collection(db, 'wavy'));
    return {
      list: response.docs.map(data => {
        return {...data.data(), id: data.id};
      }),
    };
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    favList: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setFavorite(state, action) {
      // state.products = action.payload;
      const newItem = action.payload;
      const existingItem = state.favList.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.favList.push(newItem);
      } else {
        let temp = state.favList.filter(e => e.id !== newItem.id);
        state.favList = temp;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.list;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {setProducts} = productsSlice.actions;
export const {setFavorite} = productsSlice.actions;

export const selectProducts = state => state.products.products;
export default productsSlice.reducer;
