import React from 'react'
import { styles } from 'widgets/Header/Header.styles'
import { Logo } from 'features/Logo'
import { SearchBar } from 'features/Search'
import { ShoppingCart } from 'features/ShoppingCart'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <ShoppingCart />
    </header>
  )
}
