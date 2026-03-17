import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/Projects/projectSlice'
import serviceReducer from '../features/Services/serviceSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    services: serviceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch