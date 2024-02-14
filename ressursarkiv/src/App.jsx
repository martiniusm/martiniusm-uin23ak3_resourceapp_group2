import { useState } from 'react'
import './App.css'
//import './ressurser.js'
//import './script.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <header>
            <ul id="options">
                <li id="HTML" className="menuItem" onClick="showInfo(event)">HTML</li>
                <li id="CSS" className="menuItem" onClick="showInfo(event)">CSS</li>
                <li id="JavaScript" className="menuItem" onClick="showInfo(event)">JavaScript</li>
                <li id="React" className="menuItem" onClick="showInfo(event)">React</li>
                <li id="Sanity and headless CMS" className="menuItem" onClick="showInfo(event)">Sanity and headless CMS</li>
            </ul>
        </header>
    </div>
    <main>
      
    </main>
    </>
  )
}

export default App
