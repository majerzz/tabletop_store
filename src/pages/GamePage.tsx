import { GameList } from 'entities/Game/GameList'
import { GamePageCard } from 'widgets/GamePageCard/GamePageCard'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

export const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>()

  const game = useMemo(() => {
    return (
      gameId ? GameList.find(game => game.id === +gameId) : null
    )
  }, [gameId])

  return (
    <div>
      {!game && <div>Такой игры не существует!</div>}
      {game && <GamePageCard game={game} />}
    </div>
  )
}
