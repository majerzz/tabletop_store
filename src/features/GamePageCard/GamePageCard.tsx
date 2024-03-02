import React from 'react'
import type { AppDispatch } from 'app/model/store'
import { shoppingCartActions } from 'app/model/store/shoppingCartSlice'
import type { TResponseProduct } from 'app/api/Game.types'
import { styles } from 'features/GamePageCard/GamePageCard.styles'
import { useDispatch } from 'react-redux'
import { Title } from 'shared/ui/Title'
import { Button } from 'shared/ui/Button'
import { EnumSize } from 'shared/ui/Button/Button.types'
import { TextContent } from 'shared/ui/TextContent'
import { EnumTitleSize } from 'shared/ui/Title/Title.types'

type Props = {
  game: TResponseProduct
}

export const GamePageCard: React.FC<Props> = ({ game }) => {
  const dispatch = useDispatch<AppDispatch>()

  const buyHandler = (): void => {
    const ammount = 1
    const id = game.id
    dispatch(shoppingCartActions.addGame({ id, ammount }))
  }

  return (
    <div className={styles.gamePageCard}>
      <img className={styles.gamePageCardImg} src={game.images[0]} alt="" />
      <div className={styles.gamePageCardText}>
        <Title title={game.title} size={EnumTitleSize.LG}/>
        <TextContent>{game.description}</TextContent>
        <span>{game.price} &#8381;</span>
        <div><Button text='Добавить в корзину' onClick={buyHandler} size={EnumSize.MD}/></div>
      </div>
    </div>
  )
}
