import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HelloWorld from './HelloWorld'
import User from "./User"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HelloWorld greeting={'Henry'} />} />
          <Route path='/hello' element={<HelloWorld greeting={'Ali'} />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
