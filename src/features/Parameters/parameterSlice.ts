import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchParametersRequest, createParameterRequest } from "./parameterApi";
import type { Parameter } from "./parameter.types";

export const fetchParameters = createAsyncThunk(
    'parameters/fetch',
    async (enpointId: number) => {
        return await fetchParametersRequest(enpointId)
    }
)

// export const createParameters = createAsyncThunk<>(
//     'parameters/create',
//     async (data) => {
//         return await createParameterRequest(data)
//     }
// )

interface ParameterState {
    items: Parameter[]
    loading: boolean
    error: string | null
}

const initialState: ParameterState = {
    items: [],
    loading: false,
    error: null
}

const parameterSlice = createSlice({
    name: 'parameters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchParameters.pending, state => {
                state.loading = true
            })
            .addCase(fetchParameters.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            // FETCH
            .addCase(fetchParameters.rejected, state => {
                state.loading = false
                state.error = 'Error al cargar parametros'
            })
            // CREATE
            // .addCase(createParameters.fulfilled, (state, action) => {
            //     state.items.push(action.payload)
            // })
    },
})

export default parameterSlice.reducer