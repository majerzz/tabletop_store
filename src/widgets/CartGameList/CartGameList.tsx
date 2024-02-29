import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from 'app/model/store'
import { CartGameCard } from 'features/CartGameCard'
import { styles } from 'widgets/CartGameList/CartGameList.styles'
import { GameList } from 'entities/Game/GameList'
import { TextContent } from 'shared/ui/TextContent'

export const CartGameList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.gameList)
  console.log(cartItems.length)

  return (
    cartItems.length === 0 ? (
      <TextContent>Корзина пуста!</TextContent>
    ) : (
      <div className={styles.cartGameList}>
      {cartItems.map((cartItem, index) => {
        const game = GameList.find(game => game.id === cartItem.id)
        const ammount = cartItem.ammount

        return (
          <React.Fragment key={game?.id ?? index}>
            {game ? (
              <CartGameCard title={game.title} price={game.price} image={game.images[0]} id={game.id} ammount={ammount} />
            ) : (
              <TextContent>Такой игры нет!</TextContent>
            )}
          </React.Fragment>
        )
      })}
    </div>
    )
  )
}
