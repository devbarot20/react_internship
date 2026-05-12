import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from 'react'
import Header from './header'
import SkillList from './SkillList'

function App() {

  const skills = [

    { name: 'JS', level: 95 },

    { name: 'React', level: 80 },

  ]

  const [stamina, setStamina] = useState(100)

  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {

    const newClickCount = clickCount + 1

    setClickCount(newClickCount)

    let reduction = 2

    if (newClickCount % 5 === 0) {

      reduction = 15

    }

    const newStamina = Math.max(stamina - reduction, 0)

    setStamina(newStamina)

  }

  return (

    <div style={{ color: 'white', padding: '20px' }}>

      <Header />

      <SkillList skills={skills} />

      <h1>Stamina Burner</h1>

      <h2>Stamina: {stamina}</h2>

      <button

        onClick={handleClick}

        disabled={stamina <= 0}

      >

        {stamina <= 0

          ? 'Burnout! Rest Required'

          : 'Write Code'}

      </button>

    </div>

  )

}

export default App  