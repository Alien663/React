import { takeEvery } from "redux-saga/effects"
import * as actions from '../Action'
import * as Sample from './Sample'

function* rootSaga (){
    yield takeEvery(actions.GET_SAMPLE, Sample.GetSample)
}

export default rootSaga