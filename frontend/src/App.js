import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
  const[alert, setAlert]=useState(null);
  const showAlert=(messege, type)=>{
    setAlert({
      msg:messege,
      type:type,
     
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  
  }
  return (
    <>
      <NoteState>
        
        <Router>
          <Nav showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className='container'>
          <Routes>
            <Route  path='/' element={<Home showAlert={showAlert} />}></Route>
            <Route  path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login showAlert={showAlert}/>}></Route>
            <Route path='/signup' element={<SignUp showAlert={showAlert}/>}></Route>
          </Routes>
          </div>
        </Router>
        
      </NoteState>
    </>
  );
}

export default App;
