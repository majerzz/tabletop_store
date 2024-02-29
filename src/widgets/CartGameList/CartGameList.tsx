import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from 'app/model/store'
import { CartGameCard } from 'features/CartGameCard'
import { styles } from 'widgets/CartGameList/CartGameList.styles'
import { GameList } from 'entities/Game/GameList'

export const CartGameList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.gameList)

  return (
    <div className={styles.cartGameList}>
      {cartItems.map((cartItem, index) => {
        const game = GameList.find(game => game.id === cartItem.id)
        const ammount = cartItem.ammount

        return (
          <React.Fragment key={game?.id ?? index}>
            {game ? (
              <CartGameCard title={game.title} price={game.price} image={game.images[0]} id={game.id} ammount={ammount} />
            ) : (
              <span>Такой игры нет!</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
