import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import { persistMiddleware } from "./persist/persistMiddleware";
import homeReducer from "./slices/homeslice";
import cartReducer from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    home: homeReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

