import React, { type MouseEventHandler } from 'react'
import { styles } from 'shared/ui/ButtonAddRemove/ButtonAddRemove.styles'

type Props = {
  onClickMinus: MouseEventHandler
  onClickPlus: MouseEventHandler
}

export const ButtonAddRemove: React.FC<Props> = ({ onClickMinus, onClickPlus }) => {
  return (
    <div className={styles.buttonAddRemove}>
      <span className={styles.buttonAddRemoveElement} onClick={onClickMinus}>-</span>
      <span>|</span>
      <span className={styles.buttonAddRemoveElement} onClick={onClickPlus}>+</span>
    </div>
  )
}
