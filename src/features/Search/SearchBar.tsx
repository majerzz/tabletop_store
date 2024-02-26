import React, { useState } from 'react'
import { styles } from 'features/Search/SearchBar.styles'

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue) // для дебага
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <input className={styles.search} placeholder="Введите название..." type="text" value={searchValue} onChange={handleInput} />
    </div>
  )
}
