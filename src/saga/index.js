import { takeEvery } from "redux-saga/effects"
import * as actions from '../actions'
import * as Sample from './sample'

function* rootSaga (){
    yield takeEvery(actions.GET_SAMPLE, Sample.GetSample)
}

export default rootSaga