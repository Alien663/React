import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrders, getOrder } from '../Lib/OrderController'

const initialOrderState = {
    req: {},
    data: [],
    OID: "",
    OrderDetail: {}
}

export const OrdersThunk = createAsyncThunk('SetOrders', async (req)=> {
    const res = await getOrders(req)
    return res.body
})

export const OrderDetailThunk = createAsyncThunk('SetOrderDetail', async (OID)=> {
    const res = await getOrder(OID)
    return res.body
})

const OrderSlice = createSlice({
    name: "Order",
    initialState: initialOrderState,
    reducers: {
        handleChangeInput: (state, action) => {
            state.OrderDetail[action.payload.ColName] = action.payload.data
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(OrdersThunk.pending, (state, action) => {
                state.req = action.meta.arg
            })
            .addCase(OrdersThunk.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(OrdersThunk.rejected, (state, action) => {
                window.alert("Call API Fail")
            })
            .addCase(OrderDetailThunk.pending, (state, action) => {
                state.OID = action.meta.arg
            })
            .addCase(OrderDetailThunk.fulfilled, (state, action) => {
                state.OrderDetail = action.payload
            })
            .addCase(OrderDetailThunk.rejected, (state, action) => {
                window.alert("Call API Fail")
            })
    }
})


export const { handleChangeInput } = OrderSlice.actions
export default OrderSlice.reducer