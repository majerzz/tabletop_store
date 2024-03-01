import React from 'react'
import { GameCards } from 'widgets/GameCards/GameCards'

const TestPage: React.FC = () => {
  return (
    <GameCards idList={[1, 2, 3, 4, 5]} />
  )
}

export default TestPage
