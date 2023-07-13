import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSamples from '../Lib/fakeAPI'

const initialSampleState = {
    req: {},
    data: []
}

export const SampleThunk = createAsyncThunk('SetSample', async (req)=> {
    const res = await getSamples(req)
    return res.body
})

const SampleSlice = createSlice({
    name: "Sample",
    initialState: initialSampleState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SampleThunk.pending, (state, action) => {
                state.req = action.payload
            })
            .addCase(SampleThunk.fulfilled, (state, action) => {
                console.log(action)                
                state.data = action.payload
            })
            .addCase(SampleThunk.rejected, (state, action) => {
                window.alert("Call API Fail")
            })
    }
})

export const SampleActions = SampleSlice.actions
export default SampleSlice.reducer