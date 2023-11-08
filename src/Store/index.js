import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SampleReducer from "./Sample";
import AppMenuReducer from './AppMenu'

const rootReducer = () =>({
    Sample: SampleReducer,
    AppMenu: AppMenuReducer,
})

const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store