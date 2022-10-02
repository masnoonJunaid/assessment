import './App.css';
import { HomePage } from './Pages/HomePage';
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element ={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
