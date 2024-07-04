import { create } from 'zustand'

const useStore = create((set) => ({
  cats: 0,
  increasePopulation: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllCats: () => set({ cats: 0 }),
  updateCats: (newCats) => set({ cats: newCats }),
}))

export default useStore