import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Page/Main'
import Sample from '../Page/Sample'
import FormSample from '../Page/FormSample'

const MyRouting = (props) => {
  return (
    <Routes>
      <Route path='/sample' element={<Sample />}></Route>
      <Route path='/sample/form' element={<FormSample />}></Route>
      <Route path='/' element={<Main />} />
      
    </Routes>
  )
}
export default MyRouting