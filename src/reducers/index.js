import { combineReducers } from "redux"
// import connectRouter from 'connected-react-router'
import Sample from './Sample'

const rootReducer = history =>
  combineReducers({
    // router: connectRouter(history),
    Sample
  })

export default rootReducer
