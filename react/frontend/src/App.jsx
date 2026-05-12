import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header'
import SkillList from './SkillList'

function App() {
  const [count, setCount] = useState(0)
  const appName = import.meta.env.VITE_INTERN_NAME
  const hour = new Date().getHours()
  const skills = [
    {
      name : 'JS', level : 95
    },
    {
      name : 'React', level : 80
    },
    
  ]
  return (
    <div>
      <header />
      <SkillList skills={skills} />
    </div>
  )
}
export default App
