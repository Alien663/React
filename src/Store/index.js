import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SampleReducer from "./Sample";

const rootReducer = () =>({
    Sample: SampleReducer,
})

const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store