import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './components/pages/Home'
// import Login from './components/Login'
// import Register from './components/Register'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Layout/>}/>
        
          {/* <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/home" element={<Home/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;