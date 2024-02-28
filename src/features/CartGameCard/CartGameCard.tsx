import { type AppDispatch } from 'app/model/store'
import { shoppingCartActions } from 'app/model/store/shoppingCartSlice'
import { styles } from 'features/CartGameCard/CartGameCard.styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonAddRemove } from 'shared/ui/ButtonAddRemove'
import { TextContent } from 'shared/ui/TextContent'
import { Title } from 'shared/ui/Title'
import { EnumTitleSize } from 'shared/ui/Title/Title.types'

type Props = {
  image: string
  title: string
  price: number
  id: number
}

export const CartGameCard: React.FC<Props> = ({ image, title, price, id }) => {
  const dispatch = useDispatch<AppDispatch>()
  const onClickPlus = (): void => {
    dispatch(shoppingCartActions.addGame(id))
  }

  const onClickMinus = (): void => {
    dispatch(shoppingCartActions.removeGame(id))
  }

  return (
    <div className={styles.cartGameCard}>
      <img className={styles.cartGameImage} src={image} alt="gameImage" />
      <div>
        <Title title={title} size={EnumTitleSize.MD}/>
        <TextContent>{price} &#8381;</TextContent>
      </div>
      <ButtonAddRemove onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
    </div>
  )
}
