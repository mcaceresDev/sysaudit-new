import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProjectsRequest, createProjectRequest } from './projectApi'

export const fetchProjects = createAsyncThunk(
  'projects/fetch',
  async () => {
    return await fetchProjectsRequest()
  }
)

export const createProject = createAsyncThunk(
  'projects/create',
  async (data: any) => {
    return await createProjectRequest(data)
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
      // FETCH
      .addCase(fetchProjects.rejected, state => {
        state.loading = false
        state.error = 'Error al cargar proyectos'
      })
      // CREATE
      .addCase(createProject.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
  }
})

export default projectsSlice.reducer
