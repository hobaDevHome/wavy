import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    favList: [],
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
});
export const {setProducts} = productsSlice.actions;
export const {setFavorite} = productsSlice.actions;
export default productsSlice.reducer;
