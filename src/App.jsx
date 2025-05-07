import React from 'react'
import Navbar from './component/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Footer from './component/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>

        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App