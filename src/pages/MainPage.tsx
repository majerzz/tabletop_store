import React from 'react'
import { GameCards } from 'widgets/GameCards/GameCards'

const TestPage: React.FC = () => {
  return (
    <GameCards idList={[1, 2, 3, 4, 5]} /> // временно, сюда пихнуть хуйню с новинками
  )
}

export default TestPage
