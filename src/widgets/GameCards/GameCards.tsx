import React from 'react'
import { styles } from 'widgets/GameCards/GameCards.styles'
import { GameCard } from 'features/GameCard/GameCard'
import { productsApi } from 'app/api/products'

type Props = {
  idList: number[]
}

export const GameCards: React.FC<Props> = ({ idList }) => {
  const { data: gameList } = productsApi.useGetProductsQuery(undefined)

  return (
    <div className={styles.gameCards}>
      {idList.map((id, index) => {
        const game = gameList?.find(game => game.id === id)

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
              <span>Игры нет</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
