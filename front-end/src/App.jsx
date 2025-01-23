import Expenses from './components/Expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Operations from './components/Operations';
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {


  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/operations" element={<Operations/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
