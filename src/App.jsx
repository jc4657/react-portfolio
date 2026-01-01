import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Timeline from './components/Timeline.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="sections">
        <Header />
        <Timeline />
      </div>
    </>
  )
}

export default App
