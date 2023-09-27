import './App.css'
import Accordion from './components/Accordion'
import ComponenteA from './components/ComponenteA'
import { MyContext } from './context/MyContext'

function App() {
  const value = "lorem ipsuim dfklhasdklfkljadshfjkl"

  return (
    <MyContext.Provider value={value}>
      <ComponenteA />
      <Accordion />
    </MyContext.Provider>

  )
}

export default App
