import { configureStore } from '@reduxjs/toolkit'
import valueReducer from './slices/valueSlice.jsx'
import inputReducer from './slices/inputSlice.jsx'

const store = configureStore({
  reducer: {
    value: valueReducer,
    input: inputReducer
  }
})

export default store;
