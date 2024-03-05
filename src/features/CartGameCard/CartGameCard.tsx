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
  ammount: number
}

export const CartGameCard: React.FC<Props> = React.memo(({ image, title, price, id, ammount }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onClickPlus = (): void => {
    const ammount = 1
    dispatch(shoppingCartActions.addGame({ id, ammount }))
  }

  const onClickMinus = (): void => {
    const ammount = 1
    dispatch(shoppingCartActions.removeGame({ id, ammount }))
  }

  return (
    <div className={styles.cartGameCard}>
      <div className={styles.cartGameLeft}>
        <img className={styles.cartGameImage} src={image} alt="gameImage" />
        <div className={styles.cartGameText}>
          <Title title={title} size={EnumTitleSize.MD} />
          <TextContent>{price} &#8381;</TextContent>
        </div>
      </div>
      <span className={styles.cartGameButton}>
        <ButtonAddRemove onClickPlus={onClickPlus} onClickMinus={onClickMinus} ammount={ammount}/>
      </span>
    </div>
  )
})

CartGameCard.displayName = 'CartGameCard'
