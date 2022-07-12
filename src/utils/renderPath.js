import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from '../App'

const renderPath = (path) => {
  const history = createMemoryHistory()
  history.push(path)
  const { ...resources } = render(
    <Router history={history}>
     <App />
    </Router>
  )
  return { ...resources, history }
}

export default renderPath;
