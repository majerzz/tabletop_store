import React from 'react'
import { styles } from 'widgets/GameCards/GameCards.styles'
import { GameCard } from 'features/GameCard/GameCard'
import { GameList } from 'entities/Game/GameList'

type Props = {
  idList: number[]
}

export const GameCards: React.FC<Props> = ({ idList }) => {
  return (
    <div className={styles.gameCards}>
      {idList.map((id, index) => {
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
