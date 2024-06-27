import { create } from 'zustand'


const useStore = create((set) => ({
  error: null,
  data: [],
  isLoading: false,
  isMenuOpen: false,
  isPlayVideo: false,

  setData: (newData) => set({ data: newData }),
  setError: (newError) => set({ error: newError }),
  setLoading: (isLoading) => set({ isLoading }),
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setPlayVideo: (isPlayVideo) => set({ isPlayVideo }),

  // setData: (data) => set({ data }),
  // increasePopulation: () => set((state) => ({
  //   bears: state.bears + 1
  // })),

  // removeAllBears: () => set({
  //   bears: 0
  // }),

  // updateBears: (newBears) => set({
  //   bears: newBears
  // }),


  user: {
    name: 'ronald',
    lastname: 'gomez',
  }



}))


export default useStore;




// obtener valor de un atributo del store desde un componente
// const user = useStore((state) => state.user)

// obtener diferentes valores del store desde un componente desestructurando
// const { isLoading, setLoading, data, setData } = useStore();


