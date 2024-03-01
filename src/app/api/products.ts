import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TResponseProduct } from 'app/api/Game.types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<TResponseProduct[], undefined>({
      query: () => 'gameList.json'
    })
  })
})
