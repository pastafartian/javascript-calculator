import { create} from 'zustand'

export const useStore = create((set) => ({
  input: '',
  setInput: (digit) => set((state) => ({ input: state.input.concat(digit) })),


  value: 0,
  //setValue: (value) => set((state) => ({ value })),


  operator: null,
  //setOperator: (operator) => set((state) => ({ operator })),

  clear: () => set({
    input: '',
    value: 0,
    operator: null
  })
}))
