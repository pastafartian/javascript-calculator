import { create} from 'zustand'

export const useStore = create((set) => ({
  input: '',
  setInput: (digit) => set((state) => ({ input: state.input.concat(digit) })),

  value: 0,
  calculate: (value, input, operator, set) =>  {
    const floatValue = parseFloat(value);
    const floatInput = parseFloat(input);

    switch (operator) {
      case 'add':
        set(() => ({
            value: floatValue + floatInput,
            input: '',
            operator: null
        }));
        break;
    case 'subtract':
        set(() => ({
            value: floatValue - floatInput,
            input: '',
            operator: null
        }));
        break;
    case 'multiple':
        set(() => ({
            value: floatValue * floatInput,
            input: '',
            operator: null
        }));
        break;
    case 'divide':
        set(() => ({
        value: floatValue / floatInput,
        input: '',
        operator: null
        }));
        break;
    default:
        break;
  }
console.log(input)
},

  operator: null,
  setOperator: (operator) => set((state) => ({ operator: operator, input: '', value: state.input})),

  clear: () => set({
    input: '',
    value: 0,
    operator: null
  })
}))
