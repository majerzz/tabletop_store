/* eslint-disable react/display-name */
import { styles } from 'app/providers/page.styles'
import React from 'react'
import { Header } from 'widgets/Header'

// TODO отрефачить
const withHeader = (Page: React.FC) => {
  return (props: any) => {
    return (
      <>
        <Header />
        <div className={styles.page}>
          <Page {...props} />
        </div>
      </>
    )
  }
}

export default withHeader
