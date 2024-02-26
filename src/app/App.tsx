import React from 'react'
import store from 'app/model/store'
import TestPage from 'pages/MainPage'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import withHeader from 'app/providers/withHeader'
import { GamePage } from 'pages/GamePage'
import { CartPage } from 'pages/CartPage'

const PageHOC = withHeader(Routes)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHOC>
          <Route path="/" element={<TestPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
        </PageHOC>
      </BrowserRouter>
    </Provider>
  )
}

export default App
