import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type TGame } from 'entities/Game/Game.type'
import { type GameInCart } from 'entities/GameInCart/GameInCart.types'

type TInitialState = {
  gameList: GameInCart[]
}

const initialState: TInitialState = {
  gameList: []
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {

    addGame (state, { payload }: PayloadAction<GameInCart>) {
      const foundGameIndex = state.gameList.findIndex(game => game.id === payload.id)

      if (foundGameIndex !== -1) {
        // Игра уже есть в корзине, обновляем количество
        state.gameList[foundGameIndex].ammount += payload.ammount
      } else {
        // Игры нет в корзине, добавляем новую
        state.gameList.push(payload)
        console.log(state.gameList)
      }
    },

    removeGame (state, { payload }: PayloadAction<TGame['id']>) {
      // state.gameList = state.gameList.filter(id => id !== payload)
    }
  }
})

export const shoppingCartActions = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
