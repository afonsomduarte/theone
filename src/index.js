import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// import injectGlobal helper
import { injectGlobal } from 'styled-components'

import Main from './app/Main'

// Global style
injectGlobal`
  html,
  body,
  #app,
  .wrapper {
    min-height: 100vh;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
     padding: 0;
     margin: 0;
     font: 1rem / 1.414 Roboto;
   }
`

const wrapper = document.getElementById('app')

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

ReactDOM.render(<App />, wrapper)