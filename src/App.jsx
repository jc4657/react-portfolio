import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Header from "./components/Header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
      <Navbar />
      <div className="sections">
        <Header />
      </div>
    </div>
  )
}

export default App
