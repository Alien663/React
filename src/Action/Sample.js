import action from '../Lib/createAction'

export const GET_SAMPLE  = "GET_SMAPLE"
export const GetSample = (req) => action(GET_SAMPLE, { req })

export const SET_SAMPLE = "SET_SAMPLE"
export const SetSample = ( data ) => action(SET_SAMPLE, { data })