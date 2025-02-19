import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards'
import Header from './components/Header'
import CardsDetails from './components/CardsDetails';


const App = () => {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Cards/>}/>
    <Route path='/cart/:id' element={<CardsDetails/>}/>
    
    </Routes>
    </Router>
  )
}

export default App
