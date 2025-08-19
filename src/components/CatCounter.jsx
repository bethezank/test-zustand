import useStore from '../store/useStore'

function CatCounter() {
  const cats = useStore(state => state.cats)
  return <h1>{cats} around here ...</h1>
}

export default CatCounter;
