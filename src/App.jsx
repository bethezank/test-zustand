import { useEffect } from 'react'
import './App.css'
import CatData from './CatData'
import CatCounter from './components/CatCounter'
import AdjustCat from './components/AdjustCat'
import UpdateCat from './components/UpdateCat'

function App() {
  
  useEffect( () => {
    console.log('App render')
  }, [])

  return (
    <>
      <h1>Test Zustand</h1>
      <CatCounter />
      <AdjustCat />
      <UpdateCat />
      <CatData />
    </>
  )
}
export default App