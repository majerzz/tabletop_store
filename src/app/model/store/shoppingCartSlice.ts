import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type TGame } from 'entities/Game/Game.type'

type TInitialState = {
  idList: number[]
}

const initialState: TInitialState = {
  idList: []
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {

    addGame (state, { payload }: PayloadAction<TGame['id']>) {
      if (!state.idList.includes(payload)) {
        state.idList.push(payload)
      }
    },

    removeGame (state, { payload }: PayloadAction<TGame['id']>) {
      state.idList = state.idList.filter(id => id !== payload)
    }
  }
})

export const shoppingCartActions = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
