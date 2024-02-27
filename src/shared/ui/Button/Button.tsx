import React, { type MouseEventHandler } from 'react'
import { styles } from 'shared/ui/Button/Button.styles'
import { EnumSize } from 'shared/ui/Button/Button.types'

type Props = {
  text: string
  onClick: MouseEventHandler
  size?: EnumSize
}

export const Button: React.FC<Props> = ({ text, onClick, size = EnumSize.MD }) => {
  return (
    <button className={styles.button(size)} onClick={onClick}>
      {text}
    </button>
  )
}
