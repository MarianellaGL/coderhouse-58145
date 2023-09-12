import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'

function App() {
  const text = "hola"

  return (
    <>
      <div>
        <ParentComponent text={text} />
        <Counter />
      </div>
    </>
  )
}

export default App
