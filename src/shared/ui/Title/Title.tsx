import React from 'react'
import { styles } from 'shared/ui/Title/Title.styles'
import { type EnumTitleSize } from 'shared/ui/Title/Title.types'

type Props = {
  title: string
  size: EnumTitleSize
}

export const Title: React.FC<Props> = ({ title, size }) => {
  return (
    <div className={styles.title(size)} title={title}>
      {title}
    </div>
  )
}
