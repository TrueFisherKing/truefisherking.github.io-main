import { useState } from 'react'
import Controller from './components/controller/Controller'
import Cards from './components/cards/Cards'

export default function App() {

  return (
    <>
      <h1>After saving the card, open the Finder and navigate to the 'Downloads' folder. Locate the saved card file, and
        print.</h1>
      <Controller />
      <Cards />
    </>
  )
}
