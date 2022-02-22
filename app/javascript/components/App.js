import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from "react-redux"

import HelloWorld from './HelloWorld'
import User from "./User"

import configureStore from "../configureStore"
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HelloWorld greeting={'Henry'} />} />
            <Route path='/hello' element={<HelloWorld greeting={'Ali'} />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
