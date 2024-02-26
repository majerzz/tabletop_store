import React from 'react'
import { type RootState } from 'app/model/store'
import { GameList } from 'entities/Game/GameList'
import { GameCard } from 'features/GameCard/GameCard'
import { useSelector } from 'react-redux'
import { styles } from 'widgets/GameCards/GameCards.styles'

export const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.idList)

  return (
    <div className={styles.gameCards}>
      <span>Ваша корзина:</span>
      {cartItems.map((id, index) => {
        const game = GameList.find(game => game.id === id)

        return (
          <React.Fragment key={game?.id ?? index}>
            {game ? (
              <GameCard
                gameName={game.title}
                gameImages={game.images}
                gamePrice={game.price}
                gameId={game.id}
              />
            ) : (
              <span>игры нет</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
