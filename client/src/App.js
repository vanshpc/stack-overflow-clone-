
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Navbar from '../src/components/navbar/navbar'
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users';
import SupportEngine from './SupportEngine'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <SupportEngine/>
        <AllRoutes/>
      </Router>
     
  
    </div>
  );
}

export default App;
