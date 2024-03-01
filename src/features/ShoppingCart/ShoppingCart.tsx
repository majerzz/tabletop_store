import { type RootState } from 'app/model/store'
import { styles } from 'features/ShoppingCart/ShoppingCart.styles'
import cartImg from 'features/ShoppingCart/img/shopping-cart.png'
import { useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { productsApi } from 'app/api/products'

export const ShoppingCart: React.FC = () => {
  const cartList = useSelector((state: RootState) => state.shoppingCart.gameList)
  const { data: gameList } = productsApi.useGetProductsQuery(undefined)
  console.log(cartList)

  // TODO вынести в одну функцию
  const finalSumm = useMemo(() => {
    if (gameList) {
      return cartList.reduce((currentSum, currentId) => {
        return (currentSum + ((gameList.find(game => game.id === currentId.id)?.price) ?? 0) * currentId.ammount)
      }, 0)
    }
    return 0
  }, [cartList])

  const totalItems = useMemo(() => {
    return cartList.reduce((currentAmmount, currentId) => {
      return ((currentAmmount + currentId.ammount) ?? 0)
    }, 0)
  }, [cartList])

  return (
    <Link to="/cart" className={styles.shoppingCartBlock}>
      {finalSumm} &#8381;
      <img className={styles.cartImg} src={cartImg} alt="cart" />
      {totalItems}
    </Link>
  )
}
