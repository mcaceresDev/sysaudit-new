import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProjectsRequest } from './projectApi'

export const fetchProjects = createAsyncThunk(
  'projects/fetch',
  async () => {
    return await fetchProjectsRequest()
  }
)

interface ProjectsState {
  items: any[]
  loading: boolean
  error: string | null
}

const initialState: ProjectsState = {
  items: [],
  loading: false,
  error: null
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.loading = true
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProjects.rejected, state => {
        state.loading = false
        state.error = 'Error al cargar proyectos'
      })
  }
})

export default projectsSlice.reducer
