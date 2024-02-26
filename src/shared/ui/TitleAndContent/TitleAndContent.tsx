import React from 'react'
import { styles } from 'shared/ui/TitleAndContent/TitleAndContent.styles'

export enum EnumTitleSize {
  mainPage = 'main',
  gamePage = 'game'
}

type Props = {
  title: string
  content: string
  size: EnumTitleSize
}

export const TitleAndContent: React.FC<Props> = ({ title, content, size }) => {
  return (
    <div className={styles.titleAndContent(size)}>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  )
}
