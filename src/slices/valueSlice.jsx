

export default function valueReducer(state, action, payload) {
    switch (action.type)   {
        case 'ADD' :
            return {
              ...state,
              state: state.value += payload
            }
        case 'SUBTRACT' :
            return {
             ...state,
              state: state.value -= payload
            }
        case 'MULTIPLY' :
            return {
            ...state,
              state: state.value *= payload
            }
        case 'DIVIDE' :
            return {
            ...state,
              state: state.value /= payload
            }
        default :
    }
    return state;
}
