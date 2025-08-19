import { useEffect } from 'react'
import useStore from '../store/useStore'

const AdjustCat = () => {
  const add = useStore(state => state.increasePopulation)
  const remove = useStore(state => state.removeAllCats)

  useEffect(() => {
    console.log('AdjustCat render')
  }, [])

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default AdjustCat;
