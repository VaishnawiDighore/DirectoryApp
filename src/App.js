import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Add from './pages/Add';
import Retrieve from './pages/Retrieve';

function App() {
  return (
    <>
    <Main />
    <Routes>
        <Route path='/' element={<Add />} />
        <Route path='/RetrieveData' element={<Retrieve />} />    
      </Routes>
    </>
  );
}

export default App;
