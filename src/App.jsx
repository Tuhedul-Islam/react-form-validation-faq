import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Toggle from './components/Toggle'
import Faqs from './components/Faqs'
import UseEffectApiCall from './components/UseEffectApiCall'
import GetData from './components/GetData'


function App() {
  return (
    <>
      <SignUp />

      <Toggle />

      <Faqs />

      <UseEffectApiCall />

      {/* Custom Hook */}
      <GetData />
    </>
  )
}

export default App
