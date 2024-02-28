import React from 'react'
import { type RootState } from 'app/model/store'
import { GameList } from 'entities/Game/GameList'
import { useSelector } from 'react-redux'
import { styles } from 'widgets/GameCards/GameCards.styles'
import { CartGameCard } from 'features/CartGameCard'

export const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.idList)

  return (
    <div className={styles.gameCards}>
      {cartItems.map((id, index) => {
        const game = GameList.find(game => game.id === id)

        return (
          <React.Fragment key={game?.id ?? index}>
            {game ? (
              <CartGameCard title={game.title} price={game.price} image={game.images[0]} id={game.id}/>
            ) : (
              <span>игры нет</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
