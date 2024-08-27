import React from 'react'
import './App.css'
import Header from './components/Header'
import MVPSubscriptionPage from './components/MVPSubscriptionPage'
import FAQAccordion from './components/FAQAccordion'
import ContextState from '../src/context/ContextProvider'

function App() {
  return (
    <div>
      <ContextState>
        <Header />
        <MVPSubscriptionPage />
        <FAQAccordion />
      </ContextState>
    </div>
  )
}

export default App
