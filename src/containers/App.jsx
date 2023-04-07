import { Route, Routes} from 'react-router-dom'
import Sample from './Sample';
import Main from '../components/Main'

import '../style/App.css';

function App() {
  return (
    <Routes>
      <Route path='/sample' element={<Sample />}></Route>
      <Route path='/' element={ <Main /> } />
    </Routes>
  );
}

export default App;
