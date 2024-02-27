import React from 'react'
import { styles } from 'shared/ui/TextContent/TextContent.styles'

export const TextContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className={styles.textContent}>{children}</span>
  )
}
