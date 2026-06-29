import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Timeline from './components/Timeline.jsx'
import DarkModeButton from './components/DarkModeButton.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} />
      <div className="sections">
        <DarkModeButton darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Header darkMode={darkMode} />
        <Timeline darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
