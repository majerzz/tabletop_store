import React from 'react'
import { styles } from 'features/Logo/Logo.styles'
import logo from './img/logo-img.png'
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <div>
      <Link to='/' className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <div className={styles.logoText}>
          <h1>TABLETOP STORE</h1>
          <p>Магазин настольных игры</p>
        </div>
      </Link>
    </div>
  )
}
