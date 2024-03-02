import { productsApi } from 'app/api/products'
import { GamePageCard } from 'features/GamePageCard'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

export const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>()
  const { data: gameList } = productsApi.useGetProductsQuery(undefined)

  const game = useMemo(() => {
    return (
      gameId ? gameList?.find(game => game.id === +gameId) : null
    )
  }, [gameId])

  return (
    <div>
      {!game && <div>Такой игры не существует!</div>}
      {game && <GamePageCard game={game} />}
    </div>
  )
}
