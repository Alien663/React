import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "../Lib/fakeLogin";

const initialMemberState = {
    req: {},
    isLogin: false
}

export const LoginThunk = createAsyncThunk('Login', async (req)=> {
    const res = await LoginAPI(req)
    return res
})

const MemberSlice = createSlice({
    name: "Member",
    initialState: initialMemberState,
    reducers: {
        Logout: (state, action) => {
            state.req = {}
            state.isLogin = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginThunk.pending, (state, action) => {
                state.req = {
                    Account: action.meta.arg.Account,
                    Password: action.meta.arg.Password,
                }
            })
            .addCase(LoginThunk.fulfilled, (state, action) => {
                state.req = {}
                state.isLogin = true
                window.location.href = "/"
            })
            .addCase(LoginThunk.rejected, (state, action) => {
                state.req = {}
                window.alert("Call API Fail")
            })
    }
})

export const { Logout }  = MemberSlice.actions
export default MemberSlice.reducer