import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/Projects/projectSlice'
import serviceReducer from '../features/Services/serviceSlice'
import parameterReducer from '../features/Parameters/parameterSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    services: serviceReducer,
    parameters: parameterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch