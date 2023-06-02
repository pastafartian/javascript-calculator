import { configureStore } from '@reduxjs/toolkit'
import { calculationReducer } from './reducers/calculationReducer.jsx'
import {inputReducer } from './reducers/inputReducer.jsx'

const store = configureStore({
  reducer: {
    calculationReducer,
    inputReducer
  }
})

export default store;
