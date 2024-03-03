import React from 'react'
import { styles } from 'features/GameCard/GameCard.styles'
import { Link } from 'react-router-dom'
import { Title } from 'shared/ui/Title'
import { TextContent } from 'shared/ui/TextContent'
import { EnumTitleSize } from 'shared/ui/Title/Title.types'

type Props = {
  gameName: string
  gameImages: string[]
  gamePrice: number
  gameId: number
}

export const GameCard: React.FC<Props> = ({ gameName, gameImages, gamePrice, gameId }) => {
  return (
    <Link className={styles.gameCard} to={`/game/${gameId}`}>
      <img className={styles.img} src={gameImages[0]} alt="img" />
      <div className={styles.textContent}>
        <Title title={gameName} size={EnumTitleSize.MD} />
        <TextContent>{gamePrice} &#8381;</TextContent>
      </div>
    </Link>
  )
}
