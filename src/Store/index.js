import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import Sample from "./Sample";
import AppMenu from './AppMenu'
import Member from "./Member";
import Order from './Order'

const rootReducer = () =>({
    Sample,
    AppMenu,
    Member,
    Order,
})

const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store