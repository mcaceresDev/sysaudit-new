import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchServicesRequest, fetchServiceEnpointsRequest, createServiceRequest, updateServiceRequest } from './serviceApi'
import type { Service, ServiceEndpoints, UpdateServicePayload } from './service.types'

export const fetchServices = createAsyncThunk(
  'services/fetch',
  async () => {
    return await fetchServicesRequest()
  }
)

export const fetchServiceEnpoints = createAsyncThunk<ServiceEndpoints, number>( //param 1 lo que devuelve, param2 lo que recibe
  'services/fetch-endpoints',
  async (id) => {
    return await fetchServiceEnpointsRequest(id)
  }
)

export const createService = createAsyncThunk<Service, Partial<Service>>(
  'services/create',
  async (data) => {
    return await createServiceRequest(data)
  }
)

export const updateService = createAsyncThunk<Service, UpdateServicePayload>(
  'services/update',
  async ({ id, data }) => {
    return await updateServiceRequest(id, data)
  }
)

interface ServiceState {
  items: Service[]
  selectedService: ServiceEndpoints | null // 👈 NUEVO
  loading: boolean
  error: string | null
}

const initialState: ServiceState = {
  items: [],
  selectedService: null,
  loading: false,
  error: null
}

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.loading = true
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      // FETCH
      .addCase(fetchServices.rejected, state => {
        state.loading = false
        state.error = 'Error al cargar servicios'
      })
      .addCase(fetchServiceEnpoints.pending, state => {
        state.loading = true
      })
      .addCase(fetchServiceEnpoints.fulfilled, (state, action) => {
        state.loading = false
        state.selectedService = action.payload
      })
      .addCase(fetchServiceEnpoints.rejected, state => {
        state.loading = false
        state.error = 'Error al cargar servicio'
      })
      // CREATE
      .addCase(createService.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      //UPDATE
      .addCase(updateService.fulfilled, (state, action) => {

        const index = state.items.findIndex(
          service => service.id === action.payload.id
        )

        if (index !== -1) {
          state.items[index] = action.payload
        }

      })
  }
})

export default serviceSlice.reducer
