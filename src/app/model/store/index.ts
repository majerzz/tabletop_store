import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from 'app/api/products'
import shoppingCartSlice from 'app/model/store/shoppingCartSlice'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
