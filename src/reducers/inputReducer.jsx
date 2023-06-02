

export default function inputReducer(state = '', action, payload) {
    if (action.type === DIGIT) {
        return {
            ...state,
            input: state.input.concat(payload)
        }
    }

    return state;
}
