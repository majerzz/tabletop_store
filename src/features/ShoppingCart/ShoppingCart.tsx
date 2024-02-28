import { type RootState } from 'app/model/store'
import { styles } from 'features/ShoppingCart/ShoppingCart.styles'
import cartImg from 'features/ShoppingCart/img/shopping-cart.png'
import { useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import { GameList } from 'entities/Game/GameList'
import { Link } from 'react-router-dom'

export const ShoppingCart: React.FC = () => {
  const cartList = useSelector((state: RootState) => state.shoppingCart.gameList)

  console.log(cartList)

  const finalSumm = useMemo(() => {
    return cartList.reduce((currentSum, currentId) => {
      return (currentSum + ((GameList.find(game => game.id === currentId.id)?.price) ?? 0))
    }, 0)
  }, [cartList])

  return (
    <Link to="/cart" className={styles.shoppingCartBlock}>
      {finalSumm} Р
      <img className={styles.cartImg} src={cartImg} alt="cart" />
      {cartList.length}
    </Link>
  )
}
