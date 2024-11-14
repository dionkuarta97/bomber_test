import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number,
  image: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload.quantity)
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
      AsyncStorage.setItem('@store/cart', JSON.stringify(state.items))
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      AsyncStorage.setItem('@store/cart', JSON.stringify(state.items))
    },
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
      AsyncStorage.setItem('@store/cart', JSON.stringify(state.items))
    }
  }
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions
export default cartSlice.reducer
