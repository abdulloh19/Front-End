import React from 'react'
import { withLayout } from 'src/layout/Layout'
import { HomePageComponent } from 'src/pageComponent'

const Home = () => {
  return (
    <div>
      <HomePageComponent/>
    </div>
  )
}

export default withLayout(Home)