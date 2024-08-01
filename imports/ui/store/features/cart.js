import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity + action.payload.quantity};
        }
        return item;
      });
    },
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems,{id:action.payload.id, quantity: 1, desc:action.payload.desc, price:action.payload.price, img:action.payload.img}]
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload
      });
    },
    clearCart: (state, action) => {
      state.cartItems = []
    },
  },
});

export default cart.reducer;
export const {
  updateCartItem,
  removeCartItem,
  addCartItem,
  clearCart
} = cart.actions;
