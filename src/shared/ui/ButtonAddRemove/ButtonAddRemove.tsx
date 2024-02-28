import React, { type MouseEventHandler } from 'react'
import { styles } from 'shared/ui/ButtonAddRemove/ButtonAddRemove.styles'

type Props = {
  onClickMinus: MouseEventHandler
  onClickPlus: MouseEventHandler
  ammount: number
}
// тут завести пропсы value и setValue
export const ButtonAddRemove: React.FC<Props> = ({ onClickMinus, onClickPlus, ammount }) => {
  return (
    <div className={styles.buttonAddRemove}>
      <span className={styles.buttonAddRemoveElement} onClick={onClickMinus}>-</span>
      <span>{ammount}</span>
      <span className={styles.buttonAddRemoveElement} onClick={onClickPlus}>+</span>
    </div>
  )
}
