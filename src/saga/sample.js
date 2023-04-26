import { call, put } from 'redux-saga/effects'
import * as actoins from '../Action'

const get_sample = (req) => {
    return new Promise((resolve, reject) => {
        resolve({
            "body":[
                {
                    "TID": req * 6 + 1,
                    "TName": "我不會飛",
                    "TDes": "abcd"
                },
                {
                    "TID": req * 6 + 2,
                    "TName": "abcd",
                    "TDes": "abcd"
                },
                {
                    "TID": req * 6 + 3,
                    "TName": "A1",
                    "TDes": "B1"
                },
                {
                    "TID": req * 6 + 4,
                    "TName": "A2",
                    "TDes": "B2"
                },
                {
                    "TID": req * 6 + 5,
                    "TName": "A3",
                    "TDes": "B3"
                },
                {
                    "TID": req * 6 + 6,
                    "TName": "A4",
                    "TDes": "B4"
                }
            ]
        })
    })
}

export function* GetSample(req){
    let data = yield call(get_sample, req.req)
    yield put(actoins.SetSample(data.body))
}