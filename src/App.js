import React from 'react'
// Global style
import GlobalStyle from './components/GlobalStyle'

// importing about us page
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <AboutUs />
    </div>
  )
}

export default App