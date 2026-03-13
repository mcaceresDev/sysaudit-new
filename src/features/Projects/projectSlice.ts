import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProjectsRequest, createProjectRequest, updateProjectRequest } from './projectApi'
import type { Project, UpdateProjectPayload } from './project.types'

export const fetchProjects = createAsyncThunk(
  'projects/fetch',
  async () => {
    return await fetchProjectsRequest()
  }
)

export const createProject = createAsyncThunk<Project, Partial<Project>>(
  'projects/create',
  async (data) => {
    return await createProjectRequest(data)
  }
)

export const updateProject = createAsyncThunk<Project, UpdateProjectPayload>(
  'projects/update',
  async ({ id, data }) => {
    return await updateProjectRequest(id, data)
  }
)

interface ProjectsState {
  items: Project[]
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
      //UPDATE
      .addCase(updateProject.fulfilled, (state, action) => {

        const index = state.items.findIndex(
          project => project.id === action.payload.id
        )

        if (index !== -1) {
          state.items[index] = action.payload
        }

      })
  }
})

export default projectsSlice.reducer
