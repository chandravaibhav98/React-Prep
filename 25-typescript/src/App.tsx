import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const user = {
        firstName: 'Vaibhav',
        lastName: "Chandra",
        role:'Professor'
    }
    console.log(user.firstName)

  return (
    <div className='App'>
      <h1>Typescript</h1>
    </div>
  )
}

export default App
