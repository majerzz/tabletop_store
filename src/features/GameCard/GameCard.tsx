import React from 'react'
import { styles } from 'features/GameCard/GameCard.styles'
import { Link } from 'react-router-dom'
import { EnumTitleSize, TitleAndContent } from 'shared/ui/TitleAndContent'

type Props = {
  gameName: string
  gameImages: string[]
  gamePrice: number
  gameId: number
}

export const GameCard: React.FC<Props> = ({ gameName, gameImages, gamePrice, gameId }) => {
  return (
    <div className={styles.gameCard}>
      <img className={styles.img} src={gameImages[0]} alt="img" />
      <Link to={`/game/${gameId}`}><TitleAndContent title={gameName} content={`${gamePrice} Р`} size={EnumTitleSize.gamePage}/></Link>
    </div>
  )
}
