import React from 'react'
import Auth from '../modules/auth/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const IndexRoute=()=> {
  return (
    <Router>
        <Routes>
            <Route path='/auth' element={<Auth/>}/>
        </Routes>
    </Router>
  )
}

export default IndexRoute