import { Route, Routes } from 'react-router-dom'
import './App.css';

import RestfulRoute from './components/RestfulRoute';
import ParentComponent from './components/Parent';
import Sample from './components/Sample'
import Main from './components/Main'
import MyTestComp from './components/Test';

function App() {
  return (
      <Routes>
        <Route path='test'>
          <Route path='inheritance' element={ <ParentComponent /> }></Route>
          <Route path='route/:iid' element={ <RestfulRoute />} ></Route>
          <Route path='test' element={ <MyTestComp />}></Route>
          <Route path='' element={ <div>Test Main Page
                <br />
                <a href='/test/inheritance'>Two way binding</a>
                <br />
                <a href='/test/route/123'>Restful URL</a>
            </div>}></Route>
        </Route>
        <Route path='sample' element={<Sample />}></Route>
        <Route path='/' element={ <Main /> }></Route>
      </Routes>
  )
}

export default App;
