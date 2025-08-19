import { useEffect, useRef } from 'react'
import useStore from '../store/useStore'

const UpdateCat = () => {
  useEffect(() => {
    console.log('UpdateCat render')
  }, [])

  const input = useRef()
  const updateCat = useStore(state => state.updateCats)

  const handleUpdate = () => {
    updateCat(parseInt(input.current.value))
  }

  return (
    <div>
      <input ref={input} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdateCat;
