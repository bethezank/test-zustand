import { useEffect } from "react"
import useStore from "./store/useStore"


const CatData = () => {

    useEffect( () => {
        console.log('CatData render')
      }, [])


    const cats = useStore(state => state.cats)

  return (
    <h1>I have {cats} cats.</h1>
  )
}

export default CatData