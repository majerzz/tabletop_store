import type { AppDispatch } from 'app/model/store'
import { shoppingCartActions } from 'app/model/store/shoppingCartSlice'
import type { TGame } from 'entities/Game/Game.type'
import { styles } from 'features/GamePageCard/GamePageCard.styles'
import { useDispatch } from 'react-redux'
import { Button } from 'shared/ui/Button'
import React from 'react'
import { EnumSize } from 'shared/ui/Button/Button.types'
import { EnumTitleSize, TitleAndContent } from 'shared/ui/TitleAndContent'

type Props = {
  game: TGame
}
export const GamePageCard: React.FC<Props> = ({ game }) => {
  const dispatch = useDispatch<AppDispatch>()

  const buyHandler = (): void => {
    dispatch(shoppingCartActions.addGame(game.id))
  }

  return (
    <div className={styles.gamePageCard}>
      <img className={styles.gamePageCardImg} src={game.images[0]} alt="" />
      <div className={styles.gamePageCardText}>
        <TitleAndContent title={game.title} content={game.description} size={EnumTitleSize.gamePage}/>
        <span>{game.price} Р</span>
        <div><Button text='Добавить в корзину' onClick={buyHandler} size={EnumSize.MD}/></div>
      </div>
    </div>
  )
}
