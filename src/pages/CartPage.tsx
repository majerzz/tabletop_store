import { styles } from 'pages/styles/CartPage.styles'
import React from 'react'
import { Title } from 'shared/ui/Title'
import { EnumTitleSize } from 'shared/ui/Title/Title.types'
import { CartGameList } from 'widgets/CartGameList/CartGameList'

export const CartPage: React.FC = () => {
  return (
    <div className={styles.cartPage}>
      <Title title='Ваша корзина:' size={EnumTitleSize.MD}/>
      <CartGameList />
    </div>
  )
}
