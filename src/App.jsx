import { useEffect, useRef } from 'react'
import './App.css'
import CatData from './CatData'
import useStore from './store/useStore'

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

function CatCounter() {
  const cats = useStore(state => state.cats)
  return <h1>{cats} around here ...</h1>
}


const AdjustCat = () => {

  const add = useStore(state => state.increasePopulation)
  const remove = useStore(state => state.removeAllCats)

  useEffect( () => {
    console.log('AdjustCat render')
  }, [])

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )

}


const UpdateCat = () => {

  useEffect( () => {
    console.log('UpdateCat render')
  }, [])

  const input = useRef()

  const updateCat = useStore(state => state.updateCats)

  const handleUpdate = () => {
    updateCat( parseInt(input.current.value) )
  }


  return (
    <div>
      <input ref={input} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}