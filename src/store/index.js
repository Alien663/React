import {
    createStore,
    applyMiddleware
} from 'redux'
import { createBrowserHistory } from 'history'
import logger from "redux-logger"
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer  from '../reducer'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
export default function configureStore(initialState) {
    let middlewarelist = process.env.NODE_ENV === 'production' ? [
        sagaMiddleware,
    ] : [logger,
        sagaMiddleware,
    ]

    return {
        ...createStore(
            createRootReducer(history),
            initialState,
            applyMiddleware(
                routerMiddleware(history), 
                ...middlewarelist
            ),
        ),
        runSaga: sagaMiddleware.run,
    }

}