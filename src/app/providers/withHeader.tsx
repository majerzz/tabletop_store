/* eslint-disable react/display-name */
import React from 'react'
import { Header } from 'widgets/Header'

// TODO отрефачить
const withHeader = (Page: React.FC) => {
  return (props: any) => {
    return (
      <>
        <Header />
        <Page {...props} />
      </>
    )
  }
}

export default withHeader
