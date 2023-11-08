import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAppMenu} from '../Lib/fakeAPI'

const initialAppMenuState = {
    menudata: []
}

export const AppMenuThunk = createAsyncThunk('SetAppMenu', async () => {
    const res = await getAppMenu()
    return res.body
})

const AppMenuSlice = createSlice({
    name: "AppMenu",
    initialState: initialAppMenuState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AppMenuThunk.fulfilled, (state, action) => {
                state.menudata = action.payload
            })
            .addCase(AppMenuThunk.rejected, (state, action) => {
                window.alert("Call API Fail")
            })
    }
})

export default AppMenuSlice.reducer