import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    calulationReducer,
    inputReducer
  }
})

export default store;
