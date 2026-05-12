import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header'

function App() {
  const [count, setCount] = useState(0)
  const appName = import.meta.env.VITE_INTERN_NAME
  return (
    <div>
      <header />
    </div>
  )
}
export default App
