import React, { type MouseEventHandler } from 'react'
import { styles } from 'shared/ui/ButtonAddRemove/ButtonAddRemove.styles'

type Props = {
  onClickMinus: MouseEventHandler
  onClickPlus: MouseEventHandler
  ammount: number
}
// TODO тут завести пропсы value и setValue
export const ButtonAddRemove: React.FC<Props> = ({ onClickMinus, onClickPlus, ammount }) => {
  return (
    <div className={styles.buttonAddRemove}>
      <button className={styles.buttonAddRemoveElement} onClick={onClickMinus}>-</button>
      <span>{ammount}</span>
      <button className={styles.buttonAddRemoveElement} onClick={onClickPlus}>+</button>
    </div>
  )
}
